import { IBaseController } from "./IBaseController";
import { Request, Response } from "express";

export interface ICalculatorController extends IBaseController {
  index: (req: Request, res: Response) => void;

  add: (req: Request, res: Response) => void;
}
