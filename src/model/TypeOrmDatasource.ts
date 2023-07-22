import ITypeOrmDatasource from "./interfaces/ITypeOrmDatasource";

export default abstract class TypeOrmDatasource implements ITypeOrmDatasource {
  abstract getDatasource: ITypeOrmDatasource["getDatasource"];
}
