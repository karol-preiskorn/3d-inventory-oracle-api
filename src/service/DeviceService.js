'use strict'
const { find, create } = require('./devices.js')

/**
 * Insert new device
 * Create device.
 *
 * deviceId String Parameter deviceId is string uuid
 * no response value expected for this operation
 **/
exports.deviceDELETE = function (deviceId) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get Device Id
 * Get list devices.
 *
 * deviceId String Parameter deviceId is string uuid
 * returns Device
 **/
exports.deviceGET = function (body) {
  return new Promise(function (resolve, reject) {
    let prompt = '[DefaultService.deviceGET]'
    var result = find(body)
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
 * Create device.
 *
 * body Device  (optional)
 * deviceId String Parameter deviceId is string uuid
 * returns Device
 **/
exports.devicePOST = function (body, deviceId) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = [
      {
        device_name: 'device-A1',
        device_id: '91601de6-6e93-11ed-a1eb-0242ac120002',
        device_type: 'Server',
        device_category: 'Network',
      },
    ]
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Update new device
 * Update device.
 *
 * body Device  (optional)
 * deviceId String Parameter deviceId is string uuid
 * returns Device
 **/
exports.devicePUT = function (body, deviceId) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = [
      {
        device_name: 'device-A1',
        device_id: '91601de6-6e93-11ed-a1eb-0242ac120002',
        device_type: 'Server',
        device_category: 'Network',
      },
    ]
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}
