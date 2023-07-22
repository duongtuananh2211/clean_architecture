import { Request, Response } from "express";
import { IAppAdapter } from "../adapters/IAppAdapter";
import BaseController from "./BaseController";
import { ICalculatorController } from "./interfaces/ICalculatorController";

export default class CalculatorController
  extends BaseController
  implements ICalculatorController
{
  constructor(app: IAppAdapter) {
    super(app);

    this.get("index", this.index);
    this.post("add", this.add);
  }

  getPrefixRoute = () => {
    return "calculator";
  };

  index = (req: Request, res: Response) => {
    res.send("Here is index route of Calculator controller");
  };

  add: ICalculatorController["add"] = (req, res) => {
    const body = req.body as number[];

    const total = body.reduce((total, number) => total + number, 0);

    const json = {
      total,
      message: '"Here is add route of Calculator controller"',
    };

    res.json(json);
  };
}
