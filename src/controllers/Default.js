'use strict'

var utils = require('../utils/writer.js')
var Default = require('../service/DefaultService')

module.exports.attributesGET = function attributesGET(req, res, next) {
  Default.attributesGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.attributes_typesGET = function attributes_typesGET(
  req,
  res,
  next
) {
  Default.attributes_typesGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.connectionsGET = function connectionsGET(req, res, next) {
  Default.connectionsGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deviceDELETE = function deviceDELETE(req, res, next) {
  Default.deviceDELETE()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deviceGET = function deviceGET(req, res, next) {
  Default.deviceGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.devicePOST = function devicePOST(req, res, next, body) {
  Default.devicePOST(body)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.devicePUT = function devicePUT(req, res, next) {
  Default.devicePUT()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logDELETE = function logDELETE(req, res, next) {
  Default.logDELETE()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logGET = function logGET(req, res, next) {
  Default.logGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logPOST = function logPOST(req, res, next, body) {
  Default.logPOST(body)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.logPUT = function logPUT(req, res, next) {
  Default.logPUT()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
