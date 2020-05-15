import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  auth0_domain: process.env.AUTH0_DOMAIN,
  auth0_audience: process.env.AUTH0_AUDIENCE
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
