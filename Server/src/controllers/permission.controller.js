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
    if (!result) return res.status(404).json({ message: 'Không tìm thấy quyền !!!'});
    res.json(result);
  });
};

exports.addPermission = (req, res) => {
  const data = req.body;
  if ( !data.TenQuyen) {
    return res.status(400).json({ message: "Tên quyền là bắt buộc !!!" });
  }

  PermissionService.addPermission(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Thêm quyền thành công !!!', permission: result });
  });
};

exports.updatePermission = (req, res) => {
  const id = req.params.id;
  const data = req.body; 
  if (!data.TenQuyen) {
    return res.status(400).json({ message: "Tên quyền là bắt buộc !!!" });
  }

  PermissionService.updatePermission(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.affectedRows === 0) return res.status(404).json({ mesage: 'Không tìm thấy quyền' });
    res.status(200).json({ message: 'Sửa quyền thành công !!!', permission: result });
  });
};

exports.deletePermission = (req, res) => {
  const id = req.params.id;
  PermissionService.deletePermission(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.affectedRows === 0) return res.status(404).json({ mesage: 'Không tìm thấy quyền' });
    res.status(200).json({ message: 'Xóa quyền thành công !!!', permission: result });
  });
};

// exports.getNextPermissonId = () => {

// }