-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2022 at 06:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

USE car_list;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `addcar`
--

CREATE TABLE `addcar` (
  `car_id` int,
  `car_model` varchar(20) NOT NULL,
  `car_year` year(4) NOT NULL,
  `car_make` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `phonenumber` int(10) NOT NULL,
  `price` varchar(5000) NOT NULL,
  `img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addcar`
--

INSERT INTO `addcar` (`car_id`,`car_model`, `car_year`, `car_make`, `username`, `phonenumber`, `price`, `img`) VALUES
(1,'asdf', 0000, 'asdf', 'asdf', 123123, 'sdaf@as.com', '../images/car_A/1.jpg'),
(2,'asdf', 0000, 'asdf', 'asdf', 123123, 'sdaf@as.com', '../images/car_B/1.jpg'),
(3,'asdf', 0000, 'asdf', 'asdf', 123123, 'sdaf@as.com', '../images/car_C/1.jpg'),
(4,'asdf', 2021, 'abc', 'efdf', 2124809100, 'aa@gmail.com', '../images/car_D/1.jpg'),
(5,'bmw', 2011, 'sadfasdf', 'nidhi', 2124809100, 'ddd@gmail.com', '../images/bmw_2011/9.jpg'),
(6,'toyota', 2020, 'cvbv', 'fsdgsh', 123123, 'abc@gmail.com', '../images/toyota_2020/8.jpg'),
(7,'toyota', 2011, 'efg', 'asdfasdf', 1234567820, '5000', '../images/toyota_2011/6.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
