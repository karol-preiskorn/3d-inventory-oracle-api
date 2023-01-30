'use strict'

const { find, create } = require('./devices.js')

/**
 * Server heartbeat operation. Get information about devices attributes.
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
export function attributesGET() {
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
export function attributes_typesGET() {
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
export function connectionsGET() {
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
export function deviceDELETE() {
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
export function deviceGET(body) {
  return new Promise(function (resolve, reject) {

    // example response
    var examples = {}
    examples['application/json'] = {
      "device_name": "tall_turquoise_sheep"
    }

    result = find(body)

    if (result.length > 0) {
      resolve(result)
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
export function devicePOST(body) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("✅ Before devicePOST: ", body)
      const result = create(body)
      console.log("✅ Result in devicePOST: ", result)
      resolve(result)
    } catch (err) {
      console.log("🔥 Error in devicePOST: ", err)
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
export function devicePUT() {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

