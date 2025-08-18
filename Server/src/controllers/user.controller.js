const userService = require('../services/user.service');

exports.getAllUsers = (req, res) => {
  userService.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  userService.createUser(newUser, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User created!', id: result.insertId });
  });
};
