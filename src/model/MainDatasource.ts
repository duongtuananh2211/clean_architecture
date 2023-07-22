import { DataSource } from "typeorm";
import TypeOrmDatasource from "./TypeOrmDatasource";
import mysql from "../databases/mysql/mysql";

export default class MainDatasource extends TypeOrmDatasource {
  getDatasource: () => DataSource = () => {
    return mysql;
  };
}
