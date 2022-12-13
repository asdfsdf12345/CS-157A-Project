-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: cs157a
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `exercises_in_history`
--

DROP TABLE IF EXISTS `exercises_in_history`;
/*!50001 DROP VIEW IF EXISTS `exercises_in_history`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `exercises_in_history` AS SELECT 
 1 AS `historyid`,
 1 AS `exercise`,
 1 AS `time`,
 1 AS `date`,
 1 AS `excerciseID`,
 1 AS `name`,
 1 AS `caloricUsage`,
 1 AS `addedBy`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!50001 DROP VIEW IF EXISTS `ingredients`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `ingredients` AS SELECT 
 1 AS `itemID`,
 1 AS `foodName`,
 1 AS `calorieVal`,
 1 AS `carbohydrates`,
 1 AS `protein`,
 1 AS `sugar`,
 1 AS `fiber`,
 1 AS `addedBy`,
 1 AS `sodium`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `all_exercises`
--

DROP TABLE IF EXISTS `all_exercises`;
/*!50001 DROP VIEW IF EXISTS `all_exercises`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `all_exercises` AS SELECT 
 1 AS `excerciseID`,
 1 AS `name`,
 1 AS `caloricUsage`,
 1 AS `userID`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `exercises_in_history`
--

/*!50001 DROP VIEW IF EXISTS `exercises_in_history`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `exercises_in_history` AS select `history`.`historyid` AS `historyid`,`history`.`exercise` AS `exercise`,`history`.`time` AS `time`,`history`.`date` AS `date`,`exercises`.`excerciseID` AS `excerciseID`,`exercises`.`name` AS `name`,`exercises`.`caloricUsage` AS `caloricUsage`,`exercises`.`addedBy` AS `addedBy` from (`history` join `exercises` on((`history`.`exercise` = `exercises`.`name`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ingredients`
--

/*!50001 DROP VIEW IF EXISTS `ingredients`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ingredients` AS select `food_items`.`itemID` AS `itemID`,`food_items`.`foodName` AS `foodName`,`food_items`.`calorieVal` AS `calorieVal`,`food_items`.`carbohydrates` AS `carbohydrates`,`food_items`.`protein` AS `protein`,`food_items`.`sugar` AS `sugar`,`food_items`.`fiber` AS `fiber`,`food_items`.`addedBy` AS `addedBy`,`food_items`.`sodium` AS `sodium` from (`user` join `food_items` on((`food_items`.`addedBy` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `all_exercises`
--

/*!50001 DROP VIEW IF EXISTS `all_exercises`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `all_exercises` AS select `exercises`.`excerciseID` AS `excerciseID`,`exercises`.`name` AS `name`,`exercises`.`caloricUsage` AS `caloricUsage`,`user`.`userID` AS `userID` from (`exercises` join `user` on((`exercises`.`addedBy` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 12:36:13
