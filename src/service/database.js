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

'use strict'

const oracledb = require('oracledb')
const dbConfig = require("./config.js")

async function initialize() {
  oracledb.createPool(database21g)
}

async function close() {
  await oracledb.getPool().close()
}

exports.sqlExecute = function(statement, binds = [], options = {}) {
  return new Promise(async (resolve, reject) => {
    let connection
    options.outFormat = oracledb.OUT_FORMAT_OBJECT
    options.autoCommit = true
    options.extendedMetaData = true
    options.fetchArraySize = 100
    try {
      connection = await oracledb.getConnection(dbConfig.database21g)
      //console.log("🔺sqlExecute.statement: ", statement)
      //console.log("🔺sqlExecute.binds:     ", binds)
      //console.log("🔺sqlExecute.opts:      ", options)
      const result = await connection.execute(statement, binds, options)
      //console.log("🔺sqlExecute.result:    ", result)
      // console.log(result.rows);
      // return { result }
      resolve(result)
    } catch (err) {
      reject(err);
    } finally {
      if (connection) {
        try {
          console.log("sqlExecute.close()")
          await connection.close()
        } catch (err) {
          console.log("sqlExecute.error: ", err)
        }
      }
    }
  })
}

//module.exports = { sqlExecute }

