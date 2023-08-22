import BaseValidator from "./BaseValidator";
import * as Yup from "yup";
import IYupValidator from "./interfaces/IYupValidator";

export default class CreateRoleValidator extends BaseValidator {
  rules: IYupValidator["rules"] = () => {
    return Yup.object({
      name: Yup.string().required("Name can not be empty!"),
      state: Yup.number().required("State can not be empty!"),
    });
  };
}
