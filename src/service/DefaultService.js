'use strict'

const devices = require('./devices.js')

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
      "device_name": "device-A1",
      "device_id": "91601de6-6e93-11ed-a1eb-0242ac120002",
      "device_type": "Server",
      "device_category": "Network"
    }
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
 * returns Device
 **/
exports.devicePOST = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log("👀 post: ", body)
      const result = await devices.create(body)
      if (result.length > 0) {
        console.log("👀 devicePOST.return.resolve: ", result)
        resolve(result)
      } else {
        console.log("🔥 devicePOST.return.reject: ", result.message)
        reject(result)
      }
    } catch (err) {
      console.log("🔥 devicePOST.return.catch: ", err)
      reject(err)
    }
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

