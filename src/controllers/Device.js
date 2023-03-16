'use strict'

var utils = require('../utils/writer.js')
var Device = require('../service/DeviceService')

module.exports.deviceDELETE = function deviceDELETE(req, res, next, deviceId) {
  Device.deviceDELETE(deviceId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deviceGET = function deviceGET(req, res, next, deviceId) {
  Device.deviceGET(deviceId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.devicePOST = function devicePOST(
  req,
  res,
  next,
  body,
  deviceId
) {
  Device.devicePOST(body, deviceId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.devicePUT = function devicePUT(req, res, next, body, deviceId) {
  Device.devicePUT(body, deviceId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
