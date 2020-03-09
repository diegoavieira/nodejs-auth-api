import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  tokenSecreat: process.env.TOKEN_SECREAT,
  refreshTokenSecreat: process.env.REFRESH_TOKEN_SECREAT,
  tokenLive: process.env.TOKEN_LIVE,
  refreshTokenLive: process.env.REFRESH_TOKEN_LIVE
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
