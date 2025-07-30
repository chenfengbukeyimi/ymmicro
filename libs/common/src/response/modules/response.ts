import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from '@app/common/extend/index';

import { getApiResponse } from './util';
import { ApiResponse } from './interface';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse> {
    const req_time = new Date().getTime();

    return next.handle().pipe(
      map((data) => {
        const res_time = new Date().getTime();
        const response = context.switchToHttp().getResponse<Response>();

        const result = getApiResponse(response);
        result.req_time = req_time;
        result.res_time = res_time;
        result.body = data;

        return result;
      }),
    );
  }
}
