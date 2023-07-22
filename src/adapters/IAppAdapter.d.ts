import { Response, Request } from "express";

export interface IAppAdapter {
  get: (
    path: string,
    callback: (req: Request, res: Response) => any | void
  ) => void;

  post: (
    path: string,
    callback: (req: Request, res: Response) => any | void
  ) => void;
}
