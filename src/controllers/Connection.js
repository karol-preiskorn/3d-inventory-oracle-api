'use strict'

var utils = require('../utils/writer.js')
var Connection = require('../service/ConnectionService')

module.exports.connectionsGET = function connectionsGET(req, res, next) {
  Connection.connectionsGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
