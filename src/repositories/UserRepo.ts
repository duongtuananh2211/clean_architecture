import UserModel from "../model/UserModel";
import IBaseModel from "../model/interfaces/IBaseModel";
import { UserType } from "../type";
import BaseRepo from "./BaseRepo";

export default class UserRepo extends BaseRepo<UserType> {
  getModel: () => IBaseModel<UserType> = () => {
    return new UserModel();
  };
}
