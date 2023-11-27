const winston = require('winston')
const logger = winston.createLogger({
    level: 'info', //logging level 
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  logger.log('info', 'This is an informational message.');
  