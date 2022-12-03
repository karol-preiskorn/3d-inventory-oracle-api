/*
 * File:        /sql/create-schema.sql
 * Description:
 * Used by:
 * Dependency:
 * HISTORY:
 * Date        By   Comments
 * ----------  ---  ---------------------------------------------------------
 * 2022-11-26  KP   []
 */

ALTER SESSION SET container = orclpdb1;
CREATE USER REST IDENTIFIED BY babilon5 QUOTA UNLIMITED ON users;
ALTER SESSION SET "_ORACLE_SCRIPT"=true;
ALTER SESSION SET current_schema = REST;
ALTER SESSION SET container=orapdb1;
GRANT CONNECT TO "REST";
GRANT CREATE SESSION TO "REST";
GRANT CREATE TABLE TO "REST";
GRANT UNLIMITED TABLESPACE TO "REST";
GRANT ALL PRIVILEGES TO "REST" IDENTIFIED BY "babilon5";

exit;