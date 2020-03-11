import { format, createLogger, transports } from 'winston';
import { isDev } from '../config/environment';

const logger = createLogger({
  format: format.combine(format.colorize(), format.timestamp()),
  transports: [
    new transports.Console({
      level: isDev ? 'debug' : 'info',
      format: format.printf(info => {
        if (typeof info.message === 'string') {
          return `[${info.level}] ${info.message}`;
        } else {
          return `[${info.level}] ${JSON.stringify(info.message)}`;
        }
      })
    }),
    new transports.File({
      level: 'error',
      filename: 'logs/error.log',
      maxsize: 5242880,
      format: format.printf(info => {
        if (typeof info.message === 'string') {
          return `${info.timestamp}: ${info.message}`;
        } else {
          return `${info.timestamp}: ${JSON.stringify(info.message)}`;
        }
      })
    })
  ]
});

logger.stream = {
  write: info => logger.debug(info)
};

export default logger;
