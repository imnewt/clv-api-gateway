import {
  API_USER_SERVICE_URL,
  API_VESSEL_SERVICE_URL,
  SERVICE,
} from './constants';

export const getUrlByServiceName = (serviceName: string): string => {
  switch (serviceName) {
    case SERVICE.VESSEL:
      return API_VESSEL_SERVICE_URL;
    case SERVICE.USER:
    default:
      return API_USER_SERVICE_URL;
  }
};
