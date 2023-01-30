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
    let prompt = '[database.sqlExecute]'
    let connection
    options.outFormat = oracledb.OUT_FORMAT_OBJECT
    options.autoCommit = true
    options.extendedMetaData = true
    options.fetchArraySize = 100
    try {
      connection = await oracledb.getConnection(dbConfig.dbConfig)
      console.log("🔺",prompt," statement:   ", statement)
      console.log("🔺",prompt," binds:       ", binds)
      // console.log("🔺sqlExecute.opts:        ", options)
      const result = await connection.execute(statement, binds, options)
      console.log("🔺",prompt," result.rows: ", result.rows)
      //console.log("🔺",prompt," result.rows: ", options)
      resolve(result)
    } catch (err) {
      console.log('🐛',prompt,' reject: errNum:', err.errorNum, 'message:', err.message, 'offset:', err.offset)
      reject(err)
    } finally {
      if (connection) {
        try {
          console.log("🐛",prompt," close()")
          await connection.close()
        } catch (err) {
          console.log("🐛",prompt," catch.error: ", err)
        }
      }
    }
  })
}

