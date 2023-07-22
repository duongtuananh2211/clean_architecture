import IBaseModel from "../../model/interfaces/IBaseModel";

export default interface IBaseRepo<T extends object> {
  getAll: () => Promise<T[]>;
  find: (id: string) => Promise<T>;
  getModel: () => IBaseModel<T>;
}
