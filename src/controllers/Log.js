'use strict'

var utils = require('../utils/writer.js')
var Log = require('../service/LogService')

module.exports.logDELETE = function logDELETE(req, res, next, logId) {
  Log.logDELETE(logId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logGET = function logGET(req, res, next, logId) {
  Log.logGET(logId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logPOST = function logPOST(req, res, next, body, logId) {
  Log.logPOST(body, logId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logPUT = function logPUT(req, res, next, logId) {
  Log.logPUT(logId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
