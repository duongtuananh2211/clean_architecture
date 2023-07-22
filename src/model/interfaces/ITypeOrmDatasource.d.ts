import { DataSource } from "typeorm";

export default interface ITypeOrmDatasource {
  getDatasource: () => DataSource;
}
