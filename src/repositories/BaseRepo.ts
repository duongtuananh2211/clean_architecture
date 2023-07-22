import IBaseModel from "../model/interfaces/IBaseModel";
import IBaseRepo from "./interfaces/IBaseRepo";

export default abstract class BaseRepo<T extends Object>
  implements IBaseRepo<T>
{
  abstract getModel: () => IBaseModel<T>;
  getAll: () => Promise<T[]> = () => {
    return this.getModel().getAll();
  };
  find: (id: string) => Promise<T> = (id: string) => {
    return this.getModel().find(id);
  };
}
