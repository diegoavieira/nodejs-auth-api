import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  tokenSecreat: process.env.TOKEN_SECRET,
  tokenLive: process.env.TOKEN_LIFE
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
