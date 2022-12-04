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
var finalhandler = require('finalhandler')

var path = require('path');
var http = require('http');
var morgan = require('morgan');
var database = require("./service/database.js")
var logger = morgan('combined')

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, async function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    console.log("Starting api server application");
    try {
      console.log("Initializing Oracle database module");
      await database.initialize();
    } catch (err) {
      console.error(err);
      process.exit(1); // Non-zero failure code
    }
});

