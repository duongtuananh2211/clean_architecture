import { Request, Response, Express } from "express";
import IBaseMiddleware from "../../middlewares/interfaces/IBaseMiddleware";

export interface IBaseController {
  prefixRoute: string | undefined;

  setApp: (app: Express) => void;

  getApp: () => Express;

  setPrefixRoute: (prefix: string) => void;

  get: (
    string: string,
    handler: (req: Request, res: Response) => any | void,
    ...middlewares: IBaseMiddleware[]
  ) => void;

  post: (
    string: string,
    handler: (req: Request, res: Response) => any | void,
    ...middlewares: IBaseMiddleware[]
  ) => void;
}
