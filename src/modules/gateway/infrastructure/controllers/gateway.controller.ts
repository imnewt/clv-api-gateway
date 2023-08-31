import { All, Controller, HttpException, Req, Res } from '@nestjs/common';
import axios from 'axios';

import { getUrlByServiceName } from 'src/shared/utilities/functions';

@Controller()
export class GatewayController {
  @All('*')
  async forwardRequest(@Req() req, @Res() res) {
    const accessToken: string = req.headers['authorization'];
    const serviceName: string = req.url.split('/')[1];
    const baseUrl: string = getUrlByServiceName(serviceName);
    const requestUrl: string = '/api/' + req.url.split('/').slice(2).join('/');

    const axiosConfig = {
      method: req.method,
      url: baseUrl + requestUrl,
      data: req.body,
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      const response = await axios(axiosConfig);
      res.status(response.status).json(response.data);
    } catch (error) {
      const { errors, statusCode } = error.response.data;
      throw new HttpException(errors, statusCode);
    }
  }
}
