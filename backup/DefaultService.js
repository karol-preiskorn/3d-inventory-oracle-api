'use strict'

const { find, create } = require('./devices.js')

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
exports.deviceGET = function (body) {
  return new Promise(async function (resolve, reject) {
    let prompt = '[DefaultService.deviceGET]'
    var result = await find(body)
    if (Object.keys(result).length > 0) {
      console.log('👀', prompt, ' result: ', result.rows)
      resolve(result)
    } else {
      console.log('👀', prompt, ' reject: ', result)
      resolve(reject)
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
  return new Promise(function (resolve, reject) {
    try {
      console.log('✅ Before devicePOST: ', body)
      const result = create(body)
      console.log('✅ Result in devicePOST: ', result)
      resolve(result)
    } catch (err) {
      console.log('🔥 Error in devicePOST: ', err)
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
