import Knex from "knex";
// import bookshelf from "bookshelf";
import { Model } from "objection";

const database = Knex(require("./knexfile"));

// export const builder = bookshelf(database as any);
// builder.plugin("registry"); // Resolve circular dependencies with relations
// builder.plugin("visibility");
Model.knex(database);

export { Model };
export default database;
