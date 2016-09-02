/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50537
Source Host           : localhost:3306
Source Database       : yiju

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2016-08-20 10:16:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for houses
-- ----------------------------
DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lid` int(11) DEFAULT NULL COMMENT '房东id',
  `type` varchar(20) DEFAULT NULL COMMENT '房东类型如经纪人，个人房源',
  `price` varchar(20) DEFAULT NULL,
  `state` int(11) DEFAULT NULL COMMENT '状态1代表出售完，状态0代表正在出售',
  `photo` varchar(200) DEFAULT NULL COMMENT '房子图片',
  `hdescribe` varchar(600) DEFAULT NULL COMMENT '房子整体描述',
  `address` varchar(500) DEFAULT NULL COMMENT '房子详细地址',
  `villageName` varchar(100) DEFAULT NULL COMMENT '房子小区名字',
  `area` varchar(100) DEFAULT NULL COMMENT '房子所在区域',
  `room` varchar(100) DEFAULT NULL COMMENT '房子的厅室',
  `features` varchar(200) DEFAULT NULL COMMENT '房屋特色特点',
  `furniture` varchar(600) DEFAULT NULL COMMENT '房屋设备家具',
  `paymethod` varchar(200) DEFAULT NULL COMMENT '支付方法，交三押一等',
  `floor` varchar(200) DEFAULT NULL COMMENT '所在楼层',
  `countfloor` varchar(60) DEFAULT NULL COMMENT '房子总共楼层',
  `rentway` varchar(200) DEFAULT NULL COMMENT '租赁方法分为整租合租等',
  `linkman` varchar(60) DEFAULT NULL COMMENT '房子联系人姓名',
  `linkphone` varchar(60) DEFAULT NULL COMMENT '电话号码',
  `tittle` varchar(300) DEFAULT NULL,
  `addtime` varchar(30) DEFAULT NULL COMMENT '发布时间',
  `top` int(11) DEFAULT '0' COMMENT '0不是推荐房源，1是推荐房源',
  `direction` varchar(20) DEFAULT NULL COMMENT '方向',
  `hlevel` varchar(30) DEFAULT '' COMMENT '装修层次精装修',
  `hcondition` varchar(200) DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL COMMENT '区域',
  `shi` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COMMENT='房子信息';

-- ----------------------------
-- Records of houses
-- ----------------------------
INSERT INTO `houses` VALUES ('56', '5', '个人', '5000', '0', '14714190269350.png,14714190269361.png', null, '郑州市金水区中恒都市花园', '中恒都市花园', '89', '2室2厅1卫', '交通便利', '床,衣柜,沙发,书桌,电视,冰箱,微波炉,电磁炉,洗衣机,空调,热水器,宽带', '押一付三', '15', '26', '押一付三', '王先生', '18338765331', '南北通透 家具齐全 价格优惠 房屋干净', '2016/08/17 15:30:26', '1', '南', '精装修', '中恒都市花园2室2厅1卫', null, '1');
INSERT INTO `houses` VALUES ('57', '5', '个人', '6000', '0', '14714191327790.png,14714191327811.png', null, '郑州市高新区', '天使花园', '98', '1室3厅1卫', '家具齐全', '床,衣柜,沙发,书桌,电视', '押一付三', '1', '6', '押一付三', '张先生', '18338765331', '简单实惠', '2016/08/17 15:32:12', '1', '南', '精装修', '天使花园1室3厅1卫', null, '1');
INSERT INTO `houses` VALUES ('58', '2', '个人', '5000', '0', '14715072217430.png,14715072217451.png', null, '金水区 福彩路', '山顶大厦', '90', '1室3厅1卫', '干净 具齐', '床,衣柜,沙发,书桌,电视,宽带,暖气', '押一付三', '2', '21', '押一付三', '李先生', '13865347895', '家具齐全 装饰豪华', '2016/08/18 16:00:21', '1', '南', '精装修', '山顶大厦1室3厅1卫', null, '1');
INSERT INTO `houses` VALUES ('60', '2', '个人', '2300', '0', '14716590309890.png,14716590309911.png,14716590310032.png', null, '郑州市高新区', '温馨花园', '78', '1室1厅1卫', '交通便利 环境优美 家具齐全', '床', '押一付三', '3', '7', '单间出租', '赵先生', '18976533645', '干净卫生', '2016/08/20 10:10:31', '1', '南', '精装修', '温馨花园1室1厅1卫', null, '1');

-- ----------------------------
-- Table structure for landlord
-- ----------------------------
DROP TABLE IF EXISTS `landlord`;
CREATE TABLE `landlord` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `lname` varchar(20) DEFAULT NULL,
  `lpassword` varchar(20) DEFAULT NULL,
  `ltype` varchar(20) DEFAULT NULL,
  `permissions` int(11) DEFAULT NULL,
  `addtime` varchar(20) DEFAULT NULL COMMENT '申请时间',
  `lphone` varchar(20) DEFAULT NULL,
  `lemail` varchar(30) DEFAULT NULL,
  `lphoto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='房主信息\r\n';

-- ----------------------------
-- Records of landlord
-- ----------------------------
INSERT INTO `landlord` VALUES ('1', '123', '12313', null, null, null, '1231', '123', null);
INSERT INTO `landlord` VALUES ('2', 'admin', '123456', null, null, null, '1231', '123', '1471657312895.png');
INSERT INTO `landlord` VALUES ('3', 'admin', '123456', null, null, null, '123456', '123456', null);
INSERT INTO `landlord` VALUES ('4', 'wjq', '123456', null, null, null, '123456', '123456', null);
INSERT INTO `landlord` VALUES ('5', '123', '123456', null, null, null, '1212', '212', null);
INSERT INTO `landlord` VALUES ('6', '1', '1', null, null, null, '1', '1', null);

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mName` varchar(20) DEFAULT NULL,
  `mPassword` varchar(20) DEFAULT NULL,
  `permissions` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理员信息';

-- ----------------------------
-- Records of manager
-- ----------------------------

-- ----------------------------
-- Table structure for renter
-- ----------------------------
DROP TABLE IF EXISTS `renter`;
CREATE TABLE `renter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rName` varchar(20) DEFAULT NULL,
  `rPassword` varchar(20) DEFAULT NULL,
  `rSex` varchar(20) DEFAULT NULL,
  `permissions` int(11) DEFAULT NULL,
  `rphoto` varchar(60) DEFAULT NULL,
  `phone` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='租客信息';

-- ----------------------------
-- Records of renter
-- ----------------------------
