import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  auth_url: process.env.AUTH_URL,
  realm: process.env.REALM,
  client_id: process.env.CLIENT_ID
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
