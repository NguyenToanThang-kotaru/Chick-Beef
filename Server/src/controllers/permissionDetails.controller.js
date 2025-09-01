const PermissionDetailsService = require('../services/permissionDetails.service')

exports.getAllPermissionDetailsByPermissionId = (req, res) => {
  const id = req.params.id;
  PermissionDetailsService.getAllPermissionDetailsByPermissionId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: 'Không tìm thấy quyền !!!' });
    res.json(result);
  })
}

exports.getFeatureIdsByPermissionId = (req, res) => {
  const id = req.params.id;
  PermissionDetailsService.getFeatureIdsByPermissionId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: 'Không tìm thấy quyền !!!' });
    res.json(result);
  })
}

exports.getActionIdsByPermissionId = (req, res) => {
  const id = req.params.id;
  PermissionDetailsService.getActionIdsByPermissionId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: 'Không tìm thấy quyền !!!' });
    res.json(result);
  })
}

exports.addPermissionDetail = (req, res) => {
  const data = req.body;
  PermissionDetailsService.addPermissionDetail(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Thêm chi tiết quyền thành công !!!', permissionDetail: result });
  })
}

exports.activePermissionDetail = (req, res) => {
  const { MaQuyen, MaCN, MaHanhDong } = req.body; 

  if (!MaQuyen || !MaCN || !MaHanhDong) {
    return res.status(400).json({ message: 'Thiếu tham số !!!' });
  }

  PermissionDetailsService.activePermissionDetail({ MaQuyen, MaCN, MaHanhDong }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (!result || result.affectedRows === 0) {
        return res.status(404).json({ message: 'Không tìm thấy chi tiết quyền' });
      }
      res.status(200).json({ message: 'Kích hoạt chức năng thành công !!!' });
    }
  );
};


exports.inactivePermissionDetail = (req, res) => {
  const { MaQuyen, MaCN, MaHanhDong } = req.body; 

  if (!MaQuyen || !MaCN || !MaHanhDong) {
    return res.status(400).json({ message: 'Thiếu tham số !!!' });
  }
  
  PermissionDetailsService.inactivePermissionDetail({ MaQuyen, MaCN, MaHanhDong }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result || result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy chi tiết quyền' });
    }
    res.status(200).json({ message: 'Tắt chức năng thành công !!!' });
  });
};
