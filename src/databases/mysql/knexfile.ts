module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "todo",
  },
  pool: {
    // Maximum concurrent connections for Machine Type db-f1-micro (test) is 25,
    // on better Machine Type, this ranges from 100 to 1000,
    // See more below
    // https://cloud.google.com/sql/docs/quotas#fixed-limits
    // max: postgresConfig.max_concurrent_connection,
    // min: 5,

    // 'acquireTimeoutMillis' is the number of milliseconds before a timeout occurs when acquiring a
    // connection from the pool. This is slightly different from connectionTimeout, because acquiring
    // a pool connection does not always involve making a new connection, and may include multiple retries.
    // when making a connection
    acquireTimeoutMillis: 1000 * 10, // 5 second

    // 'createTimeoutMillis` is the maximum number of milliseconds to wait trying to establish an
    // initial connection before retrying.
    // After acquireTimeoutMillis has passed, a timeout exception will be thrown.
    createTimeoutMillis: 1000 * 10,

    // 'idleTimeoutMillis' is the number of milliseconds a connection must sit idle in the pool
    // and not be checked out before it is automatically closed.
    idleTimeoutMillis: 10000, // 30 secs
    createRetryIntervalMillis: 200,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
};
