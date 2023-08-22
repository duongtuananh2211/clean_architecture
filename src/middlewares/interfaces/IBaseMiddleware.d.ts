import { Request, Response, NextFunction } from "express";

export default interface IBaseMiddleware {
  middleware: (req: Request, res: Response) => Promise<Error | null>;
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
