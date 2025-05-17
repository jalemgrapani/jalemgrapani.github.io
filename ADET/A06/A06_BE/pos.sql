-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 08:31 AM
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
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(4) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(1, 'Donuts'),
(2, 'J.Coffee'),
(3, 'Chocolate (Beverages)'),
(4, 'Tea'),
(5, 'Frappe'),
(6, 'J.Club (Donut Sandwich)'),
(7, 'J.Cool (Frozen Yogurt)');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(40) NOT NULL,
  `isAvailable` varchar(6) NOT NULL DEFAULT 'true',
  `price` int(4) NOT NULL,
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `isAvailable`, `price`, `image`) VALUES
(1, 1, 'Alcapone', 'true', 45, 'donuts/alcapone'),
(2, 1, 'Avocado', 'true', 45, 'donuts/avocado'),
(3, 1, 'Berry Spears', 'true', 45, 'donuts/berry-spears'),
(4, 1, 'Black Jack', 'true', 45, 'donuts/black-jack'),
(5, 1, 'Caviar Strawberry', 'true', 45, 'donuts/caviar-strawberry'),
(6, 1, 'Cheese Cakelicious', 'true', 45, 'donuts/cheese-cakelicious'),
(7, 1, 'Choco Nutzy', 'true', 45, 'donuts/choconutzy'),
(8, 1, 'Chocolate Rainbow', 'true', 45, 'donuts/chocolate-rainbow'),
(9, 1, 'CocoLoco', 'true', 45, 'donuts/coco-loco'),
(10, 1, 'Copa Banana', 'true', 45, 'donuts/copa-banana'),
(11, 1, 'Don Mochino', 'true', 45, 'donuts/don-mochino'),
(12, 1, 'Forest Glam', 'true', 45, 'donuts/forest-glam'),
(13, 1, 'Glazzy', 'true', 45, 'donuts/glazzy'),
(14, 1, 'Green Tease', 'true', 45, 'donuts/green-tease'),
(15, 1, 'Heaven Berry', 'true', 45, 'donuts/heaven-berry'),
(16, 1, 'J.Pops', 'true', 45, 'donuts/jpops'),
(17, 1, 'Jacky Chunk', 'true', 45, 'donuts/jacky-chunk'),
(18, 1, 'Jcoccino', 'true', 45, 'donuts/jcoccino'),
(19, 1, 'Matcho Matcho', 'true', 45, 'donuts/matcho-matcho'),
(20, 1, 'Meisisipi', 'true', 45, 'donuts/meisissippi'),
(21, 1, 'Mr Green Tea', 'true', 45, 'donuts/mr-green-tea'),
(22, 1, 'Oreology', 'true', 45, 'donuts/oreology'),
(23, 1, 'Snow White', 'true', 45, 'donuts/snow-white'),
(24, 1, 'Sugar Ice', 'true', 45, 'donuts/sugar-ice'),
(25, 1, 'Tiramisu', 'true', 45, 'donuts/tiramisu'),
(26, 1, 'White Desert', 'true', 45, 'donuts/white-desert'),
(27, 1, 'Why Nut', 'true', 45, 'donuts/why-nut'),
(29, 2, 'Iced Jcoccino', 'true', 135, 'jcoffee/ice-jcoccino'),
(30, 2, 'Hot Latte', 'true', 130, 'jcoffee/hot-latte'),
(31, 2, 'Hot Americano', 'true', 110, 'jcoffee/hot-americano'),
(32, 2, 'Hot Caramel Jcoccino', 'true', 120, 'jcoffee/hot-caramel-jcoccino'),
(33, 2, 'Iced Latte', 'true', 130, 'jcoffee/ice-latte'),
(34, 2, 'Iced Hazelnut Latte', 'true', 140, 'jcoffee/hazelnut-latte'),
(35, 2, 'Hot Mocha Espresso', 'true', 130, 'jcoffee/mocha-espresso-frappe'),
(36, 2, 'Iced Caramel Jcoccino', 'true', 140, 'jcoffee/ice-caramel-jcoccino'),
(37, 2, 'Iced Americano', 'true', 110, 'jcoffee/ice-americano'),
(38, 2, 'Iced Mocha Espresso Frappe', 'true', 140, 'jcoffee/ice-mocha-espresso-frappe'),
(39, 2, 'Hot Jcoccino', 'true', 130, 'jcoffee/hot-jcoccino'),
(40, 2, 'Hot Hazelnut Latte', 'true', 135, 'jcoffee/hot-hazelnut-latte'),
(41, 3, 'Hot Chocolate', 'true', 120, 'chocolate/hot-chocolate'),
(42, 3, 'Iced Chocolate', 'true', 130, 'chocolate/iced-chocolate'),
(43, 4, 'Hot Green Tea Latte', 'true', 110, 'tea/hot-green-tea-latte'),
(44, 4, 'Hot Tea', 'true', 99, 'tea/hot-tea'),
(45, 4, 'Iced Green Tea Latte', 'true', 115, 'tea/ice-green-tea-latte'),
(46, 4, 'Iced Lemon Tea', 'true', 95, 'tea/iced-lemon-tea'),
(47, 4, 'Iced Thai Tea', 'true', 105, 'tea/iced-thai-tea'),
(48, 5, 'Avocado Frappe', 'true', 150, 'frappe/avocado-frappe'),
(49, 5, 'Caramel Frappe', 'true', 150, 'frappe/caramel-frappe'),
(50, 5, 'Choco Forest Frappe', 'true', 150, 'frappe/choco-forest-frappe'),
(51, 5, 'Oreo Cheesecake Frappe', 'true', 150, 'frappe/oreo-cheesecake-frappe'),
(52, 5, 'Blueberry Frappe', 'true', 150, 'frappe/blueberry-frappe'),
(53, 5, 'Strawberry Frappe', 'true', 150, 'frappe/strawberry-frappe'),
(54, 6, 'Cheezy Rich', 'true', 150, 'jclub/cheezy-rich'),
(55, 6, 'Katsu', 'true', 140, 'jclub/katsu'),
(56, 6, 'Red Velvet', 'true', 145, 'jclub/red-velvet'),
(57, 6, 'Sausage', 'true', 155, 'jclub/sausage'),
(58, 7, 'J.Cool Single', 'true', 95, 'jcool/jcool-single'),
(59, 7, 'J.Cool Couple', 'true', 140, 'jcool/jcool-couple'),
(60, 7, 'J.Cool Sharing', 'true', 180, 'jcool/jcool-sharing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
