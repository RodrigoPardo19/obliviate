import * as process from 'process';

export default () => {
  return {
    environment: {
      NODE_ENV: process.env.NODE_ENVIRONMENT,
      PORT: process.env.PORT,
    },
    database: {
      DATABASE_URL: process.env.DATABASE_URL,
      DATABASE_NAME: process.env.DATABASE_NAME,
    },
    security: {
      RATE_LIMITING_TTL: process.env.RATE_LIMITING_TTL,
      RATE_LIMITING_LIMIT: process.env.RATE_LIMITING_LIMIT,
    },
  };
};
