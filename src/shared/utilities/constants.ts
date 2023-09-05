export const API_GATEWAY_PORT = 9004;

export enum SERVICE {
  USER = 'user-service',
  VESSEL = 'vessel-service',
}

export const GLOBAL_PREFIX = 'api';
export const AUTH_PREFIX = 'auth';

export const API_USER_SERVICE_URL = 'http://localhost:9002';
export const API_VESSEL_SERVICE_URL = 'http://localhost:9005';

export enum MODULE {
  GATEWAY = 'gateway',
}

export enum ERROR {
  UNAUTHORIZED = 'Unauthorized!',
}

export const jwtConstants = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
