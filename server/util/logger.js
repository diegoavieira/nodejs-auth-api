import { format, createLogger, transports } from 'winston';
import { isDev } from '../config/environment';

const logger = createLogger({
  format: format.combine(format.colorize(), format.timestamp()),
  transports: [
    new transports.Console({
      level: isDev ? 'debug' : 'info',
      format: format.printf(info => {
        return `[${info.level}] ${info.message}`;
      })
    }),
    new transports.File({
      level: 'error',
      filename: 'logs/error.log',
      maxsize: 5242880,
      format: format.printf(info => {
        return `${info.timestamp}: ${info.message}`;
      })
    })
  ]
});

logger.stream = {
  write: info => logger.debug(info)
};

export default logger;
