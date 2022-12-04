/*
* File:        /service/config.js
* Description:
* Used by:
* Dependency:
* HISTORY:
* Date        By   Comments
* ----------  ---  ------------------
* 2022-11-27  KP   initialize
*/

'use strict'

const database = {
  user: "REST",
  password: "babilon5",
  connectString: "172.17.0.2:1521/orclpdb1",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
}
exports.database = database
