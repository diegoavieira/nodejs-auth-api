import { format, createLogger, transports } from 'winston';

const dateNow = new Date(Date.now()).toUTCString();

const logger = createLogger({
  format: format.combine(format.colorize()),
  transports: [
    new transports.Console({
      format: format.printf(info => {
        return `[${info.level}] ${info.message}`;
      })
    }),
    new transports.File({
      level: 'error',
      filename: 'logs/error.log',
      maxsize: 5242880,
      format: format.printf(info => {
        return `${dateNow} | ${info.message}`;
      })
    })
  ]
});

logger.stream = {
  write: info => logger.info(info)
};

export default logger;
