import { IBaseController } from "./IBaseController";
import { Request, Response } from "express";

export default interface ITodoController extends IBaseController {
  index: (req: Request, res: Response) => void;
  all: (req: Request, res: Response) => void;
  count: (req: Request, res: Response) => void;
}
