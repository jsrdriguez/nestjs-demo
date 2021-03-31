import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Functional Request...`);
  next();
};

export function categoryMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Functional Request Category...`);
  next();
};