'use strict'

var device = require('./devices.js');
/**
 * Server heartbeat operation. Get information about devices attributes.
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
exports.attributesGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}


/**
 * Server heartbeat operation. Get information about devices attributes types.
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
exports.attributes_typesGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}


/**
 * Server heartbeat operation. Get information about connection between Devices.
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
exports.connectionsGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}


/**
 * Insert new device
 * Create device.
 *
 * no response value expected for this operation
 **/
exports.deviceDELETE = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}


/**
 * Get Device Id
 * Get information about devices.
 *
 * returns Device
 **/
exports.deviceGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {}

    examples['application/json'] = {
      "device_name": "device_name",
      "device_id": "device_id",
      "device_type": "device_type",
      "device_category": "device_category"
    }

    device.find('{"id": "1"}')

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}


/**
 * Insert new device
 * Create device.
 *
 * body Device
 * no response value expected for this operation
 **/
exports.devicePOST = function (body) {
  return new Promise(function (resolve, reject) {
    device.create()
    resolve()
  })
}


/**
 * Insert new device
 * Create device.
 *
 * no response value expected for this operation
 **/
exports.devicePUT = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

