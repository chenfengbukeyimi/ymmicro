import 'express';
export { Request, Response } from 'express';

declare module 'express' {
  interface Request {
    user?: object;
  }

  interface Response {
    data?: object;
  }
}
