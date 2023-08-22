export default interface IBaseRepository<T extends Object> {
  find: (id: string) => Promise<T>;
  create: (data: object) => Promise<T>;
  update: (id: string, data: object) => Promise<any>;
  delete: (id: string) => Promise<void>;
  getAll: () => Promise<T[]>;
  restore: (id: string) => Promise<void>;
}
