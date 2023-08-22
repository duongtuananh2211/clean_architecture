import Singleton from "../providers/Singleton";
import IBaseRepository from "../repositories/interfaces/IBaseRepository";
import { RoleType } from "../types/entities";
import IBaseService from "./interfaces/IBaseService";

export default class BaseService
  extends Singleton
  implements IBaseService<RoleType>
{
  repostiory: IBaseRepository<RoleType>;

  constructor(repository: IBaseRepository<RoleType>) {
    super();
    this.repostiory = repository;
  }

  find: (id: string) => Promise<RoleType> = (id) => {
    return this.repostiory.find(id);
  };
  create: (data: object) => Promise<RoleType> = (data) => {
    return this.repostiory.create(data);
  };
  update: (id: string, data: object) => Promise<any> = (id, data) => {
    return this.repostiory.update(id, data);
  };
  delete: (id: string) => Promise<void> = (id) => {
    return this.repostiory.delete(id);
  };
  getAll: () => Promise<RoleType[]> = () => {
    return this.repostiory.getAll();
  };
  restore: (id: string) => Promise<void> = (id) => {
    return this.repostiory.restore(id);
  };
}
