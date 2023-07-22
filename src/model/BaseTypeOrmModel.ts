import IBaseTypeOrmModel from "./interfaces/IBaseTypeOrmModel";
import MainDatasource from "./MainDatasource";

export default abstract class BaseTypeOrmModel<T extends Object>
  extends MainDatasource
  implements IBaseTypeOrmModel<T>
{
  abstract getEntity: IBaseTypeOrmModel<T>["getEntity"];
  getAll: IBaseTypeOrmModel<T>["getAll"] = () => {
    return this.getDatasource().manager.find(this.getEntity());
  };
  find: IBaseTypeOrmModel<T>["find"] = (id) => {
    return this.getDatasource().manager.getId(this.getEntity(), id);
  };
}
