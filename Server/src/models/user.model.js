const db = require('../config/db');

exports.getAllUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

exports.createUser = (data, callback) => {
  db.query('INSERT INTO users SET ?', data, callback);
};
