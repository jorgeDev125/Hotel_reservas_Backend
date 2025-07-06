-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2025 a las 11:03:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `cedula` int(30) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fecha_registro` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `cedula`, `nombre`, `apellido`, `email`, `telefono`, `fecha_registro`) VALUES
(48, 55555, 'Jorge', 'Vargas', 'Jorge@gmail.com', '31132284864', '2025-07-01'),
(49, 666565, 'Sandra', 'Mora', 'correo@correo.com', '1234567', '2025-07-01'),
(50, 225855, 'Pedro', 'Fernández', 'correo@correo.com', '325565898', '2025-07-01'),
(51, 31151359, 'Martha', 'Monedero', 'martha@correo.com', '3103498432', '2025-07-01'),
(52, 3569887, 'Jorge', 'Barón', 'entusiasmo@gmail.com', '35987854', '2025-07-01'),
(53, 3432432, 'Radamel', 'Falcao', 'rada@correo.com', '3325565', '2025-07-01'),
(54, 44433222, 'Monica', 'Moreno', 'correo@correo.com', '33335535', '2025-07-01'),
(55, 44423322, 'Cristiano', 'Ronaldo', 'elbicho@correo.com', '3102589987', '2025-07-01'),
(56, 2147483, 'Gabriel', 'García', 'marquez@correo.com', '34534645654', '2025-07-01'),
(57, 44445565, 'Edgar', 'Vivar', 'bodoque@gmail.com', '2252525', '2025-07-01'),
(58, 789456, 'Carlos', 'Villagran', 'kiko@hotmail.com', '45585447', '2025-07-01'),
(60, 2255613, 'Oscar', 'Vargas', NULL, '3115554845', '2025-07-01'),
(61, 555555, 'Maria Antonieta', 'de las Nieves', NULL, NULL, '2025-07-01'),
(62, 1254887444, 'Angelines', 'Fernández', 'bruja71@gmail.com', '3113255555', '2025-07-02'),
(63, 555898, 'Zoraida', 'Vallejo', NULL, NULL, '2025-07-02'),
(64, 1115654987, 'Angelina', 'Jolie', 'tombrayder@gmail.com', '3113255555', '2025-07-02'),
(65, 1115654989, 'Jorge', 'Giraldo', NULL, NULL, '2025-07-02'),
(66, 4444, 'Lorena', 'Hernández', NULL, '313416413', '2025-07-02'),
(67, 1112365, 'Carla', 'Giraldo', 'Correo@correo.com', '3113255555', '2025-07-02'),
(68, 1113632552, 'Andrés', 'Monedero', 'andresm@gmail.com', '3016556468', '2025-07-04'),
(70, 123456, 'Carlos', 'Teves', 'apache@hotmial.com', '656666556', '2025-07-04'),
(71, 654321, 'Iñigo', 'Perlaza', NULL, '357894565', '2025-07-04'),
(73, 2147483647, 'Luis', 'Diaz', NULL, NULL, '2025-07-04'),
(74, 23, 'Lorena Hernández', 'Giraldo', NULL, NULL, '2025-07-04'),
(75, 12233, 'Jorge', 'Giraldo', NULL, NULL, '2025-07-04'),
(80, 987654321, 'Roberto', 'Carlos', 'roberto@correo.com', '555698878', '2025-07-04'),
(82, 12343234, 'Sandra', 'Fernández', NULL, NULL, '2025-07-04'),
(87, 121212, 'Pedro', 'Giraldo', NULL, NULL, '2025-07-04'),
(96, 444444, 'Mery', 'Moon', NULL, NULL, '2025-07-05'),
(117, 4443342, 'Pedro', 'Infante', NULL, '33335535', '2025-07-05'),
(118, 877777, 'Lorena Hernández', 'Vargas', NULL, NULL, '2025-07-05'),
(121, 159753, 'Camilo', 'Sanchez', NULL, '31155564848', '2025-07-05'),
(122, 15645, 'Tego', 'Calderón', 'elfeo@gmail.com', NULL, '2025-07-05'),
(123, 1113000111, 'Jeffrey', 'Morales', 'jeffrey@correo.com', '2714564', '2025-07-05'),
(124, 987654, 'Daniel', 'Valencia', NULL, NULL, '2025-07-05'),
(125, 6665659, 'Jessica', 'Libreros', 'lachikis@gmail.com', NULL, '2025-07-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_habitacion`
--

CREATE TABLE `estado_habitacion` (
  `id` int(11) NOT NULL,
  `estado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_habitacion`
--

INSERT INTO `estado_habitacion` (`id`, `estado`) VALUES
(1, 'Disponible'),
(2, 'Ocupada'),
(3, 'No Disponible'),
(4, 'En Limpieza'),
(5, 'Reservada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_reserva`
--

CREATE TABLE `estado_reserva` (
  `id` int(11) NOT NULL,
  `estado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_reserva`
--

INSERT INTO `estado_reserva` (`id`, `estado`) VALUES
(1, 'Pendiente'),
(2, 'Activa'),
(3, 'Completada'),
(4, 'Cancelada');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_available_rooms`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_available_rooms` (
`habitacion_id` int(11)
,`numero` int(11)
,`categoria` varchar(100)
,`precio` decimal(10,0)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_reservations`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_reservations` (
`id_reserva` int(11)
,`numero_noches` int(11)
,`precio_reserva` decimal(10,0)
,`fecha_registro` datetime
,`numero_habitacion` int(11)
,`categoria` varchar(100)
,`precio_habitacion` decimal(10,0)
,`estado_habitacion` varchar(100)
,`estado_reserva` varchar(100)
,`nombre_cliente` varchar(255)
,`apellido_cliente` varchar(255)
,`cedula` int(30)
,`telefono_cliente` varchar(20)
,`email_cliente` varchar(255)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_rooms`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_rooms` (
`habitacion_id` int(11)
,`numero` int(11)
,`categoria` varchar(100)
,`precio` decimal(10,0)
,`estado_habitacion` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id` int(11) NOT NULL,
  `numero` int(11) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id`, `numero`, `categoria`, `precio`, `estado_id`) VALUES
(1, 101, 'Sencilla', 60000, 1),
(2, 102, 'Sencilla', 60000, 1),
(3, 103, 'Doble', 80000, 1),
(4, 104, 'Doble', 80000, 4),
(5, 105, 'Sencilla', 60000, 1),
(6, 106, 'Sencilla', 60000, 5),
(7, 107, 'Doble', 80000, 3),
(8, 108, 'Doble', 80000, 1),
(9, 109, 'Sencilla', 60000, 1),
(10, 110, 'Sencilla', 60000, 4),
(11, 201, 'Sencilla', 60000, 1),
(12, 202, 'Sencilla', 60000, 1),
(13, 203, 'Doble', 80000, 4),
(14, 204, 'Doble', 80000, 4),
(15, 205, 'Sencilla', 60000, 1),
(16, 206, 'Sencilla', 60000, 1),
(17, 207, 'Doble', 80000, 1),
(18, 208, 'Doble', 80000, 1),
(19, 209, 'Sencilla', 60000, 1),
(20, 210, 'Sencilla', 60000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` int(11) NOT NULL,
  `habitacion_id` int(11) NOT NULL,
  `numero_noches` int(11) NOT NULL,
  `precio_reserva` decimal(10,0) NOT NULL,
  `estado_id` int(11) NOT NULL DEFAULT 1,
  `cliente_id` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `habitacion_id`, `numero_noches`, `precio_reserva`, `estado_id`, `cliente_id`, `fecha_registro`) VALUES
(1, 8, 3, 240000, 3, 68, '2025-07-05 12:03:05'),
(2, 12, 2, 120000, 4, 123, '2025-07-05 12:06:04'),
(3, 3, 3, 240000, 3, 121, '2025-07-05 18:47:54'),
(4, 2, 2, 120000, 3, 124, '2025-07-05 18:48:59'),
(5, 13, 4, 320000, 3, 48, '2025-07-05 18:51:15'),
(6, 7, 2, 160000, 3, 124, '2025-07-05 19:11:19'),
(7, 1, 1, 60000, 3, 48, '2025-07-05 19:39:14'),
(8, 14, 3, 240000, 4, 68, '2025-07-05 20:49:19'),
(9, 12, 3, 180000, 4, 125, '2025-07-05 20:53:54'),
(10, 4, 1, 80000, 3, 48, '2025-07-05 22:33:00'),
(11, 6, 3, 180000, 1, 68, '2025-07-05 23:36:22'),
(12, 10, 4, 240000, 3, 121, '2025-07-06 02:59:07');

--
-- Disparadores `reserva`
--
DELIMITER $$
CREATE TRIGGER `actualizar_estado_habitacion` AFTER UPDATE ON `reserva` FOR EACH ROW BEGIN
  -- Cuando la reserva pasa de Pendiente a Activa: Reservada -> Ocupada
  IF OLD.estado_id = 1 AND NEW.estado_id = 2 THEN
    UPDATE habitacion SET estado_id = 2 WHERE id = NEW.habitacion_id;
  END IF;

  -- Cuando la reserva pasa de Activa a Completada: Ocupada -> En Limpieza
  IF OLD.estado_id = 2 AND NEW.estado_id = 3 THEN
    UPDATE habitacion SET estado_id = 4 WHERE id = NEW.habitacion_id;
  END IF;

  -- Cuando la reserva pasa a Cancelada desde cualquier estado: -> En Limpieza
  IF NEW.estado_id = 4 AND OLD.estado_id <> 4 THEN
    UPDATE habitacion SET estado_id = 4 WHERE id = NEW.habitacion_id;
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `calcular_precio_reserva` BEFORE INSERT ON `reserva` FOR EACH ROW BEGIN
  DECLARE precio_habitacion DECIMAL(10,0);
  -- Obtiene el precio de la habitación seleccionada
  SELECT precio INTO precio_habitacion FROM habitacion WHERE id = NEW.habitacion_id;
  -- Calcula el precio total y lo asigna al campo precio de la reserva
  SET NEW.precio_reserva = precio_habitacion * NEW.numero_noches;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `cambiar_estado_habitacion_reservada` AFTER INSERT ON `reserva` FOR EACH ROW BEGIN
  UPDATE habitacion
  SET estado_id = (SELECT id FROM estado_habitacion WHERE estado = 'Reservada')
  WHERE id = NEW.habitacion_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura para la vista `get_available_rooms`
--
DROP TABLE IF EXISTS `get_available_rooms`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_available_rooms`  AS SELECT `h`.`id` AS `habitacion_id`, `h`.`numero` AS `numero`, `h`.`categoria` AS `categoria`, `h`.`precio` AS `precio` FROM (`habitacion` `h` join `estado_habitacion` `eh` on(`h`.`estado_id` = `eh`.`id`)) WHERE `eh`.`estado` = 'Disponible' ;

-- --------------------------------------------------------

--
-- Estructura para la vista `get_reservations`
--
DROP TABLE IF EXISTS `get_reservations`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_reservations`  AS SELECT `r`.`id` AS `id_reserva`, `r`.`numero_noches` AS `numero_noches`, `r`.`precio_reserva` AS `precio_reserva`, `r`.`fecha_registro` AS `fecha_registro`, `h`.`numero` AS `numero_habitacion`, `h`.`categoria` AS `categoria`, `h`.`precio` AS `precio_habitacion`, `eh`.`estado` AS `estado_habitacion`, `er`.`estado` AS `estado_reserva`, `c`.`nombre` AS `nombre_cliente`, `c`.`apellido` AS `apellido_cliente`, `c`.`cedula` AS `cedula`, `c`.`telefono` AS `telefono_cliente`, `c`.`email` AS `email_cliente` FROM ((((`reserva` `r` join `habitacion` `h` on(`r`.`habitacion_id` = `h`.`id`)) join `estado_habitacion` `eh` on(`h`.`estado_id` = `eh`.`id`)) join `estado_reserva` `er` on(`r`.`estado_id` = `er`.`id`)) join `clientes` `c` on(`r`.`cliente_id` = `c`.`id`)) ORDER BY `r`.`fecha_registro` DESC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `get_rooms`
--
DROP TABLE IF EXISTS `get_rooms`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_rooms`  AS SELECT `h`.`id` AS `habitacion_id`, `h`.`numero` AS `numero`, `h`.`categoria` AS `categoria`, `h`.`precio` AS `precio`, `eh`.`estado` AS `estado_habitacion` FROM (`habitacion` `h` join `estado_habitacion` `eh` on(`h`.`estado_id` = `eh`.`id`)) ORDER BY field(`eh`.`estado`,'Disponible','Reservada','Ocupada','En Limpieza','No Disponible') ASC ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cedula` (`cedula`);

--
-- Indices de la tabla `estado_habitacion`
--
ALTER TABLE `estado_habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_reserva`
--
ALTER TABLE `estado_reserva`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado_id` (`estado_id`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `habitacion_id` (`habitacion_id`),
  ADD KEY `estado_id` (`estado_id`),
  ADD KEY `cliente_id` (`cliente_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT de la tabla `estado_habitacion`
--
ALTER TABLE `estado_habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `estado_reserva`
--
ALTER TABLE `estado_reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD CONSTRAINT `habitacion_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estado_habitacion` (`id`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitacion` (`id`),
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`estado_id`) REFERENCES `estado_reserva` (`id`),
  ADD CONSTRAINT `reserva_ibfk_3` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
