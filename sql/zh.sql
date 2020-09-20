/*
 Navicat Premium Data Transfer

 Source Server         : phpstudy
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : catan

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 14/01/2019 21:06:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tongbi` int(20) NULL DEFAULT NULL,
  `tili` int(3) NULL DEFAULT NULL,
  `money` int(20) NULL DEFAULT NULL,
  `head` int(3) NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('zvnz25bs', 'q', 'q', 'Q', 2366725, 12, 438, 4);
INSERT INTO `user` VALUES ('tntzyyis', 'w', 'w', 'W', 542754, 64, 325, 2);
INSERT INTO `user` VALUES ('mgw0elds', 's', 's', 'S', 34235, 6, 3252, 1);
INSERT INTO `user` VALUES ('z21al2nj', 'a', 'a', 'A', 21443, 31, 354, 7);
INSERT INTO `user` VALUES ('rmq0avwy', 'e', 'e', 'E', 234, 34, 564, 2);
INSERT INTO `user` VALUES ('s5dsg4r5', 'r', 'r', 'R', 2145136, 3, 5546, 8);
INSERT INTO `user` VALUES ('taylal4k', 'd', 'd', 'D', 23247, 43, 3452, 4);

SET FOREIGN_KEY_CHECKS = 1;
