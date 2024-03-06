#!/usr/bin/bash
#
# File:        /src-cli.sh
# Description:
# Used by:
# Dependency:
#
# Date         By        Comments
# ----------   -------   ------------------------------
# 2023-03-28   C2RLO
#

rm -rf lib-swagger-client -p tmp
SPECFILE=api/openapi.yaml
wget --quiet --no-check-certificate $SPECURL -O $SPECFILEdocker run --rm --net=host -u="$(id -u)" -v ${PWD}:/local swaggerapi/swagger-codegen-cli:3.0.41 generate \
  -i /local/$SPECFILE \
  -l typescript-angular \
  -o lib-swagger-client/src \
  --additional-properties ngVersion=15.2.2
