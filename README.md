# 3d-inventory-oracle-api

- [3d-inventory project](#3d-inventory-project)
- [Overview](#overview)
  - [Running the server](#running-the-server)
  - [Setup Database](#setup-database)
  - [Set password](#set-password)
  - [Use image of DB](#use-image-of-db)
- [Run Oracle DB in PODMAN container](#run-oracle-db-in-podman-container)
  - [Test JSON structure in 19.3g](#test-json-structure-in-193g)
- [Run Oracle DB in Docker container](#run-oracle-db-in-docker-container)

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

### Running the server

To run the API server:

```bash
npm run api-install
npm run nodemon
```

To view the [Swagger](https://swagger.io/) UI interface:

```bash
open http://localhost:8080/docs
```

### Setup Database

When run in `podman` db create at `172.17.0.2`. To connect db i use Oracle `SQLcl`.

After your service is created, you can connect to it via the following properties:

```bash
Hostname:
    oracle (from within another container)
    localhost or 127.0.0.1 (from the host directly)
Port: 1521
Service name: FREEPDB1
Database App User: my_user
Database App Password: password_i_should_change
```

```bash
$ ./sql sys/3dinventory@127.0.0.1:1521/FREEPDB1 as sysdba
```

### Set password

```bash
# call shell
docker exec -it 5c6a4a0c10638e88b0d1a5e35867ed908b78d8dc7fae4df804fc8cbcf1d78921 sh
# change password
docker exec -d 5c6a4a0c1063 ./setPassword.sh babilon5
# run some other command in container like sql scripts
docker exec -ti 5c6a4a0c1063 sh -c "echo a && echo b"
sql sys/babilon5@172.17.0.2:1521/orclpdb1 as sysdba
```

### Use image of DB

This images have more options to configure pass and faststart: https://hub.docker.com/r/gvenzl/oracle-xe

I use `db-oracle-21-faststart` simple as this:

```bash
docker run -d -p 1521:1521 -e ORACLE_PASSWORD=babilon5 \
           -v oracle-volume:/opt/oracle/oradata \
           gvenzl/oracle-xe:21.3.0-faststart
```

## Run Oracle DB in PODMAN container

```bash
podman run -d -p 1521:1521 -e ORACLE_PASSWORD=3dinventory docker://gvenzl/oracle-free
sqlplus sys/LetsTest1@localhost/XE as sysdba
```

```bash
podman exec -ti oracle-xe sqlplus sys/LetsTest1@localhost/XE as sysdba
```

Create test database and test user script:

```sql
CREATE PLUGGABLE DATABASE test ADMIN USER test IDENTIFIED BY LetsTest1 FILE_NAME_CONVERT=('pdbseed','test');
ALTER PLUGGABLE DATABASE test OPEN;
ALTER PLUGGABLE DATABASE test SAVE STATE;
ALTER SESSION SET CONTAINER=test;
GRANT CONNECT, RESOURCE, CREATE VIEW, UNLIMITED TABLESPACE TO test;
exit;
```

### Test JSON structure in 19.3g

- [ ] Create instance db from offical build: [19.3.0](https://github.com/oracle/docker-images/tree/main/OracleDatabase/SingleInstance/dockerfiles/19.3.0)

## Run Oracle DB in Docker container

```bash
docker create -it --name oracle23de -p 1521:1521 -p 5500:5500 -p 8082:8080 -p 8443:8443 -p 27017:27017 -e DBA_PWD=ConvergedDB_1234 -e USR_PWD=ConvergedDB_1234 -e DOCKER_HOST=NOHOSTNAME -v $HOME/orainstall:/orainstall oraclelinux:8

docker start oracle23de

docker exec -it oracle23de /bin/bash
```
