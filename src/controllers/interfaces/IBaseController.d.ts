import { IAppAdapter } from "../../adapters/IAppAdapter";
import { Request, Response } from "express";

export interface IBaseController {
  prefixRoute: string | undefined;

  setApp: (app: IAppAdapter) => void;

  getApp: () => IAppAdapter;

  setPrefixRoute: (prefix: string) => void;

  get: (
    string: string,
    handler: (req: Request, res: Response) => any | void
  ) => void;

  post: (
    string: string,
    handler: (req: Request, res: Response) => any | void
  ) => void;
}
