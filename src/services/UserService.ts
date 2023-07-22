import BaseService from "./BaseService";
import IUserService from "./interfaces/IUserService";
import User from "../databases/mysql/entities/User";
import mysql from "../databases/mysql/mysql";
import { UserType } from "../type";

export default class TodoService
  extends BaseService<UserType>
  implements IUserService
{
  all: IUserService["all"] = async () => {
    return this.repo.getAll();
  };
  count: IUserService["count"] = async () => {
    const users = await this.all();

    return users.length;
  };
}
