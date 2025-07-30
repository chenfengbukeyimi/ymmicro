import { ApiProperty } from '@app/common/swagger/index';

import { Transform, Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @ApiProperty({ description: '当前页码', required: false })
  @IsString()
  @Type(() => Number)
  @Transform(({ value }) => Number(value))
  readonly page: number;

  @IsOptional()
  @ApiProperty({ description: '每页条数', required: false })
  @IsString()
  @Type(() => Number)
  @Transform(({ value }) => Number(value))
  readonly limit: number;
}
