import IBaseRepo from "../../repositories/interfaces/IBaseRepo";

export default interface IBaseService<T extends object> {
  repo: IBaseRepo<T>;

  getRepo: () => IBaseRepo<T>;
}
