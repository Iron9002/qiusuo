/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : qiusuoeducation

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-07-14 13:53:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for student_info
-- ----------------------------
DROP TABLE IF EXISTS `student_info`;
CREATE TABLE `student_info` (
  `si_id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `si_name` varchar(255) NOT NULL,
  `si_mobile` varchar(20) NOT NULL,
  `si_age` int(5) NOT NULL,
  `si_location` varchar(255) NOT NULL,
  `si_status` varchar(255) DEFAULT NULL,
  `si_log` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`si_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
