import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV || 'development';

const env = {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  base_url: process.env.BASE_URL,
  session_secret: process.env.SESSION_SECRET,
  auth0_domain: process.env.AUTH0_DOMAIN,
  auth0_audience: process.env.AUTH0_AUDIENCE,
  auth0_client_id: process.env.AUTH0_CLIENT_ID,
  auth0_client_secret: process.env.AUTH0_CLIENT_SECRET
};

const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

export { env, isDev, isProd };
