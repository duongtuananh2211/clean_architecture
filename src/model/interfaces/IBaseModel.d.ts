export default interface IBaseModel<T extends object> {
  getAll: () => Promise<T[]>;
  find: (id: string) => Promise<T>;
}
