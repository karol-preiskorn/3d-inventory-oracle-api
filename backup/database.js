/*
 * File:        /service/database.js
 * Description: connect to database21g and 19g
 * Used by:
 * Dependency:
 *
 * Date        By     Comments
 * ----------  -----  --------------------------------------
 * 2023-03-12	 C2RLO
 * 2022-11-27  KP     initialize
 */

'use strict'

const OracleDB = require('oracledb')
const { database19g, database21g } = require('./config.js')

const { createPool, getPool, getConnection } = OracleDB

async function initializeDB() {
  OracleDB.createPool(database21g)
}

async function close() {
  await OracleDB.getPool().close()
}

const _close = close

function sqlExecute(statement, binds = [], options = {}) {
  return new Promise((resolve, reject) => {
    let connection
    options.outFormat = OracleDB.OUT_FORMAT_OBJECT
    options.autoCommit = true
    options.extendedMetaData = true
    options.fetchArraySize = 100
    try {
      connection = getConnection()
      //console.log("🔺sqlExecute.statement: ", statement)
      //console.log("🔺sqlExecute.binds:     ", binds)
      //console.log("🔺sqlExecute.opts:      ", options)
      const result = connection.execute(statement, binds, options)
      //console.log("🔺sqlExecute.result:    ", result)
      // console.log(result.rows);
      // return { result }
      resolve(result)
    } catch (err) {
      reject(err)
    } finally {
      if (connection) {
        try {
          console.log('sqlExecute.close()')
          connection.close()
        } catch (err) {
          console.log('sqlExecute.error: ', err)
        }
      }
    }
  })
}
