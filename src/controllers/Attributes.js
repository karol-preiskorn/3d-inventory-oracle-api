'use strict'

var utils = require('../utils/writer.js')
var Attributes = require('../service/AttributesService')

module.exports.attributesGET = function attributesGET(req, res, next) {
  Attributes.attributesGET()
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
  Attributes.attributes_typesGET()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
