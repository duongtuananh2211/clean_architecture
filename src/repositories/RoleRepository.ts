import Role from "../models/Role";
import { RoleType } from "../types/entities";
import BaseRepository from "./BaseRepository";
import IRoleRepository from "./interfaces/IRoleRepostiory";

export default class RoleRepository
  extends BaseRepository<RoleType>
  implements IRoleRepository
{
  getModel: BaseRepository<Role>["getModel"] = () => {
    return Role;
  };
}
