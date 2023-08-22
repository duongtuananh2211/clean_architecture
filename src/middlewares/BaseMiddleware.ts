import { Request, Response } from "express";
import IBaseMiddleware from "./interfaces/IBaseMiddleware";
import ValidationError from "../errors/ValidationError";
import Singleton from "../providers/Singleton";

export default abstract class BaseMiddleware
  extends Singleton
  implements IBaseMiddleware
{
  abstract middleware: (req: Request, res: Response) => Promise<Error | null>;

  handler: IBaseMiddleware["handler"] = async (req, res, next) => {
    const error = await this.middleware(req, res);

    if (error) {
      if (error instanceof ValidationError) {
        res.status(422);
        res.statusMessage = "invalid-parameter";
        res.json(error.data);

        return;
      } else {
        throw error;
      }
    } else {
      next();
    }
  };
}
