const PermissionDetailsModel = require('../models/permissionDetails.model');

exports.getAllPermissionDetailsByPermissionId = (id, callback) => {
  PermissionDetailsModel.getAllPermissionDetailsByPermissionId(id, callback)
}

exports.getFeatureIdsByPermissionId = (id, callback) => {
  PermissionDetailsModel.getFeatureIdsByPermissionId(id, callback)
}

exports.getActionIdsByPermissionId = (id, callback) => {
  PermissionDetailsModel.getActionIdsByPermissionId(id, callback)
}

exports.addPermissionDetail = (data, callback) => {
  PermissionDetailsModel.addPermissionDetail(data, callback)
}

exports.activePermissionDetail = (data, callback) => {
  PermissionDetailsModel.activePermissionDetail(data, callback)
}

exports.inactivePermissionDetail = (data, callback) => {
  PermissionDetailsModel.inactivePermissionDetail(data, callback)
}
