const employeeService = require("../services/employee.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllEmployees = (req, res) => {
    employeeService.getAllEmployees((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getEmployeeById = (req, res) => {
  const id = req.params.id;

  employeeService.getEmployeeById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nhân viên" });
    res.json(result);
  });
};

exports.getNextEmployeeId = (req, res) => {
  employeeService.getNextEmployeeId((err, nextId) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ nextId });
  });
};

exports.addEmployee = (req, res) => {
  const employeeData = req.body;

  employeeService.addEmployee(employeeData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Thêm nhân viên thành công", employee: result });
  });
};

exports.updateEmployee = (req, res) => {
  const id = req.params.id;              // lấy id từ URL
  const employeeData = req.body;

  employeeService.updateEmployee(id, employeeData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nhân viên" });

    res.status(200).json({ message: "Sửa nhân viên thành công", employee: result });
  });
};

exports.deleteEmployee = (req, res) => {
  const id = req.params.id;

  employeeService.deleteEmployee(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result) return res.status(404).json({ message: "Không tìm thấy nhân viên" });

    res.json({ message: "Xóa nhân viên thành công" });
  });
};