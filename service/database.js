/*
* File:        /service/database.js
* Description:
* Used by:
* Dependency:
* HISTORY:
* Date        By   Comments
* ----------  ---  ---------------------------------------------------------
* 2022-11-27  KP   initialize
*/

'use strict';

var pkg = require("oracledb")

const database = {
  user: "REST",
  password: "babilon5",
  connectString: "172.17.0.2:1521/orclpdb1",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
};

const { createPool, getPool, getConnection } = pkg;

async function initialize() {
  await createPool(database);
}

module.exports.initialize = initialize;

async function close() {
  await getPool().close();
}

module.exports.close = close;

async function sqlExecute (statement, binds = [], opts = {}){
  return new Promise(async (resolve, reject) => {
    let conn;

    opts.outFormat = pkg.OUT_FORMAT_OBJECT;
    opts.autoCommit = true;

    try {
      conn = await getConnection();
      console.log("🔺statement: ", statement);
      console.log("🔺binds:     ", binds);
      console.log("🔺opts:      ", opts);

      const result = await conn.execute(statement, binds, opts);
      console.log("🔺result:    ", result);
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

module.exports.simpleExecute = sqlExecute;

