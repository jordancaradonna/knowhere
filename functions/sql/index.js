// [START functions_sql_mysql]
const mysql = require('mysql');
// [END functions_sql_mysql]

// [START functions_sql_postgres]
const pg = require('pg');
// [END functions_sql_postgres]

// [START functions_sql_mysql]
// [START functions_sql_postgres]

/**
 * TODO(developer): specify SQL connection details
 */
const connectionName =
  process.env.INSTANCE_CONNECTION_NAME || 'knowhere-230719:us-central1:knowhere';
const dbUser = process.env.SQL_USER || 'root';
const dbPassword = process.env.SQL_PASSWORD || '@1dan$ucks';
const dbName = process.env.SQL_NAME || 'knowhere';

// [END functions_sql_postgres]
// [END functions_sql_mysql]

// [START functions_sql_mysql]
const mysqlConfig = {
  connectionLimit: 1,
  user: dbUser,
  password: dbPassword,
  database: dbName,
};
if (process.env.NODE_ENV === 'production') {
  mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
}

// Connection pools reuse connections between invocations,
// and handle dropped or expired connections automatically.
let mysqlPool;

exports.mysqlDemo = (req, res) => {
  // Initialize the pool lazily, in case SQL access isn't needed for this
  // GCF instance. Doing so minimizes the number of active SQL connections,
  // which helps keep your GCF instances under SQL connection limits.
  if (!mysqlPool) {
    mysqlPool = mysql.createPool(mysqlConfig);
  }

  mysqlPool.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(JSON.stringify(results));
    }
  });

  // Close any SQL resources that were declared inside this function.
  // Keep any declared in global scope (e.g. mysqlPool) for later reuse.
};
// [END functions_sql_mysql]
