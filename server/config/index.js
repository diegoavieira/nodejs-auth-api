import dotenv from 'dotenv';

const dotenvConfig = dotenv.config();
const nodeEnv = process.env.NODE_ENV || 'development';

if (dotenvConfig.error) {
  throw new Error(`Couldn't find .env file`);
}

const env = {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  domain: process.env.DOMAIN,
  audience: process.env.AUDIENCE,
  client_id: process.env.CLIENT_ID
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };