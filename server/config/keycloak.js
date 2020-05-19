import sessionExpress from 'express-session';
import Keycloak from 'keycloak-connect';
import { env } from './environment';

const memoryStore = new sessionExpress.MemoryStore();

const config = {
  clientId: env.client_id,
  bearerOnly: true,
  serverUrl: env.auth_url,
  realm: env.realm,
  credentials: {
    secret: env.client_secret
  }
};

const keycloak = new Keycloak({ store: memoryStore }, config);

export default keycloak;
