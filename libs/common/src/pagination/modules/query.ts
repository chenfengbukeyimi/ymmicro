import { PaginationDto } from './dto';

export class PaginationQuery<T extends object> {
  public option: T;
  public page: number;
  public limit: number;

  private isNaN(value: unknown): boolean {
    return Number.isNaN(value);
  }

  constructor(query: PaginationDto & T) {
    const { page, limit, ...option } = query;

    const NaNPage = this.isNaN(page);
    const NaNLimit = this.isNaN(limit);

    this.option = option as T;
    this.page = NaNPage ? 0 : Number(page);
    this.limit = NaNLimit ? 0 : Number(limit);
  }

  public get skip(): number | undefined {
    if ([this.page, this.limit].some((value) => value <= 0)) return undefined;

    const _skip = (this.page - 1) * this.limit;
    return _skip >= 0 ? _skip : undefined;
  }

  public get take(): number | undefined {
    if ([this.page, this.limit].some((value) => value <= 0)) return undefined;
    return this.limit;
  }
}
