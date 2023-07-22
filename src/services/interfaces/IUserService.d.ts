import { UserType } from "../../type";
import IBaseService from "./IBaseService";

export default interface IUserService extends IBaseService<UserType> {
  all: () => Promise<UserType[]>;
  count: () => Promise<number>;
}
