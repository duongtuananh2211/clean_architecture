import { error } from "console";
import ValidationError from "../errors/ValidationError";
import BaseMiddleware from "../middlewares/BaseMiddleware";
import IBaseValidator from "./interfaces/IBaseValidator";
import IYupValidator from "./interfaces/IYupValidator";

export default abstract class BaseValidator
  extends BaseMiddleware
  implements IBaseValidator, IYupValidator
{
  abstract rules: IYupValidator["rules"];

  middleware: IBaseValidator["middleware"] = async (req, res) => {
    const rules = this.rules(req);

    try {
      await rules.validate(req.body, { abortEarly: false });
    } catch (e) {
      console.debug(error);
      return new ValidationError(this.getErrorMessages(e));
    }

    return null;
  };

  getErrorMessages: (error: any) => { [k: string]: string } = (error) => {
    const errors: { [k: string]: string } = {};
    console.debug(error.inner);
    error.inner.forEach((e: any) => {
      errors[e.path] = e.message;
    });

    return errors;
  };
}
