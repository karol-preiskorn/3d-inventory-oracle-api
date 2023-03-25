'use strict'
const { find, create } = require('./devices.js')

/**
 * Devices attributes
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
 * Dictionary attributes types of specific type of device.
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
 * Connection between devices
 *
 * no response value expected for this operation
 **/
exports.connectionsGET = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Delete device
 * Delete device.
 *
 * no response value expected for this operation
 **/
exports.deviceDELETE = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get devices
 * Get list devices.
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
 * Create new device
 * Insert new device.
 *
 * body Device  (optional)
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
 * Update device
 * Update existing device.
 *
 * body Device  (optional)
 * returns Device
 **/
exports.devicePUT = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      device_id: '91601de6-6e93-11ed-a1eb-0242ac120002',
      device_name: 'device-A1',
      device_category: 'Network',
      device_type: 'Server',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Delete log
 * Delete all or specific id log.
 *
 * no response value expected for this operation
 **/
exports.logDELETE = function () {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get log from database
 * Get all log.
 *
 * returns Log
 **/
exports.logGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Message in log',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Insert new log
 * Create log.
 *
 * body Log
 * returns Log
 **/
exports.logPOST = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Message in log',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Update new log
 * Update log record.
 *
 * returns Log
 **/
exports.logPUT = function () {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Message in log',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}
