/*
* File:        /service/config.js
* Description: database connect strings definition
* Used by:
* Dependency:
*
* HISTORY:
* Date        By     Comments
* ----------  -----  ------------------
* 2022-12-10	C2RLO  add 'dotenv'
* 2022-12-10	C2RLO  set proper export commonjs definition https://shuheikagawa.com/blog/2017/01/05/how-to-export-commonjs-and-es-module/
* 2022-11-27  KP     initialize
*/

require("dotenv").config()

const dbConfig21g = {
    user: "REST" || process.env.USER,
    password: "babilon5" || process.env.PASSWORD,
    connectString: "172.17.0.2:1521/XEPDB1" || process.env.CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
}

const dbConfig19g = {
  user: "REST" || process.env.USER,
  password: "babilon5" || process.env.PASSWORD,
  connectString: "172.17.0.2:1521/orclpdb1" ||  process.env.CONNECTIONSTRING,
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
}

const dbConfig = dbConfig21g

module.exports = { dbConfig }
