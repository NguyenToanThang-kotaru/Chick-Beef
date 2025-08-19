const userModel = require('../models/user.model');

exports.getAllUsers = (callback) => {
  userModel.getAllUsers(callback);
};

exports.createUser = (data, callback) => {
  userModel.createUser(data, callback);
};
