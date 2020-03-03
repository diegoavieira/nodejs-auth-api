const nodeEnv = process.env.NODE_ENV || 'development';

const envs = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL
};

const isDev = nodeEnv === 'development';
const isTest = nodeEnv === 'test';
const isProd = nodeEnv === 'production';

export { envs, isDev, isTest, isProd };
