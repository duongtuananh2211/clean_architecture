import { Knex } from "knex";
import { TABLES } from "../../../constants/Database";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists(TABLES.ROLES, (builder) => {
    builder.bigIncrements("id");
    builder.string("organization_id", 50).nullable();
    builder.string("name");
    builder.string("description").nullable();
    builder.string("team_id").nullable();
    builder.tinyint("state");
    builder.string("acronym", 100);
    builder.timestamp("created_at");
    builder.timestamp("updated_at").nullable();
    builder.timestamp("deleted_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TABLES.ROLES);
}
