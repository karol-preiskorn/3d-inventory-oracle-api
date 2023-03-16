'use strict'

/**
 * Delete log
 * Delete all or specyfic id log.
 *
 * logId Long Parameter logId is number of log
 * no response value expected for this operation
 **/
exports.logDELETE = function (logId) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get log from database
 * Get all log.
 *
 * logId Long Parameter logId is number of log
 * returns Log
 **/
exports.logGET = function (logId) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Meaasge in log',
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
 * logId Long Parameter logId is number of log
 * returns Log
 **/
exports.logPOST = function (body, logId) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Meaasge in log',
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
 * logId Long Parameter logId is number of log
 * returns Log
 **/
exports.logPUT = function (logId) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      id: '102',
      date: '2023-03-12 14:00',
      message: 'Meaasge in log',
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}
