const PermissionModel = require('../models/quyen.model');
const validateEntityName = require("./validation");

const DEFAULT_PERMISSION_IDS = ["Q00001"];

exports.getAllPermission = (callback) => {
  PermissionModel.getAllPermission(callback);
};

exports.getPermissionById = (id, callback) => {
  PermissionModel.getPermissionById(id, callback);
};

exports.addPermission = (data, callback) => {
  const error = validateEntityName(data.TenQuyen, "quyền");
  if (error) {
    return callback({ message: error }, null);
  }
  PermissionModel.addPermission(data, callback);
};

exports.updatePermission = (id, data, callback) => {
  if (DEFAULT_PERMISSION_IDS.includes(id)) {
    return callback({ message: "Không thể sửa quyền mặc định" }, null);
  }

  const error = validateEntityName(data.TenQuyen, "quyền");
  if (error) {
    return callback({ message: error }, null);
  }

  PermissionModel.updatePermission(id, data, callback);
};

exports.deletePermission = (id, callback) => {
  if (DEFAULT_PERMISSION_IDS.includes(id)) {
    return callback({ message: "Không thể xóa quyền mặc định" }, null);
  }

  PermissionModel.deletePermission(id, callback);
};

// exports.getNextPermissionId = () => {

// }
