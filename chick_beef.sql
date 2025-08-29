-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2025 at 09:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chick_beef`
--

-- --------------------------------------------------------

--
-- Table structure for table `ban`
--

CREATE TABLE `ban` (
  `MaBan` varchar(10) NOT NULL,
  `SoBan` varchar(10) NOT NULL,
  `SucChua` varchar(3) NOT NULL,
  `ThoiGianGiuBan` varchar(20) NOT NULL,
  `TrangThai` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ban`
--

INSERT INTO `ban` (`MaBan`, `SoBan`, `SucChua`, `ThoiGianGiuBan`, `TrangThai`) VALUES
('B00001', '1', '4', '', 'Trống'),
('B00002', '2', '6', '2025-08-27 12:30:00', 'Đang sử dụng'),
('B00003', '3', '2', '2025-08-27 13:00:00', 'Đặt trước');

-- --------------------------------------------------------

--
-- Table structure for table `chitiethd`
--

CREATE TABLE `chitiethd` (
  `MaHD` varchar(10) NOT NULL,
  `MaSP` varchar(10) NOT NULL,
  `SoLuongSP` varchar(5) NOT NULL,
  `ThanhTien` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitiethd`
--

INSERT INTO `chitiethd` (`MaHD`, `MaSP`, `SoLuongSP`, `ThanhTien`) VALUES
('HD00001', 'SP00001', '2', '90000'),
('HD00001', 'SP00004', '1', '20000'),
('HD00001', 'SP00003', '1', '35000'),
('HD00002', 'SP00002', '1', '48000'),
('HD00002', 'SP00004', '1', '20000');

-- --------------------------------------------------------

--
-- Table structure for table `chitietnhacungcap`
--

CREATE TABLE `chitietnhacungcap` (
  `MaNCC` varchar(10) NOT NULL,
  `MaNL` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitietnhacungcap`
--

INSERT INTO `chitietnhacungcap` (`MaNCC`, `MaNL`) VALUES
('NCC00001', 'NL00001'),
('NCC00001', 'NL00002'),
('NCC00002', 'NL00003'),
('NCC00002', 'NL00004'),
('NCC00002', 'NL00005');

-- --------------------------------------------------------

--
-- Table structure for table `chitietphieunhap`
--

CREATE TABLE `chitietphieunhap` (
  `MaPN` varchar(10) NOT NULL,
  `MaNL` varchar(10) NOT NULL,
  `SoLuongNL` varchar(10) NOT NULL,
  `GiaNhapNL` varchar(15) NOT NULL,
  `ThanhTien` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitietphieunhap`
--

INSERT INTO `chitietphieunhap` (`MaPN`, `MaNL`, `SoLuongNL`, `GiaNhapNL`, `ThanhTien`) VALUES
('PN00001', 'NL00001', '20', '80000', '1600000'),
('PN00001', 'NL00002', '10', '70000', '700000'),
('PN00002', 'NL00003', '50', '10000', '500000'),
('PN00002', 'NL00004', '20', '30000', '600000'),
('PN00002', 'NL00005', '40', '10000', '400000');

-- --------------------------------------------------------

--
-- Table structure for table `chitietquyen`
--

CREATE TABLE `chitietquyen` (
  `MaQuyen` varchar(10) NOT NULL,
  `MaCN` varchar(10) NOT NULL,
  `MaHanhDong` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitietquyen`
--

INSERT INTO `chitietquyen` (`MaQuyen`, `MaCN`, `MaHanhDong`) VALUES
('Q00001', 'CN00001', 'HDONG00001'),
('Q00001', 'CN00001', 'HDONG00002'),
('Q00001', 'CN00001', 'HDONG00003'),
('Q00001', 'CN00001', 'HDONG00004'),
('Q00001', 'CN00002', 'HDONG00001'),
('Q00001', 'CN00002', 'HDONG00002'),
('Q00001', 'CN00002', 'HDONG00003'),
('Q00001', 'CN00002', 'HDONG00004'),
('Q00001', 'CN00003', 'HDONG00001'),
('Q00001', 'CN00003', 'HDONG00002'),
('Q00001', 'CN00003', 'HDONG00003'),
('Q00001', 'CN00003', 'HDONG00004'),
('Q00001', 'CN00004', 'HDONG00001'),
('Q00001', 'CN00004', 'HDONG00002'),
('Q00001', 'CN00004', 'HDONG00003'),
('Q00001', 'CN00004', 'HDONG00004'),
('Q00002', 'CN00003', 'HDONG00001'),
('Q00002', 'CN00003', 'HDONG00002'),
('Q00002', 'CN00003', 'HDONG00004'),
('Q00003', 'CN00001', 'HDONG00001'),
('Q00003', 'CN00001', 'HDONG00002'),
('Q00003', 'CN00001', 'HDONG00004'),
('Q00003', 'CN00004', 'HDONG00001'),
('Q00003', 'CN00004', 'HDONG00002'),
('Q00003', 'CN00004', 'HDONG00004'),
('Q00004', 'CN00005', 'HDONG00001'),
('Q00004', 'CN00005', 'HDONG00002'),
('Q00004', 'CN00005', 'HDONG00004');

-- --------------------------------------------------------

--
-- Table structure for table `chucnang`
--

CREATE TABLE `chucnang` (
  `MaCN` varchar(10) NOT NULL,
  `TenCN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chucnang`
--

INSERT INTO `chucnang` (`MaCN`, `TenCN`) VALUES
('CN00001', 'Quản lý sản phẩm'),
('CN00002', 'Quản lý nhân viên'),
('CN00003', 'Tạo hóa đơn'),
('CN00004', 'Quản lý nhập kho'),
('CN00005', 'Quản lý bếp');

-- --------------------------------------------------------

--
-- Table structure for table `congthuc`
--

CREATE TABLE `congthuc` (
  `MaSP` varchar(10) NOT NULL,
  `MaNL` varchar(10) NOT NULL,
  `DinhLuongNL` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `congthuc`
--

INSERT INTO `congthuc` (`MaSP`, `MaNL`, `DinhLuongNL`) VALUES
('SP00001', 'NL00001', '1'),
('SP00001', 'NL00003', '1'),
('SP00001', 'NL00004', '1'),
('SP00001', 'NL00005', '1'),
('SP00002', 'NL00002', '1'),
('SP00002', 'NL00003', '1'),
('SP00002', 'NL00004', '1'),
('SP00002', 'NL00005', '1');

-- --------------------------------------------------------

--
-- Table structure for table `danhmucsanpham`
--

CREATE TABLE `danhmucsanpham` (
  `MaSP` varchar(10) NOT NULL,
  `MaLDM` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `danhmucsanpham`
--

INSERT INTO `danhmucsanpham` (`MaSP`, `MaLDM`) VALUES
('SP00001', 'LDM00001'),
('SP00002', 'LDM00001'),
('SP00003', 'LDM00002'),
('SP00004', 'LDM00002'),
('SP00005', 'LDM00002'),
('SP00006', 'LDM00003'),
('SP00007', 'LDM00004');

-- --------------------------------------------------------

--
-- Table structure for table `datban`
--

CREATE TABLE `datban` (
  `MaDB` varchar(10) NOT NULL,
  `MaBan` varchar(10) NOT NULL,
  `ThoiGian` varchar(20) NOT NULL,
  `MaKH` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hanhdong`
--

CREATE TABLE `hanhdong` (
  `MaHanhDong` varchar(10) NOT NULL,
  `TenHanhDong` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hanhdong`
--

INSERT INTO `hanhdong` (`MaHanhDong`, `TenHanhDong`) VALUES
('HDONG00001', 'Thêm'),
('HDONG00002', 'Sửa'),
('HDONG00003', 'Xóa'),
('HDONG00004', 'Xem');

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `MaHD` varchar(10) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `MaKH` varchar(10) NOT NULL,
  `TongTien` varchar(15) NOT NULL,
  `NgayXuat` varchar(10) NOT NULL,
  `MaBan` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`MaHD`, `MaNV`, `MaKH`, `TongTien`, `NgayXuat`, `MaBan`) VALUES
('HD00001', 'NV00001', 'KH00001', '75000', '2025-08-27', 'B00002'),
('HD00002', 'NV00002', 'KH00002', '50000', '2025-08-27', 'B00003');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `MaKhachHang` varchar(10) NOT NULL,
  `TenKH` varchar(100) NOT NULL,
  `SDT` varchar(12) NOT NULL,
  `DiaChi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`MaKhachHang`, `TenKH`, `SDT`, `DiaChi`) VALUES
('KH00001', 'Nguyễn Văn A', '0901234567', 'Hà Nội'),
('KH00002', 'Trần Thị B', '0902345678', 'Hồ Chí Minh'),
('KH00003', 'Lê Văn C', '0903456789', 'Đà Nẵng');

-- --------------------------------------------------------

--
-- Table structure for table `loaidanhmuc`
--

CREATE TABLE `loaidanhmuc` (
  `MaLDM` varchar(10) NOT NULL,
  `TenLDM` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loaidanhmuc`
--

INSERT INTO `loaidanhmuc` (`MaLDM`, `TenLDM`) VALUES
('LDM00001', 'Gà rán'),
('LDM00002', 'Combo'),
('LDM00003', 'Đồ uống'),
('LDM00004', 'Tráng miệng');

-- --------------------------------------------------------

--
-- Table structure for table `nguyenlieu`
--

CREATE TABLE `nguyenlieu` (
  `MaNL` varchar(10) NOT NULL,
  `TenNL` varchar(100) NOT NULL,
  `DonViNL` varchar(20) NOT NULL,
  `SoLuongTon` varchar(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nguyenlieu`
--

INSERT INTO `nguyenlieu` (`MaNL`, `TenNL`, `DonViNL`, `SoLuongTon`) VALUES
('NL00001', 'Đùi gà', 'kg', '50'),
('NL00002', 'Cánh gà', 'kg', '30'),
('NL00003', 'Bột chiên giòn', 'gói', '100'),
('NL00004', 'Dầu ăn', 'lít', '40'),
('NL00005', 'Gia vị (muối, tiêu, ớt bột)', 'gói', '80');

-- --------------------------------------------------------

--
-- Table structure for table `nhacungcap`
--

CREATE TABLE `nhacungcap` (
  `MaNCC` varchar(10) NOT NULL,
  `TenNCC` varchar(100) NOT NULL,
  `DiaChi` varchar(200) NOT NULL,
  `SDT` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhacungcap`
--

INSERT INTO `nhacungcap` (`MaNCC`, `TenNCC`, `DiaChi`, `SDT`) VALUES
('NCC00001', 'Công ty CP Thực Phẩm Gà Việt', 'Hà Nội', '0912345678'),
('NCC00002', 'Nhà cung cấp Gia Vị Nam Á', 'TP. Hồ Chí Minh', '0987654321');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MaNV` varchar(10) NOT NULL,
  `TenNV` varchar(100) NOT NULL,
  `DiaChi` varchar(200) NOT NULL,
  `SDT` varchar(12) NOT NULL,
  `MaVT` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`MaNV`, `TenNV`, `DiaChi`, `SDT`, `MaVT`) VALUES
('NV00001', 'Nguyễn Văn A', 'abc', '0987654321', 'VT00001'),
('NV00002', 'Nguyễn Văn B', 'Hà Nội', '0912345678', 'VT00002'),
('NV00003', 'Trần Thị C', 'Hồ Chí Minh', '0987654321', 'VT00003'),
('NV00004', 'Lê Văn D', 'Đà Nẵng', '0909123456', 'VT00004');

-- --------------------------------------------------------

--
-- Table structure for table `phieunhap`
--

CREATE TABLE `phieunhap` (
  `MaPN` varchar(10) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `MaNCC` varchar(10) NOT NULL,
  `TongTien` varchar(15) NOT NULL,
  `NgayNhap` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phieunhap`
--

INSERT INTO `phieunhap` (`MaPN`, `MaNV`, `MaNCC`, `TongTien`, `NgayNhap`) VALUES
('PN00001', 'NV00003', 'NCC00001', '3000000', '2025-08-01'),
('PN00002', 'NV00003', 'NCC00002', '1500000', '2025-08-15');

-- --------------------------------------------------------

--
-- Table structure for table `quyen`
--

CREATE TABLE `quyen` (
  `MaQuyen` varchar(10) NOT NULL,
  `TenQuyen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quyen`
--

INSERT INTO `quyen` (`MaQuyen`, `TenQuyen`) VALUES
('Q00001', 'Admin'),
('Q00002', 'Bán hàng'),
('Q00003', 'Quản lý kho'),
('Q00004', 'Quản lý bếp');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `MaSP` varchar(10) NOT NULL,
  `TenSP` varchar(50) NOT NULL,
  `GiaSP` varchar(15) NOT NULL,
  `MoTaSP` varchar(255) NOT NULL,
  `AnhSP` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`MaSP`, `TenSP`, `GiaSP`, `MoTaSP`, `AnhSP`) VALUES
('SP00001', 'Gà rán truyền thống', '45000', 'Miếng gà rán giòn rụm', 'ga_ran_truyen_thong.jpg'),
('SP00002', 'Gà rán cay', '50000', 'Miếng gà rán vị cay đặc trưng', 'ga_ran_cay.jpg'),
('SP00003', 'Combo 1 người', '85000', '1 miếng gà + khoai tây chiên + nước ngọt', 'combo_1_nguoi.jpg'),
('SP00004', 'Combo gia đình', '250000', '6 miếng gà + khoai tây chiên + 1.5L Pepsi', 'combo_gia_dinh.jpg'),
('SP00005', 'Khoai tây chiên', '30000', 'Khoai tây chiên giòn', 'khoai_tay_chien.jpg'),
('SP00006', 'Pepsi lon', '15000', 'Nước ngọt Pepsi lon 330ml', 'pepsi.jpg'),
('SP00007', 'Kem vani', '20000', 'Kem vani mát lạnh', 'kem_vani.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `TenDangNhap` varchar(50) NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `MaQuyen` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`TenDangNhap`, `MatKhau`, `MaNV`, `MaQuyen`) VALUES
('NV00001', 'NV00001', 'NV00001', 'Q00001'),
('NV00002', 'NV00002', 'NV00002', 'Q00002'),
('NV00003', 'NV00003', 'NV00003', 'Q00003'),
('NV00004', 'NV00004', 'NV00004', 'Q00004');

-- --------------------------------------------------------

--
-- Table structure for table `thanhtoan`
--

CREATE TABLE `thanhtoan` (
  `MaTT` varchar(10) NOT NULL,
  `PhuongThucTT` varchar(20) NOT NULL,
  `MaHD` varchar(10) NOT NULL,
  `ThoiGianTT` varchar(20) NOT NULL,
  `SoTienTra` varchar(15) NOT NULL,
  `SoTienThoi` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `thanhtoan`
--

INSERT INTO `thanhtoan` (`MaTT`, `PhuongThucTT`, `MaHD`, `ThoiGianTT`, `SoTienTra`, `SoTienThoi`) VALUES
('TT00001', 'Tiền mặt', 'HD00001', '2025-08-27 20:00:00', '145000', '0'),
('TT00002', 'Thẻ ngân hàng', 'HD00002', '2025-08-27 21:00:00', '68000', '0');

-- --------------------------------------------------------

--
-- Table structure for table `vaitro`
--

CREATE TABLE `vaitro` (
  `MaVT` varchar(10) NOT NULL,
  `TenVT` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaitro`
--

INSERT INTO `vaitro` (`MaVT`, `TenVT`) VALUES
('VT00001', 'Quản lý'),
('VT00002', 'Nhân viên bán hàng'),
('VT00003', 'Nhân viên kho'),
('VT00004', 'Nhân viên bếp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ban`
--
ALTER TABLE `ban`
  ADD PRIMARY KEY (`MaBan`);

--
-- Indexes for table `chitiethd`
--
ALTER TABLE `chitiethd`
  ADD KEY `fk_cthd_hd` (`MaHD`),
  ADD KEY `fk_cthd_sp` (`MaSP`);

--
-- Indexes for table `chitietnhacungcap`
--
ALTER TABLE `chitietnhacungcap`
  ADD KEY `fk_ctncc_ncc` (`MaNCC`),
  ADD KEY `fk_ctncc_nl` (`MaNL`);

--
-- Indexes for table `chitietphieunhap`
--
ALTER TABLE `chitietphieunhap`
  ADD KEY `fk_ctpn_pn` (`MaPN`),
  ADD KEY `fk_ctpn_nl` (`MaNL`);

--
-- Indexes for table `chitietquyen`
--
ALTER TABLE `chitietquyen`
  ADD KEY `fk_quyen` (`MaQuyen`),
  ADD KEY `fk_chucnang` (`MaCN`),
  ADD KEY `fk_hanhdong` (`MaHanhDong`);

--
-- Indexes for table `chucnang`
--
ALTER TABLE `chucnang`
  ADD PRIMARY KEY (`MaCN`);

--
-- Indexes for table `congthuc`
--
ALTER TABLE `congthuc`
  ADD KEY `fk_ct_sp` (`MaSP`),
  ADD KEY `fk_ct_nl` (`MaNL`);

--
-- Indexes for table `danhmucsanpham`
--
ALTER TABLE `danhmucsanpham`
  ADD KEY `fk_dm_sp` (`MaSP`),
  ADD KEY `fk_dm_ldm` (`MaLDM`);

--
-- Indexes for table `datban`
--
ALTER TABLE `datban`
  ADD PRIMARY KEY (`MaDB`),
  ADD KEY `fk_db_ban` (`MaBan`),
  ADD KEY `fk_db_kh` (`MaKH`);

--
-- Indexes for table `hanhdong`
--
ALTER TABLE `hanhdong`
  ADD PRIMARY KEY (`MaHanhDong`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`MaHD`),
  ADD KEY `fk_hd_nv` (`MaNV`),
  ADD KEY `fk_hd_kh` (`MaKH`),
  ADD KEY `fk_hd_ban` (`MaBan`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`MaKhachHang`),
  ADD UNIQUE KEY `SDT` (`SDT`),
  ADD UNIQUE KEY `SDT_2` (`SDT`);

--
-- Indexes for table `loaidanhmuc`
--
ALTER TABLE `loaidanhmuc`
  ADD PRIMARY KEY (`MaLDM`);

--
-- Indexes for table `nguyenlieu`
--
ALTER TABLE `nguyenlieu`
  ADD PRIMARY KEY (`MaNL`);

--
-- Indexes for table `nhacungcap`
--
ALTER TABLE `nhacungcap`
  ADD PRIMARY KEY (`MaNCC`);

--
-- Indexes for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MaNV`),
  ADD KEY `fk_vaitro` (`MaVT`);

--
-- Indexes for table `phieunhap`
--
ALTER TABLE `phieunhap`
  ADD PRIMARY KEY (`MaPN`),
  ADD KEY `fk_pn_ncc` (`MaNCC`),
  ADD KEY `fk_pn_nv` (`MaNV`);

--
-- Indexes for table `quyen`
--
ALTER TABLE `quyen`
  ADD PRIMARY KEY (`MaQuyen`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`MaSP`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`TenDangNhap`),
  ADD KEY `fk_tk_nv` (`MaNV`);

--
-- Indexes for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD PRIMARY KEY (`MaTT`),
  ADD KEY `fk_tt_hd` (`MaHD`);

--
-- Indexes for table `vaitro`
--
ALTER TABLE `vaitro`
  ADD PRIMARY KEY (`MaVT`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitiethd`
--
ALTER TABLE `chitiethd`
  ADD CONSTRAINT `fk_cthd_hd` FOREIGN KEY (`MaHD`) REFERENCES `hoadon` (`MaHD`),
  ADD CONSTRAINT `fk_cthd_sp` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`);

--
-- Constraints for table `chitietnhacungcap`
--
ALTER TABLE `chitietnhacungcap`
  ADD CONSTRAINT `fk_ctncc_ncc` FOREIGN KEY (`MaNCC`) REFERENCES `nhacungcap` (`MaNCC`),
  ADD CONSTRAINT `fk_ctncc_nl` FOREIGN KEY (`MaNL`) REFERENCES `nguyenlieu` (`MaNL`);

--
-- Constraints for table `chitietphieunhap`
--
ALTER TABLE `chitietphieunhap`
  ADD CONSTRAINT `fk_ctpn_nl` FOREIGN KEY (`MaNL`) REFERENCES `nguyenlieu` (`MaNL`),
  ADD CONSTRAINT `fk_ctpn_pn` FOREIGN KEY (`MaPN`) REFERENCES `phieunhap` (`MaPN`);

--
-- Constraints for table `chitietquyen`
--
ALTER TABLE `chitietquyen`
  ADD CONSTRAINT `fk_chucnang` FOREIGN KEY (`MaCN`) REFERENCES `chucnang` (`MaCN`),
  ADD CONSTRAINT `fk_hanhdong` FOREIGN KEY (`MaHanhDong`) REFERENCES `hanhdong` (`MaHanhDong`),
  ADD CONSTRAINT `fk_quyen` FOREIGN KEY (`MaQuyen`) REFERENCES `quyen` (`MaQuyen`);

--
-- Constraints for table `congthuc`
--
ALTER TABLE `congthuc`
  ADD CONSTRAINT `fk_ct_nl` FOREIGN KEY (`MaNL`) REFERENCES `nguyenlieu` (`MaNL`),
  ADD CONSTRAINT `fk_ct_sp` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`);

--
-- Constraints for table `danhmucsanpham`
--
ALTER TABLE `danhmucsanpham`
  ADD CONSTRAINT `fk_dm_ldm` FOREIGN KEY (`MaLDM`) REFERENCES `loaidanhmuc` (`MaLDM`),
  ADD CONSTRAINT `fk_dm_sp` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`);

--
-- Constraints for table `datban`
--
ALTER TABLE `datban`
  ADD CONSTRAINT `fk_db_ban` FOREIGN KEY (`MaBan`) REFERENCES `ban` (`MaBan`),
  ADD CONSTRAINT `fk_db_kh` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKhachHang`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `fk_hd_ban` FOREIGN KEY (`MaBan`) REFERENCES `ban` (`MaBan`),
  ADD CONSTRAINT `fk_hd_kh` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKhachHang`),
  ADD CONSTRAINT `fk_hd_nv` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`);

--
-- Constraints for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `fk_vaitro` FOREIGN KEY (`MaVT`) REFERENCES `vaitro` (`MaVT`);

--
-- Constraints for table `phieunhap`
--
ALTER TABLE `phieunhap`
  ADD CONSTRAINT `fk_pn_ncc` FOREIGN KEY (`MaNCC`) REFERENCES `nhacungcap` (`MaNCC`),
  ADD CONSTRAINT `fk_pn_nv` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`);

--
-- Constraints for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD CONSTRAINT `fk_tk_nv` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`);

--
-- Constraints for table `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD CONSTRAINT `fk_tt_hd` FOREIGN KEY (`MaHD`) REFERENCES `hoadon` (`MaHD`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
