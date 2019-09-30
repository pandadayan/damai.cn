-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-30 03:51:41
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `damai`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `sid` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `dizhi` text NOT NULL,
  `price` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`sid`, `title`, `url`, `dizhi`, `price`, `date`) VALUES
(1, '11.11光棍节“唱给单身汪”主题演唱会', '../img/ych_2.jpg', '酒球会(9-Club)', 180, '2019-11-11'),
(2, '2019万圣节重磅活动-魔女惊魂主题惊悚派对', '../img/ych_3.jpg', '酒球会(9-Club)', 128, '2019-10-31'),
(3, 'X-LIVE全力呈现：2019“我最闪耀”3unshine巡演杭州站', '../img/ych_4.jpg', 'MAOLivehouse杭州', 230, '2019-10-05'),
(4, '【秀动呈献】赵照 “观照” 2019新专辑巡演 杭州站', '../img/ych_5.jpg', 'MAOLivehouse杭州', 120, '2020-01-20'),
(5, '山形瑞秋 Rachael Yamagata 2019巡演 杭州站', '../img/ych_6.jpg', 'MAOLivehouse杭州', 380, '2019-11-12'),
(6, '陈绮贞20周年演唱会【漫漫长夜cheer20】- 杭州站', '../img/ych_7.jpg', '黄龙体育中心(体育馆)', 399, '2019-12-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`sid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
