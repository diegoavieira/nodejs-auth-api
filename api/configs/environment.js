const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
