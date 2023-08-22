import { Model } from "../databases/mysql/database";

export default class Role extends Model {
  static get tableName() {
    return "roles";
  }
}
