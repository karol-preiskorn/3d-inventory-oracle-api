# 3d-inventory-oracle-api

- [3d-inventory project](#3d-inventory-project)
- [Overview](#overview)
  - [Running the API server](#running-the-api-server)
  - [Use image of DB](#use-image-of-db)
  - [Set password](#set-password)
  - [Create test database and test user script](#create-test-database-and-test-user-script)

[![wakatime](https://wakatime.com/badge/user/3bbeedbe-0c6a-4a01-b3cd-a85d319a03bf/project/018c3018-efe9-4b33-a2ed-9fafa58710f7.svg)](https://wakatime.com/badge/user/3bbeedbe-0c6a-4a01-b3cd-a85d319a03bf/project/018c3018-efe9-4b33-a2ed-9fafa58710f7)[![GitHub issues](https://img.shields.io/github/issues/karol-preiskorn/3d-inventory-oracle-api.svg)](https://GitHub.com/karol-preiskorn/3d-inventory-oracle-api/issues/)[![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)

## 3d-inventory project

A simple solution that allows you to build a spatial and database representation of all types of warehouses and server rooms.

- [3d-inventory-angular-ui](https://GitHub.com/karol-preiskorn/3d-inventory-angular-ui/)
- [3d-inventory-oracle-api](https://GitHub.com/karol-preiskorn/3d-inventory-oracle-api/)
- [3d-inventory-mongo-api](https://GitHub.com/karol-preiskorn/3d-inventory-mongo-api/)

## Overview

This Oracle API server for 3d-inventory project.

- Used commonjs (backend) API depends on [OracleDb](https://www.npmjs.com/package/oracledb)
- [Swagger](https://swagger.io/) v3
- [Oracle DB](https://www.oracle.com/database/) in [Docker](https://www.docker.com/) (statefull)

### Running the API server

To run the API server:

```bash
npm run api-install
npm run nodemon
```

To view the [Swagger](https://swagger.io/) UI interface:

```bash
open http://localhost:8080/docs
```

```bash
$ ./sql sys/3dinventory@127.0.0.1:1521/FREEPDB1 as sysdba
```

### Use image of DB

[Package oracle-free · GitHub](https://github.com/gvenzl/oci-oracle-free/pkgs/container/oracle-free/)


```bash
docker run -d -p 1521:1521 -e ORACLE_PASSWORD=babilon5 -t oracle23 gvenzl/oracle-free
docker start oracle23
docker exec -it oracle23 /bin/bash
```

### Set password

```bash
# change password
docker exec -d oracle23 ./setPassword.sh <password>
# run some other command in container like sql scripts
docker exec -ti oracle23 sh -c "echo a && echo b"
sql sys/<password>@<adress>:1521/freedb1 as sysdba
```

### Create test database and test user script

```sql
docker exec <container name|id> createAppUser <your app user> <your app user password> [<your target PDB>]
```
