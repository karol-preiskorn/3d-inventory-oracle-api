/*
* File:        /service/config.js
* Description: database connect strings definition
* Used by:
* Dependency:
*
* HISTORY:
* Date        By     Comments
* ----------  -----  ------------------
* 2022-12-10	C2RLO  set proper export commonjs definition https://shuheikagawa.com/blog/2017/01/05/how-to-export-commonjs-and-es-module/
* 2022-11-27  KP     initialize
*/

const database21g = {
  user: "REST",
  password: "babilon5",
  connectString: "172.17.0.2:1521/XEPDB1",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
}

const database19g = {
  user: "REST",
  password: "babilon5",
  connectString: "172.17.0.2:1521/orclpdb1",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
}

module.exports = { database19g, database21g }