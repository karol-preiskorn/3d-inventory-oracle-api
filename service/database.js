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

import OracleDB from 'oracledb'
import { database19g, database21g } from "./config.js"

// const { createPool, getPool } = oracledb

async function initialize() {
  OracleDB.createPool(database21g)
}

const _initialize = initialize
export { _initialize as initialize }

async function close() {
  await OracleDB.getPool().close()
}

const _close = close
export { _close as close }

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

export const simpleExecute = sqlExecute;

