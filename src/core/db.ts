import tedious = require("tedious");
import { Sequelize } from "sequelize";

const { dbName, dbConfig } = require("../../config.json");

const db: any = {};

initialize();

async function initialize() {
  const dialect = "mssql";
  const host = dbConfig.server;
  const { userName, password } = dbConfig.authentication.options;

  // create db if it doesn't already exist
  await ensureDbExists(dbName);

  // connect to db
  const sequelize = new Sequelize(dbName, userName, password, {
    host,
    dialect,
  });

  // init models and add them to the exported db object
  db.User = require("../entity/user/schema")(sequelize);
  db.Log = require("../entity/log/schema")(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
}

async function ensureDbExists(dbName: string) {
  return new Promise((resolve, reject) => {
    const connection = new tedious.Connection(dbConfig);
    connection.connect((err) => {
      if (err) {
        console.error(err);
        reject(`Connection Failed: ${err.message}`);
      }

      const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
      const request = new tedious.Request(createDbQuery, (err) => {
        if (err) {
          console.error(err);
          reject(`Create DB Query Failed: ${err.message}`);
        }

        // query executed successfully
        resolve(1);
      });

      connection.execSql(request);
    });
  });
}

export default db;
