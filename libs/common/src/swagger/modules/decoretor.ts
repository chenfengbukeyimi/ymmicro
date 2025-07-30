import {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiParam,
  PickType,
  OmitType,
  ApiProperty,
  PartialType,
  ApiConsumes,
  ApiOperation,
  ApiBearerAuth,
  ApiQueryOptions,
  ApiHideProperty,
} from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';

export { PickType, OmitType, PartialType };

export {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiParam,
  ApiProperty,
  ApiOperation,
  ApiBearerAuth,
  ApiHideProperty,
};

/**
 * ApiQuerys 用法
 * 必须字段：name、type、description。
 * 应用示例：ApiQuerys[{ name:'condition', type: CreateuserDto }, { name:'pagination' }]
 */
export function ApiQuerys(options: ApiQueryOptions[]) {
  const opts: (MethodDecorator & ClassDecorator)[] = [];
  while (options.length) {
    const config = ApiQuery(options.shift()!);
    opts.push(config);
  }

  return applyDecorators(...opts);
}

export function ApiUploadFile(field: string = 'file') {
  const config = ApiBody({
    schema: {
      type: 'object',
      properties: {
        [field]: {
          type: 'string',
          format: 'binary',
          description: '单个文件对象',
        },
      },
    },
  });
  const consumes = ApiConsumes('multipart/form-data');
  return applyDecorators(consumes, config);
}

export function ApiUploadFiles(field: string = 'files') {
  const config = ApiBody({
    schema: {
      type: 'object',
      properties: {
        [field]: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: '文件对象列表',
        },
      },
    },
  });
  const consumes = ApiConsumes('multipart/form-data');
  return applyDecorators(consumes, config);
}

export function ApiUploadChunk(field: string = 'chunk') {
  const config = ApiBody({
    schema: {
      type: 'object',
      properties: {
        [field]: {
          type: 'string',
          format: 'binary',
          description: '分片文件对象(格式:总数_文件名_分片序号)',
        },
      },
    },
  });
  const consumes = ApiConsumes('multipart/form-data');
  return applyDecorators(consumes, config);
}
