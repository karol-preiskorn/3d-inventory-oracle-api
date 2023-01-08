/*
* File:        /service/database.js
* Description:
* Used by:
* Dependency:
*
* HISTORY:
* Date        By   Comments
* ----------  ---  ---------------------------------------------------------
* 2022-11-27  KP   initialize
*/

'use strict'

const oracledb = require('oracledb')
const dbConfig = require("./dbConfig.js")

async function initialize() {
  oracledb.createPool(dbConfig.dbConfig)
}

async function close() {
  await oracledb.getPool().close()
}

exports.sqlExecute = function(statement, binds = [], options = {}) {
  return new Promise(async (resolve, reject, next) => {
    let connection
    options.outFormat = oracledb.OUT_FORMAT_OBJECT
    options.autoCommit = true
    options.extendedMetaData = true
    options.fetchArraySize = 100
    try {
      connection = await oracledb.getConnection(dbConfig.dbConfig)
      console.log("🔺sqlExecute.statement:   ", statement)
      console.log("🔺sqlExecute.binds:       ", binds)
      console.log("🔺sqlExecute.opts:        ", options)
      const result = await connection.execute(statement, binds, options)
      console.log("🔺sqlExecute.result:      ", result)
      console.log("🔺sqlExecute.result.rows: ", options)
      // return { result }
      resolve(result)
    } catch (err) {
      console.log('🐛 sqlExecute.reject: errNum:', err.errorNum, 'message:', err.message, 'offset:', err.offset)
      reject(err)
    } finally {
      if (connection) {
        try {
          console.log("🐛 sqlExecute.close()")
          await connection.close()
        } catch (err) {
          console.log("🐛 sqlExecute.catch.error: ", err)
        }
      }
    }
  })
}

