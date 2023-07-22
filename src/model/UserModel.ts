import { EntitySchema } from "typeorm";
import BaseTypeOrmModel from "./BaseTypeOrmModel";
import User from "../databases/mysql/entities/User";
import { UserType } from "../type";

export default class UserModel extends BaseTypeOrmModel<UserType> {
  getEntity: () => EntitySchema<UserType> = () => {
    return User;
  };
}
