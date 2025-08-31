const PermissionService = require('../services/quyen.service');

exports.getAllPermission = (req, res) => {
  PermissionService.getAllPermission((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getPermissionById = (req, res) => {
  const id = req.params.id;
  PermissionService.getPermissionById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: 'Permission not found' });
    res.json(result);
  });
};

exports.addPermission = (req, res) => {
  const data = req.body;
  if ( !data.TenQuyen) {
    return res.status(400).json({
      message: "TenQuyen là bắt buộc"
    });
  }

  PermissionService.addPermission(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Permission added successfully', result });
  });
};

exports.updatePermission = (req, res) => {
  const id = req.params.id;
  const data = req.body; 
  if (!data.TenQuyen) {
    return res.status(400).json({
      message: "TenQuyen là bắt buộc"
    });
  }

  PermissionService.updatePermission(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Permission updated successfully', result });
  });
};

exports.deletePermission = (req, res) => {
  const id = req.params.id;
  PermissionService.deletePermission(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Permission deleted successfully', result });
  });
};

// exports.getNextPermissonId = () => {

// }