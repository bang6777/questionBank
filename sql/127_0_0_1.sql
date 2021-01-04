-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 04, 2021 lúc 05:45 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Đang đổ dữ liệu cho bảng `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"angular_direct\":\"direct\",\"snap_to_grid\":\"off\",\"relation_lines\":\"true\"}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

--
-- Đang đổ dữ liệu cho bảng `pma__export_templates`
--

INSERT INTO `pma__export_templates` (`id`, `username`, `export_type`, `template_name`, `template_data`) VALUES
(1, 'root', 'server', 'quesstionbank', '{\"quick_or_custom\":\"quick\",\"what\":\"sql\",\"db_select[]\":[\"phpmyadmin\",\"quesstionbank\",\"test\"],\"aliases_new\":\"\",\"output_format\":\"sendit\",\"filename_template\":\"@SERVER@\",\"remember_template\":\"on\",\"charset\":\"utf-8\",\"compression\":\"none\",\"maxsize\":\"\",\"codegen_structure_or_data\":\"data\",\"codegen_format\":\"0\",\"csv_separator\":\",\",\"csv_enclosed\":\"\\\"\",\"csv_escaped\":\"\\\"\",\"csv_terminated\":\"AUTO\",\"csv_null\":\"NULL\",\"csv_structure_or_data\":\"data\",\"excel_null\":\"NULL\",\"excel_columns\":\"something\",\"excel_edition\":\"win\",\"excel_structure_or_data\":\"data\",\"json_structure_or_data\":\"data\",\"json_unicode\":\"something\",\"latex_caption\":\"something\",\"latex_structure_or_data\":\"structure_and_data\",\"latex_structure_caption\":\"Cấu trúc của bảng @TABLE@\",\"latex_structure_continued_caption\":\"Cấu trúc của bảng @TABLE@ (còn nữa)\",\"latex_structure_label\":\"tab:@TABLE@-structure\",\"latex_relation\":\"something\",\"latex_comments\":\"something\",\"latex_mime\":\"something\",\"latex_columns\":\"something\",\"latex_data_caption\":\"Nội dung của bảng @TABLE@\",\"latex_data_continued_caption\":\"Nội dung của bảng @TABLE@ (còn nữa)\",\"latex_data_label\":\"tab:@TABLE@-data\",\"latex_null\":\"\\\\textit{NULL}\",\"mediawiki_structure_or_data\":\"data\",\"mediawiki_caption\":\"something\",\"mediawiki_headers\":\"something\",\"htmlword_structure_or_data\":\"structure_and_data\",\"htmlword_null\":\"NULL\",\"ods_null\":\"NULL\",\"ods_structure_or_data\":\"data\",\"odt_structure_or_data\":\"structure_and_data\",\"odt_relation\":\"something\",\"odt_comments\":\"something\",\"odt_mime\":\"something\",\"odt_columns\":\"something\",\"odt_null\":\"NULL\",\"phparray_structure_or_data\":\"data\",\"sql_include_comments\":\"something\",\"sql_header_comment\":\"\",\"sql_use_transaction\":\"something\",\"sql_compatibility\":\"NONE\",\"sql_structure_or_data\":\"structure_and_data\",\"sql_create_table\":\"something\",\"sql_auto_increment\":\"something\",\"sql_create_view\":\"something\",\"sql_create_trigger\":\"something\",\"sql_backquotes\":\"something\",\"sql_type\":\"INSERT\",\"sql_insert_syntax\":\"both\",\"sql_max_query_size\":\"50000\",\"sql_hex_for_binary\":\"something\",\"sql_utc_time\":\"something\",\"texytext_structure_or_data\":\"structure_and_data\",\"texytext_null\":\"NULL\",\"yaml_structure_or_data\":\"data\",\"\":null,\"as_separate_files\":null,\"csv_removeCRLF\":null,\"csv_columns\":null,\"excel_removeCRLF\":null,\"json_pretty_print\":null,\"htmlword_columns\":null,\"ods_columns\":null,\"sql_dates\":null,\"sql_relation\":null,\"sql_mime\":null,\"sql_disable_fk\":null,\"sql_views_as_tables\":null,\"sql_metadata\":null,\"sql_drop_database\":null,\"sql_drop_table\":null,\"sql_if_not_exists\":null,\"sql_view_current_user\":null,\"sql_or_replace_view\":null,\"sql_procedure_function\":null,\"sql_truncate\":null,\"sql_delayed\":null,\"sql_ignore\":null,\"texytext_columns\":null}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Đang đổ dữ liệu cho bảng `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"quesstionbank\",\"table\":\"teachers\"},{\"db\":\"quesstionbank\",\"table\":\"quesstions\"},{\"db\":\"quesstionbank\",\"table\":\"examdetails_quesstions\"},{\"db\":\"quesstionbank\",\"table\":\"exam_questions\"},{\"db\":\"quesstionbank\",\"table\":\"examdetails\"},{\"db\":\"quesstionbank\",\"table\":\"exams\"},{\"db\":\"quesstionbank\",\"table\":\"answers\"},{\"db\":\"quesstionbank\",\"table\":\"position_teachers\"},{\"db\":\"quesstionbank\",\"table\":\"levels\"},{\"db\":\"quesstionbank\",\"table\":\"topics\"}]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Đang đổ dữ liệu cho bảng `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2021-01-04 04:44:43', '{\"Console\\/Mode\":\"collapse\",\"lang\":\"vi\"}');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Chỉ mục cho bảng `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Chỉ mục cho bảng `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Chỉ mục cho bảng `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Chỉ mục cho bảng `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Chỉ mục cho bảng `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Chỉ mục cho bảng `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Chỉ mục cho bảng `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Chỉ mục cho bảng `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Chỉ mục cho bảng `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Chỉ mục cho bảng `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Chỉ mục cho bảng `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Chỉ mục cho bảng `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Chỉ mục cho bảng `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Cơ sở dữ liệu: `quesstionbank`
--
CREATE DATABASE IF NOT EXISTS `quesstionbank` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `quesstionbank`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `Id_quesstion` int(11) DEFAULT NULL,
  `Content` text DEFAULT NULL,
  `Diem` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `answers`
--

INSERT INTO `answers` (`id`, `Id_quesstion`, `Content`, `Diem`, `createdAt`, `updatedAt`) VALUES
(1, 419, '<h1>&nbsp;</h1><p>1</p>', '0', '2021-01-03 15:30:32', '2021-01-03 15:30:32'),
(2, 419, '<h1>&nbsp;</h1><p>abc</p>', '1', '2021-01-03 15:30:32', '2021-01-03 15:30:32'),
(3, 419, '<h1>&nbsp;</h1><p>2</p>', '0', '2021-01-03 15:30:32', '2021-01-03 15:30:32'),
(4, 419, '<h1>&nbsp;</h1><p>3</p>', '0', '2021-01-03 15:30:32', '2021-01-03 15:30:32'),
(5, 426, '<h1>&nbsp;</h1><p>adasdasdasda</p>', '1', '2021-01-03 15:58:54', '2021-01-03 15:58:54'),
(6, 426, '<h1>ádasd</h1><p>&nbsp;</p>', '0', '2021-01-03 15:58:54', '2021-01-03 15:58:54'),
(7, 426, '<h1>ádasdas</h1><p>&nbsp;</p>', '0', '2021-01-03 15:58:54', '2021-01-03 15:58:54'),
(8, 426, '<h1>ádsda</h1><p>&nbsp;</p>', '0', '2021-01-03 15:58:54', '2021-01-03 15:58:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `classes`
--

CREATE TABLE `classes` (
  `Id_class` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Id_Grade` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `classes`
--

INSERT INTO `classes` (`Id_class`, `Name`, `Id_Grade`, `createdAt`, `updatedAt`) VALUES
(1, 'Lớp 10A2', 1, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(2, 'Lớp 10A3', 1, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(3, 'Lớp 12A1', 3, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(4, 'Lớp 10A1', 1, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(5, 'Lớp 12A2', 3, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(6, 'Lớp 11A2', 2, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(7, 'Lớp 11A1', 2, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(8, 'Lớp 11A3', 2, '2020-12-13 11:54:09', '2020-12-13 11:54:09'),
(9, 'Lớp 12A3', 3, '2020-12-13 11:54:09', '2020-12-13 11:54:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `examdetails`
--

CREATE TABLE `examdetails` (
  `id` int(11) NOT NULL,
  `Id_exam` int(11) DEFAULT NULL,
  `Stt_exam` int(11) DEFAULT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `examdetails_quesstions`
--

CREATE TABLE `examdetails_quesstions` (
  `id` int(11) NOT NULL,
  `Id_examdetails` int(11) DEFAULT NULL,
  `Id_quesstion` int(11) DEFAULT NULL,
  `Stt_answer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `Id_teacher` int(11) DEFAULT NULL,
  `Id_exam_subject` int(11) DEFAULT NULL,
  `Id_grade` int(11) DEFAULT NULL,
  `Time` datetime DEFAULT NULL,
  `Pass` varchar(255) DEFAULT NULL,
  `Note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exam_questions`
--

CREATE TABLE `exam_questions` (
  `id` int(11) NOT NULL,
  `Id_quesstion` int(11) DEFAULT NULL,
  `Id_exam` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exam_subjects`
--

CREATE TABLE `exam_subjects` (
  `Id` int(11) NOT NULL,
  `Name_es` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `exam_subjects`
--

INSERT INTO `exam_subjects` (`Id`, `Name_es`, `createdAt`, `updatedAt`) VALUES
(1, 'Địa Lý', '2020-12-13 12:35:13', '2020-12-13 12:35:13'),
(2, 'Lịch Sử', '2020-12-13 12:43:47', '2020-12-13 12:43:47'),
(3, 'Toán', '2020-12-13 13:30:15', '2020-12-13 13:30:15'),
(4, 'Ngữ Văn', '2020-12-13 13:30:22', '2020-12-13 13:30:22'),
(5, 'Sinh', '2020-12-13 13:30:37', '2020-12-13 13:30:37'),
(6, 'Vật Lý', '2020-12-13 13:30:43', '2020-12-13 13:30:43'),
(7, 'Hóa', '2020-12-13 13:30:48', '2020-12-13 13:30:48'),
(8, 'Tin Học', '2020-12-13 13:31:06', '2020-12-13 13:31:06'),
(9, 'Tiếng Anh', '2020-12-13 13:31:12', '2020-12-13 13:31:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `grades`
--

CREATE TABLE `grades` (
  `Id_grade` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `grades`
--

INSERT INTO `grades` (`Id_grade`, `Name`, `createdAt`, `updatedAt`) VALUES
(1, 'Khối 10', '2020-12-13 11:54:03', '2020-12-13 11:54:03'),
(2, 'Khối 11', '2020-12-13 11:54:03', '2020-12-13 11:54:03'),
(3, 'Khối 12', '2020-12-13 11:54:03', '2020-12-13 11:54:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `Url_image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_quesstions`
--

CREATE TABLE `image_quesstions` (
  `id` int(11) NOT NULL,
  `Id_image` int(11) DEFAULT NULL,
  `Id_quesstion` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `levels`
--

CREATE TABLE `levels` (
  `Id` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `levels`
--

INSERT INTO `levels` (`Id`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'De', '2020-12-13 11:56:12', '2020-12-13 11:56:12'),
(2, 'Trung Bình', '2020-12-13 11:56:19', '2020-12-13 11:56:19'),
(3, 'Khó', '2020-12-13 11:56:25', '2020-12-13 11:56:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `positions`
--

CREATE TABLE `positions` (
  `id` int(11) NOT NULL,
  `Name_position` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `positions`
--

INSERT INTO `positions` (`id`, `Name_position`, `createdAt`, `updatedAt`) VALUES
(1, 'Nhân Viên', '2020-12-28 11:55:11', '2020-12-28 11:55:11'),
(2, 'Nhân Viên', '2020-12-28 11:55:39', '2020-12-28 11:55:39'),
(3, 'Nhân Viên', '2020-12-28 11:56:01', '2020-12-28 11:56:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `position_teachers`
--

CREATE TABLE `position_teachers` (
  `Id_pt` int(11) NOT NULL,
  `Id_position` int(11) NOT NULL,
  `Id_teacher` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quesstions`
--

CREATE TABLE `quesstions` (
  `id` int(11) NOT NULL,
  `Id_topic` int(11) DEFAULT NULL,
  `Id_teacher` int(11) DEFAULT NULL,
  `Id_level` int(11) DEFAULT NULL,
  `Id_grade` int(11) DEFAULT NULL,
  `Name_quesstion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `quesstions`
--

INSERT INTO `quesstions` (`id`, `Id_topic`, `Id_teacher`, `Id_level`, `Id_grade`, `Name_quesstion`, `createdAt`, `updatedAt`) VALUES
(418, 1, 1, 1, NULL, 'Xu hướng quốc tế hóa và khu vực hóa nền kinh tế thế giới diễn ra với quy mô lớn và nhịp dộ cao là điều kiện để:', '2021-01-03 15:30:12', '2021-01-03 15:30:12'),
(419, 1, 1, 1, 1, 'Xu hướng quốc tế hóa và khu vực hóa nền kinh tế thế giới diễn ra với quy mô lớn và nhịp dộ cao là điều kiện để:', '2021-01-03 15:30:32', '2021-01-03 15:30:32'),
(426, 2, 1, 2, 1, '<h1>ádsdasdasdaádasdsas</h1><p>&nbsp;</p>', '2021-01-03 15:58:54', '2021-01-03 15:58:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `Id_student` varchar(255) NOT NULL,
  `Id_class` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Dob` datetime DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `students`
--

INSERT INTO `students` (`id`, `Id_student`, `Id_class`, `Name`, `Dob`, `Gender`, `Address`, `Phone`, `Password`, `createdAt`, `updatedAt`) VALUES
(5, 't', 1, 'Bùi Nhật Tài', '2020-11-10 17:00:00', 'Nam', '123 Ninh Kiều Cần Thơ', '0907338376', '123456', '2020-12-13 11:54:17', '2020-12-13 11:54:17'),
(6, 't2', 2, 'Nguyễn Văn Toàn', '2020-11-10 17:00:00', 'Nam', '123 Ninh Kiều Cần Thơ', '0907338376', '123456', '2020-12-13 11:54:17', '2020-12-13 11:54:17'),
(7, 'Bang1000004', 2, 'Nguyễn Anh Bằng', '2020-11-10 17:00:00', 'Nam', '123 Ninh Kiều Cần Thơ', '0907338376', 'sssssssss', '2020-12-13 11:54:17', '2020-12-13 11:54:17'),
(8, 'Tuan1000002', 1, 'Nguyễn Hoàng Tuấn', '2020-11-10 17:00:00', 'Nam', '123 Ninh Kiều Cần Thơ', '0907338376', 'sssssssss', '2020-12-13 11:54:17', '2020-12-13 11:54:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `Name_subject` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `subjects`
--

INSERT INTO `subjects` (`id`, `Name_subject`, `createdAt`, `updatedAt`) VALUES
(1, 'Văn Sử Địa', '2020-12-13 11:54:28', '2020-12-13 11:54:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `Id_subject` int(11) DEFAULT NULL,
  `idteacher` varchar(255) NOT NULL,
  `Id_exam_subject` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Dob` datetime DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `teachers`
--

INSERT INTO `teachers` (`id`, `Id_subject`, `idteacher`, `Id_exam_subject`, `Name`, `Dob`, `Gender`, `Address`, `Phone`, `Password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'hieu000001', 1, 'lê Trung Hiếu', '2020-11-10 17:00:00', 'Name', '123 Ninh Kiều Cần Thơ', '0907338376', '$2b$10$Fnk.RYWKciWoG3i6oZuM/.lQP1O8xpI7zpkx.iq0g1qFjq7n4xjK.', 1, '2020-12-13 11:54:44', '2021-01-04 03:21:30'),
(36, 1, 'Tuan100035', 1, 'Nguyễn Hoàng Tuấn', '2020-11-10 17:00:00', 'Name', '123 Ninh Kiều Cần Thơ', '0907338376', '$2b$10$RScQpmWQy15E0yostNEtpOCOTVypZl2WJEE7b5.E79P9XPYw7Wi2G', 0, '2021-01-04 02:35:11', '2021-01-04 02:35:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `terms`
--

CREATE TABLE `terms` (
  `Id_Term` int(11) NOT NULL,
  `Name_term` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `Id_exam` int(11) DEFAULT NULL,
  `Id_student` int(11) DEFAULT NULL,
  `Id_question` text DEFAULT NULL,
  `Id_Examdetails` int(11) DEFAULT NULL,
  `Point` float DEFAULT NULL,
  `Time_start` varchar(255) DEFAULT NULL,
  `Time_end` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tests`
--

INSERT INTO `tests` (`id`, `Id_exam`, `Id_student`, `Id_question`, `Id_Examdetails`, `Point`, `Time_start`, `Time_end`, `createdAt`, `updatedAt`) VALUES
(26, 4, 5, '[{\"question\":121,\"answer\":482,\"core\":0},{\"question\":122,\"answer\":487,\"core\":0},{\"question\":123,\"answer\":489,\"core\":0},{\"question\":124,\"answer\":498,\"core\":1},{\"question\":125,\"answer\":502,\"core\":0},{\"question\":126,\"answer\":495,\"core\":0},{\"question\":127,\"answer\":507,\"core\":1},{\"question\":128,\"answer\":509,\"core\":1},{\"question\":129,\"answer\":515,\"core\":0},{\"question\":130,\"answer\":524,\"core\":0},{\"question\":131,\"answer\":\"\",\"core\":0},{\"question\":132,\"answer\":\"\",\"core\":0},{\"question\":133,\"answer\":\"\",\"core\":0},{\"question\":134,\"answer\":\"\",\"core\":0},{\"question\":135,\"answer\":\"\",\"core\":0},{\"question\":136,\"answer\":\"\",\"core\":0},{\"question\":137,\"answer\":\"\",\"core\":0},{\"question\":138,\"answer\":\"\",\"core\":0},{\"question\":139,\"answer\":\"\",\"core\":0},{\"question\":140,\"answer\":\"\",\"core\":0},{\"question\":141,\"answer\":\"\",\"core\":0},{\"question\":142,\"answer\":\"\",\"core\":0},{\"question\":143,\"answer\":\"\",\"core\":0},{\"question\":144,\"answer\":\"\",\"core\":0},{\"question\":145,\"answer\":\"\",\"core\":0},{\"question\":146,\"answer\":\"\",\"core\":0},{\"question\":147,\"answer\":\"\",\"core\":0},{\"question\":148,\"answer\":\"\",\"core\":0},{\"question\":149,\"answer\":\"\",\"core\":0},{\"question\":150,\"answer\":\"\",\"core\":0},{\"question\":151,\"answer\":\"\",\"core\":0},{\"question\":152,\"answer\":\"\",\"core\":0},{\"question\":153,\"answer\":\"\",\"core\":0},{\"question\":154,\"answer\":\"\",\"core\":0},{\"question\":155,\"answer\":\"\",\"core\":0},{\"question\":156,\"answer\":\"\",\"core\":0},{\"question\":157,\"answer\":\"\",\"core\":0},{\"question\":158,\"answer\":\"\",\"core\":0},{\"question\":159,\"answer\":\"\",\"core\":0}]', 32, 0.75, '{\"times\":\"2020-12-28 18:56:24\",\"time\":\"60\"}', '{\"times\":\"2020-12-28 18:56:35\",\"time\":3590}', '2020-12-28 11:56:35', '2020-12-28 11:56:35'),
(27, 4, 6, '[{\"question\":121,\"answer\":482,\"core\":0},{\"question\":122,\"answer\":487,\"core\":0},{\"question\":123,\"answer\":491,\"core\":0},{\"question\":124,\"answer\":499,\"core\":0},{\"question\":125,\"answer\":502,\"core\":0},{\"question\":126,\"answer\":494,\"core\":0},{\"question\":127,\"answer\":505,\"core\":0},{\"question\":128,\"answer\":511,\"core\":0},{\"question\":129,\"answer\":513,\"core\":0},{\"question\":130,\"answer\":522,\"core\":1},{\"question\":131,\"answer\":519,\"core\":1},{\"question\":132,\"answer\":528,\"core\":1},{\"question\":133,\"answer\":531,\"core\":0},{\"question\":134,\"answer\":533,\"core\":0},{\"question\":135,\"answer\":540,\"core\":0},{\"question\":136,\"answer\":543,\"core\":0},{\"question\":137,\"answer\":547,\"core\":0},{\"question\":138,\"answer\":551,\"core\":0},{\"question\":139,\"answer\":554,\"core\":0},{\"question\":140,\"answer\":558,\"core\":0},{\"question\":141,\"answer\":\"\",\"core\":0},{\"question\":142,\"answer\":\"\",\"core\":0},{\"question\":143,\"answer\":\"\",\"core\":0},{\"question\":144,\"answer\":\"\",\"core\":0},{\"question\":145,\"answer\":\"\",\"core\":0},{\"question\":146,\"answer\":\"\",\"core\":0},{\"question\":147,\"answer\":\"\",\"core\":0},{\"question\":148,\"answer\":\"\",\"core\":0},{\"question\":149,\"answer\":\"\",\"core\":0},{\"question\":150,\"answer\":\"\",\"core\":0},{\"question\":151,\"answer\":\"\",\"core\":0},{\"question\":152,\"answer\":\"\",\"core\":0},{\"question\":153,\"answer\":\"\",\"core\":0},{\"question\":154,\"answer\":\"\",\"core\":0},{\"question\":155,\"answer\":\"\",\"core\":0},{\"question\":156,\"answer\":\"\",\"core\":0},{\"question\":157,\"answer\":\"\",\"core\":0},{\"question\":158,\"answer\":\"\",\"core\":0},{\"question\":159,\"answer\":\"\",\"core\":0}]', 32, 0.75, '{\"times\":\"2020-12-28 19:15:54\",\"time\":\"60\"}', '{\"times\":\"2020-12-28 19:16:13\",\"time\":3581}', '2020-12-28 12:16:14', '2020-12-28 12:16:14'),
(28, 4, 5, '[{\"question\":121,\"answer\":482,\"core\":0},{\"question\":122,\"answer\":487,\"core\":0},{\"question\":123,\"answer\":490,\"core\":0},{\"question\":124,\"answer\":498,\"core\":1},{\"question\":125,\"answer\":503,\"core\":1},{\"question\":126,\"answer\":495,\"core\":0},{\"question\":127,\"answer\":507,\"core\":1},{\"question\":128,\"answer\":510,\"core\":0},{\"question\":129,\"answer\":516,\"core\":0},{\"question\":130,\"answer\":522,\"core\":1},{\"question\":131,\"answer\":517,\"core\":0},{\"question\":132,\"answer\":525,\"core\":0},{\"question\":133,\"answer\":530,\"core\":0},{\"question\":134,\"answer\":535,\"core\":1},{\"question\":135,\"answer\":537,\"core\":0},{\"question\":136,\"answer\":542,\"core\":0},{\"question\":137,\"answer\":546,\"core\":0},{\"question\":138,\"answer\":550,\"core\":1},{\"question\":139,\"answer\":555,\"core\":1},{\"question\":140,\"answer\":559,\"core\":0},{\"question\":141,\"answer\":563,\"core\":0},{\"question\":142,\"answer\":570,\"core\":0},{\"question\":143,\"answer\":566,\"core\":1},{\"question\":144,\"answer\":580,\"core\":0},{\"question\":145,\"answer\":574,\"core\":0},{\"question\":146,\"answer\":584,\"core\":0},{\"question\":147,\"answer\":586,\"core\":0},{\"question\":148,\"answer\":590,\"core\":0},{\"question\":149,\"answer\":602,\"core\":0},{\"question\":150,\"answer\":595,\"core\":1},{\"question\":151,\"answer\":609,\"core\":0},{\"question\":152,\"answer\":598,\"core\":0},{\"question\":153,\"answer\":606,\"core\":0},{\"question\":154,\"answer\":614,\"core\":1},{\"question\":155,\"answer\":618,\"core\":0},{\"question\":156,\"answer\":622,\"core\":0},{\"question\":157,\"answer\":629,\"core\":0},{\"question\":158,\"answer\":633,\"core\":0},{\"question\":159,\"answer\":626,\"core\":1}]', 32, 3, '{\"times\":\"2021-01-02 15:11:28\",\"time\":\"1\"}', '{\"times\":\"2021-01-02 15:12:28\",\"time\":0}', '2021-01-02 08:12:28', '2021-01-02 08:12:28'),
(29, 11, 6, '[{\"question\":357,\"answer\":1391,\"core\":0},{\"question\":358,\"answer\":1394,\"core\":0},{\"question\":359,\"answer\":1397,\"core\":0},{\"question\":360,\"answer\":1403,\"core\":0},{\"question\":361,\"answer\":1405,\"core\":1},{\"question\":362,\"answer\":1416,\"core\":0},{\"question\":363,\"answer\":1418,\"core\":0},{\"question\":364,\"answer\":1424,\"core\":1},{\"question\":365,\"answer\":1410,\"core\":0},{\"question\":366,\"answer\":1431,\"core\":1},{\"question\":367,\"answer\":\"\",\"core\":0},{\"question\":368,\"answer\":\"\",\"core\":0},{\"question\":369,\"answer\":\"\",\"core\":0},{\"question\":370,\"answer\":\"\",\"core\":0},{\"question\":371,\"answer\":\"\",\"core\":0},{\"question\":372,\"answer\":\"\",\"core\":0},{\"question\":373,\"answer\":\"\",\"core\":0},{\"question\":374,\"answer\":\"\",\"core\":0},{\"question\":375,\"answer\":\"\",\"core\":0}]', 72, 1.5, '{\"times\":\"2021-01-03 02:06:00\",\"time\":\"50\"}', '{\"times\":\"2021-01-03 02:19:16\",\"time\":2212}', '2021-01-02 19:19:16', '2021-01-02 19:19:16'),
(30, 11, 6, '[{\"question\":357,\"answer\":1391,\"core\":0},{\"question\":358,\"answer\":1394,\"core\":0},{\"question\":359,\"answer\":1398,\"core\":1},{\"question\":360,\"answer\":1402,\"core\":0},{\"question\":361,\"answer\":1406,\"core\":0},{\"question\":362,\"answer\":1414,\"core\":1},{\"question\":363,\"answer\":1417,\"core\":0},{\"question\":364,\"answer\":1423,\"core\":0},{\"question\":365,\"answer\":1411,\"core\":0},{\"question\":366,\"answer\":1431,\"core\":1},{\"question\":367,\"answer\":\"\",\"core\":0},{\"question\":368,\"answer\":\"\",\"core\":0},{\"question\":369,\"answer\":\"\",\"core\":0},{\"question\":370,\"answer\":\"\",\"core\":0},{\"question\":371,\"answer\":\"\",\"core\":0},{\"question\":372,\"answer\":\"\",\"core\":0},{\"question\":373,\"answer\":\"\",\"core\":0},{\"question\":374,\"answer\":\"\",\"core\":0},{\"question\":375,\"answer\":\"\",\"core\":0}]', 73, 1.5, '{\"times\":\"2021-01-03 02:20:14\",\"time\":\"50\"}', '{\"times\":\"2021-01-03 02:20:38\",\"time\":2130}', '2021-01-02 19:20:38', '2021-01-02 19:20:38'),
(31, 11, 6, '[{\"question\":357,\"answer\":\"\",\"core\":0},{\"question\":358,\"answer\":\"\",\"core\":0},{\"question\":359,\"answer\":\"\",\"core\":0},{\"question\":360,\"answer\":\"\",\"core\":0},{\"question\":361,\"answer\":\"\",\"core\":0},{\"question\":362,\"answer\":\"\",\"core\":0},{\"question\":363,\"answer\":\"\",\"core\":0},{\"question\":364,\"answer\":\"\",\"core\":0},{\"question\":365,\"answer\":\"\",\"core\":0},{\"question\":366,\"answer\":\"\",\"core\":0},{\"question\":367,\"answer\":\"\",\"core\":0},{\"question\":368,\"answer\":\"\",\"core\":0},{\"question\":369,\"answer\":\"\",\"core\":0},{\"question\":370,\"answer\":\"\",\"core\":0},{\"question\":371,\"answer\":\"\",\"core\":0},{\"question\":372,\"answer\":\"\",\"core\":0},{\"question\":373,\"answer\":\"\",\"core\":0},{\"question\":374,\"answer\":\"\",\"core\":0},{\"question\":375,\"answer\":\"\",\"core\":0}]', 73, 0, '{\"times\":\"2021-01-03 02:20:46\",\"time\":\"50\"}', '{\"times\":\"2021-01-03 02:34:02\",\"time\":2204}', '2021-01-02 19:34:03', '2021-01-02 19:34:03'),
(32, 11, 5, '[{\"question\":357,\"answer\":1391,\"core\":0},{\"question\":358,\"answer\":1393,\"core\":0},{\"question\":359,\"answer\":1398,\"core\":1},{\"question\":360,\"answer\":1402,\"core\":0},{\"question\":361,\"answer\":1407,\"core\":0},{\"question\":362,\"answer\":1415,\"core\":0},{\"question\":363,\"answer\":1420,\"core\":0},{\"question\":364,\"answer\":1422,\"core\":0},{\"question\":365,\"answer\":1410,\"core\":0},{\"question\":366,\"answer\":1430,\"core\":0},{\"question\":367,\"answer\":1436,\"core\":0},{\"question\":368,\"answer\":1427,\"core\":0},{\"question\":369,\"answer\":1439,\"core\":0},{\"question\":370,\"answer\":\"\",\"core\":0},{\"question\":371,\"answer\":1451,\"core\":1},{\"question\":372,\"answer\":1442,\"core\":0},{\"question\":373,\"answer\":1456,\"core\":1},{\"question\":374,\"answer\":1460,\"core\":0},{\"question\":375,\"answer\":1464,\"core\":0}]', 73, 2, '{\"times\":\"2021-01-03 20:07:54\",\"time\":\"50\"}', '{\"times\":\"2021-01-03 20:53:07\",\"time\":290}', '2021-01-03 13:53:07', '2021-01-03 13:53:07');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topics`
--

CREATE TABLE `topics` (
  `Id` int(11) NOT NULL,
  `Id_es` int(11) DEFAULT NULL,
  `Id_grade` int(11) NOT NULL,
  `Name_topic` varchar(255) DEFAULT NULL,
  `Content_topic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `topics`
--

INSERT INTO `topics` (`Id`, `Id_es`, `Id_grade`, `Name_topic`, `Content_topic`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Chương 1', 'Bản Đồ', '2020-12-13 11:55:13', '2020-12-13 11:55:13'),
(2, 1, 1, 'Chương 2', 'Vũ Trụ. Hệ Quả Các Chuyển Động Của Trái Đất', '2020-12-13 12:37:02', '2020-12-13 12:37:02'),
(3, 1, 1, 'Chương 3', 'Cấu Trúc Của Trái Đất. Các Quyển Của Lớp Vỏ Địa Lý', '2020-12-13 12:41:20', '2020-12-13 12:41:20'),
(4, 2, 2, 'Chương 1', 'Xã Hội Nguyên Thủy', '2020-12-13 12:48:48', '2020-12-13 12:48:48'),
(5, 2, 2, 'Chương 2', 'Xã Hội Cổ Đại', '2020-12-13 12:48:58', '2020-12-13 12:48:58'),
(6, 2, 2, 'Chương 3', 'Trung Quốc Thời Phong Kiến', '2020-12-13 12:49:16', '2020-12-13 12:49:16');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_quesstion` (`Id_quesstion`);

--
-- Chỉ mục cho bảng `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`Id_class`),
  ADD KEY `Id_Grade` (`Id_Grade`);

--
-- Chỉ mục cho bảng `examdetails`
--
ALTER TABLE `examdetails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `examdetails_quesstions`
--
ALTER TABLE `examdetails_quesstions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_examdetails` (`Id_examdetails`),
  ADD KEY `Id_quesstion` (`Id_quesstion`);

--
-- Chỉ mục cho bảng `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `exam_questions`
--
ALTER TABLE `exam_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_quesstion` (`Id_quesstion`),
  ADD KEY `Id_exam` (`Id_exam`);

--
-- Chỉ mục cho bảng `exam_subjects`
--
ALTER TABLE `exam_subjects`
  ADD PRIMARY KEY (`Id`);

--
-- Chỉ mục cho bảng `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`Id_grade`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `image_quesstions`
--
ALTER TABLE `image_quesstions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_image` (`Id_image`),
  ADD KEY `Id_quesstion` (`Id_quesstion`);

--
-- Chỉ mục cho bảng `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`Id`);

--
-- Chỉ mục cho bảng `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `position_teachers`
--
ALTER TABLE `position_teachers`
  ADD PRIMARY KEY (`Id_pt`,`Id_position`,`Id_teacher`),
  ADD KEY `Id_position` (`Id_position`),
  ADD KEY `Id_teacher` (`Id_teacher`);

--
-- Chỉ mục cho bảng `quesstions`
--
ALTER TABLE `quesstions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_topic` (`Id_topic`),
  ADD KEY `Id_teacher` (`Id_teacher`),
  ADD KEY `Id_level` (`Id_level`);

--
-- Chỉ mục cho bảng `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_class` (`Id_class`);

--
-- Chỉ mục cho bảng `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_subject` (`Id_subject`);

--
-- Chỉ mục cho bảng `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`Id_Term`);

--
-- Chỉ mục cho bảng `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id_es` (`Id_es`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `classes`
--
ALTER TABLE `classes`
  MODIFY `Id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `examdetails`
--
ALTER TABLE `examdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `examdetails_quesstions`
--
ALTER TABLE `examdetails_quesstions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `exam_questions`
--
ALTER TABLE `exam_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `exam_subjects`
--
ALTER TABLE `exam_subjects`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `grades`
--
ALTER TABLE `grades`
  MODIFY `Id_grade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `image_quesstions`
--
ALTER TABLE `image_quesstions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `levels`
--
ALTER TABLE `levels`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `position_teachers`
--
ALTER TABLE `position_teachers`
  MODIFY `Id_pt` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `quesstions`
--
ALTER TABLE `quesstions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=427;

--
-- AUTO_INCREMENT cho bảng `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `terms`
--
ALTER TABLE `terms`
  MODIFY `Id_Term` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `topics`
--
ALTER TABLE `topics`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`Id_quesstion`) REFERENCES `quesstions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`Id_Grade`) REFERENCES `grades` (`Id_grade`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `examdetails_quesstions`
--
ALTER TABLE `examdetails_quesstions`
  ADD CONSTRAINT `examdetails_quesstions_ibfk_1` FOREIGN KEY (`Id_examdetails`) REFERENCES `examdetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examdetails_quesstions_ibfk_2` FOREIGN KEY (`Id_quesstion`) REFERENCES `quesstions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `exam_questions`
--
ALTER TABLE `exam_questions`
  ADD CONSTRAINT `exam_questions_ibfk_1` FOREIGN KEY (`Id_quesstion`) REFERENCES `quesstions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `exam_questions_ibfk_2` FOREIGN KEY (`Id_exam`) REFERENCES `exams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `image_quesstions`
--
ALTER TABLE `image_quesstions`
  ADD CONSTRAINT `image_quesstions_ibfk_1` FOREIGN KEY (`Id_image`) REFERENCES `images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_quesstions_ibfk_2` FOREIGN KEY (`Id_quesstion`) REFERENCES `quesstions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `position_teachers`
--
ALTER TABLE `position_teachers`
  ADD CONSTRAINT `position_teachers_ibfk_1` FOREIGN KEY (`Id_position`) REFERENCES `positions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `position_teachers_ibfk_2` FOREIGN KEY (`Id_teacher`) REFERENCES `teachers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `quesstions`
--
ALTER TABLE `quesstions`
  ADD CONSTRAINT `quesstions_ibfk_1` FOREIGN KEY (`Id_topic`) REFERENCES `topics` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quesstions_ibfk_2` FOREIGN KEY (`Id_teacher`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quesstions_ibfk_3` FOREIGN KEY (`Id_level`) REFERENCES `levels` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`Id_class`) REFERENCES `classes` (`Id_class`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`Id_subject`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_ibfk_1` FOREIGN KEY (`Id_es`) REFERENCES `exam_subjects` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Cơ sở dữ liệu: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
