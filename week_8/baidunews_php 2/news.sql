-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Dec 28, 2016 at 11:27 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, 'ç²¾é€‰', 'sunflower', 'img/sunflw.jpg', '2016-12-26 00:00:00', 'newssrc'),
(2, 'ç²¾é€‰', 'desert', 'img/shl.jpg', '2016-12-03 00:00:00', 'baidu'),
(3, 'ç™¾å®¶', 'succulents', 'img/flw.jpg', '2016-12-13 04:00:00', '111'),
(4, 'ç™¾å®¶', 'haven', 'img/11.jpg', '2016-12-17 15:00:00', '163.com'),
(5, 'æœ¬åœ°', 'island', 'img/island.jpg', '2016-12-27 18:00:00', 'tutu'),
(35, 'æœ¬åœ°', 'france', 'img/france.jpg', '2016-12-15 18:00:00', 'zhihu'),
(36, 'å›¾ç‰‡', 'cherry', 'img/cherry.jpg', '2016-12-23 12:00:00', 'baidu'),
(37, 'å¨±ä¹', 'fun', 'img/fun.jpg', '2016-12-25 12:00:00', 'w3cschool'),
(38, 'ç¤¾ä¼š', 'å’–å•¡', 'img/coffee.jpg', '2016-12-25 00:00:00', 'w3cschool'),
(39, 'ç¤¾ä¼š', 'zoocoffee', 'img/zoocoffee.jpg', '2016-12-04 11:28:29', 'coffeeshop'),
(40, 'å†›äº‹', 'battleplane', 'img/battleplane.jpg', '2016-12-27 05:00:00', 'nipic'),
(42, 'å¥³äºº', 'beauty', 'img/beauty.jpg', '2016-12-31 17:39:00', 'basha'),
(43, 'æžç¬‘', 'funny faces', 'img/funny.jpg', '2016-12-31 00:00:00', '7wenta'),
(44, 'äº’è”ç½‘', 'internet', 'img/internet.jpg', '2016-12-31 00:00:00', 'dreamstime'),
(45, 'æ›´å¤š', 'MORE INFORMATION', 'img/YUTU.jpg', '2016-12-26 00:00:00', 'themusicuniverse'),
(47, 'ç²¾é€‰', 'northeuro', 'img/northeuro.jpg', '2016-12-26 00:00:00', 'sohu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
