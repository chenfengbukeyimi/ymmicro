import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from '@app/common/extend/index';

import { getApiResponse } from './util';
import { ExceptionInfo } from './interface';

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const error = exception.getResponse() as ExceptionInfo;

    const result = getApiResponse(response);
    result.status = status;
    result.message = typeof error === 'object' ? error.message : error;

    response.status(status).json(result);
  }
}
