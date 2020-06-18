import dotenv from 'dotenv';

const dotenvConfig = dotenv.config();

if (dotenvConfig.error) {
  throw new Error(`Couldn't find .env file`);
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const nodeEnv = process.env.NODE_ENV;

const config = {
  env: {
    port: process.env.PORT,
    database_uri: process.env.DATABASE_URI,
    domain: process.env.DOMAIN,
    audience: process.env.AUDIENCE,
    client_id: process.env.CLIENT_ID
  },
  isDev: nodeEnv === 'development',
  isProd: nodeEnv === 'production'
};

export default config;
