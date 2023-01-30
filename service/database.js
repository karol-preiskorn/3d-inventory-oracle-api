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

const OracleDB = require("oracledb")
const { database19g, database21g } = require("./config.js")

const { createPool, getPool } = OracleDB

async function initializeDB() {
  OracleDB.createPool(database21g)
}

//const _initializeDB = initializeDB
// export { _initializeDB as initializeDB }

async function close() {
  await OracleDB.getPool().close()
}

const _close = close
// export { _close as close }

function sqlExecute(statement, binds = [], options = {}) {
  return new Promise(async (resolve, reject) => {
    let connection
    options.outFormat = OUT_FORMAT_OBJECT
    options.autoCommit = true
    options.extendedMetaData = true
    options.fetchArraySize = 100
    try {
      connection = await getConnection()
      //console.log("🔺sqlExecute.statement: ", statement)
      //console.log("🔺sqlExecute.binds:     ", binds)
      //console.log("🔺sqlExecute.opts:      ", options)
      const result = await connection.execute(statement, binds, options)
      //console.log("🔺sqlExecute.result:    ", result)
      // console.log(result.rows);
      // return { result }
      resolve(result)
    } catch (err) {
      reject(err)
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

// export const simpleExecute = sqlExecute;
