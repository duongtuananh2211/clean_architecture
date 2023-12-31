import IBaseRepository from "../../repositories/interfaces/IBaseRepository";

export default interface IBaseService<T extends object> {
  repostiory: IBaseRepository<T>;

  find: (id: string) => Promise<T>;

  create: (data: object) => Promise<T>;

  update: (id: string, data: object) => Promise<any>;

  delete: (id: string) => Promise<void>;

  getAll: () => Promise<T[]>;

  restore: (id: string) => Promise<void>;
}
