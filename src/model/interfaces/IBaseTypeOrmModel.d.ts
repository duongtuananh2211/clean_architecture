import { EntitySchema } from "typeorm";
import IBaseModel from "./IBaseModel";

export default interface IBaseTypeOrmModel<T extends Object>
  extends IBaseModel<T> {
  getEntity: () => EntitySchema<T>;
}
