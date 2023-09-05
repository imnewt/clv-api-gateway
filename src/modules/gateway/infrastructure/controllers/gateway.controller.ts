import { All, Controller, Req, Res } from '@nestjs/common';
import axios from 'axios';

import { getUrlByServiceName } from '@shared/utilities/functions';
import { BusinessException } from '@shared/exceptions/business.exception';
import {
  API_USER_SERVICE_URL,
  GLOBAL_PREFIX,
  MODULE,
} from '@shared/utilities/constants';

@Controller()
export class GatewayController {
  @All('*')
  async forwardRequest(@Req() req, @Res() res) {
    try {
      const accessToken: string = req.headers['authorization'];
      const serviceName: string = req.url.split('/')[1];
      const baseUrl: string = getUrlByServiceName(serviceName);
      const requestUrl: string =
        `/${GLOBAL_PREFIX}/` + req.url.split('/').slice(2).join('/');
      const requestUser = req.user;

      const axiosConfig = {
        method: req.method,
        url: baseUrl + requestUrl,
        data: req.body,
        headers: {
          Authorization: accessToken,
        },
      };

      if (requestUser) {
        const userPermissionsResponse = await axios({
          ...axiosConfig,
          method: 'GET',
          url: `${API_USER_SERVICE_URL}/${GLOBAL_PREFIX}/users/${requestUser.sub}/permissions`,
        });
        axiosConfig.headers['User-Permissions'] = JSON.stringify(
          userPermissionsResponse.data || [],
        );
      }

      const response = await axios(axiosConfig);
      res.status(response.status).json(response.data);
    } catch (error) {
      const { errors, statusCode } = error.response.data;
      throw new BusinessException(MODULE.GATEWAY, errors, statusCode);
    }
  }
}
