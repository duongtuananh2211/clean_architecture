import IBaseRepo from "../repositories/interfaces/IBaseRepo";
import IBaseService from "./interfaces/IBaseService";

export default class BaseService<T extends object> implements IBaseService<T> {
  repo: IBaseRepo<T>;
  constructor(repo: IBaseRepo<T>) {
    this.repo = repo;
  }

  getRepo: IBaseService<T>["getRepo"] = () => {
    return this.repo;
  };
}
