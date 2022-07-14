USE car_list;


CREATE TABLE `cardetails` (
   `car_id` int,
  `carName` varchar(50) NOT NULL,
  `Model` varchar(50) NOT NULL,
  `VIN` varchar(20) NOT NULL,
  `odometer` int(10) NOT NULL,
  `highlights` varchar(50) NOT NULL,
  `primaryDamage` varchar(50) NOT NULL,
  `color` varchar(10) NOT NULL,
  `vehicleType` varchar(20) NOT NULL,
  `fuel` varchar(20) NOT NULL,
  `keys` varchar(5) NOT NULL,
  `price` int,
  `bid_start_time` datetime NOT NULL,
  `image` varchar(500) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cardetails`
--

INSERT INTO `cardetails` (`car_id`,`carName`, `Model`, `VIN`, `odometer`, `highlights`, `primaryDamage`, `color`, `vehicleType`, `fuel`,
 `keys`,`price`,`bid_start_time`, `image`) VALUES
(1,'BMW', '2015 BMW X5 XDRIVE35I', '5UXKR0C5XF0******', 10000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Gray', 'AUTOMOBILE', 'GAS', '1',5000,'2022-06-18 23:55:00', '../images/car_A/1.jpg'),
(2,'BMW', '2015 BMW X5 XDRIVE35I', '5UXKR0C5XF0******', 10000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Gray', 'AUTOMOBILE', 'GAS', '1',5000, '2022-06-18 23:55:00','../images/car_B/1.jpg'),
(3,'BMW', '2015 BMW X5 XDRIVE35I', '5UXKR0C5XF0******', 10000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Gray', 'AUTOMOBILE', 'GAS', '1', 5000,'2022-06-18 23:55:00','../images/car_C/1.jpg'),
(4,'MERCEDES-BENZ', '2019', '5UXKR0C5XF0******', 2000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Red', 'AUTOMOBILE', 'GAS', '2', 5000,'2022-06-18 23:55:00','../images/car_D/1.jpg'),
(5,'BMW', '2015 BMW X5 XDRIVE35I', '5UXKR0C5XF0******', 10000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Gray', 'AUTOMOBILE', 'GAS', '1', 5000,'2022-06-18 23:55:00','../images/bmw_2011/9.jpg'),
(6,'BMW', '2015 BMW X5 XDRIVE35I', '5UXKR0C5XF0******', 10000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Gray', 'AUTOMOBILE', 'GAS', '1', 5000,'2022-06-18 23:55:00','../images/toyota_2020/8.jpg'),
(7,'MERCEDES-BENZ', '2019', '5UXKR0C5XF0******', 2000, 'Enhanced Vehicles ', 'MINOR DENT/SCRATCHES', 'Red', 'AUTOMOBILE', 'GAS', '2', 5000,'2022-06-18 23:55:00','../images/toyota_2011/8.jpg');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
