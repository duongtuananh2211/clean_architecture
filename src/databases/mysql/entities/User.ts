import { EntitySchema } from "typeorm";

const User = new EntitySchema({
  name: "User", // Will use table name `post` as default behaviour.
  tableName: "users", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      nullable: true,
    },
    email: {
      type: "varchar",
      nullable: false,
      unique: true,
    },
    password: {
      type: "varchar",
      nullable: true,
    },
  },
  relations: {},
});

export default User;
