import Singleton from "../providers/Singleton";
import { now } from "../utils/date";
import IBaseRepository from "./interfaces/IBaseRepository";
import IObjectionModelConnector from "./interfaces/IObjectionModelConnector";

export default abstract class BaseRepository<T extends Object>
  extends Singleton
  implements IBaseRepository<T>, IObjectionModelConnector
{
  abstract getModel: IObjectionModelConnector["getModel"];

  find: IBaseRepository<T>["find"] = async (id: string) => {
    return this.getModel().query().findById(id) as unknown as T;
  };

  create: IBaseRepository<T>["create"] = async (data) => {
    return this.getModel().query().insert(data) as unknown as T;
  };

  update: IBaseRepository<T>["update"] = async (id, data) => {
    return this.getModel().query().findById(id).patch(data);
  };

  delete: IBaseRepository<T>["delete"] = async (id: string) => {
    return this.update(id, { deleted_at: now() });
  };

  getAll: IBaseRepository<T>["getAll"] = async () => {
    return this.getModel()
      .query()
      .whereNull("deleted_at")
      .select("*") as unknown as T[];
  };

  restore: IBaseRepository<T>["restore"] = async (id) => {
    return this.update(id, { deleted_at: null });
  };
}
