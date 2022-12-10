/*
* File:        /index.js
* Description:
* Used by:
* Dependency:
* HISTORY:
* Date        By   Comments
* ----------  ---  ---------------------------------------------------------
* 2022-11-27  KP   initialize
*/

'use strict';

import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

import { createServer } from 'http'
import { initialize } from "./service/database.js"
import { expressAppConfig } from 'oas3-tools'
var serverPort = 8080;


// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var _expressAppConfig = expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = _expressAppConfig.getApp();

// Initialize the Swagger middleware
createServer(app).listen(serverPort, async function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    console.log("Starting api server application");
    try {
      console.log("Initializing Oracle database module");
      await initialize();
    } catch (err) {
      console.error(err);
      process.exit(1); // Non-zero failure code
    }
});

