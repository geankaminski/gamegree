DROP DATABASE IF EXISTS game_trivia;   
CREATE DATABASE IF NOT EXISTS game_trivia;   
USE game_trivia; 

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS question;

CREATE TABLE IF NOT EXISTS user 
  ( 
     id         INT PRIMARY KEY auto_increment, 
     username   VARCHAR(25) UNIQUE NOT NULL, 
     password   CHAR(60) NOT NULL,
     points     INT (11) DEFAULT 0,
     level      INT (11) DEFAULT 1,
     first_name VARCHAR(50) NOT NULL, 
     last_name  VARCHAR(50) NOT NULL, 
     email      VARCHAR(100) UNIQUE NOT NULL, 
     role       ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser', 
     age        INT(11) DEFAULT 0 
  ); 

CREATE TABLE IF NOT EXISTS question 
  ( 
     id               INT PRIMARY KEY auto_increment,
     level            INT (11) DEFAULT 1,
     question         VARCHAR(250) NOT NULL,
     correct_answer   VARCHAR(80) NOT NULL,
     alternative1     VARCHAR(80) NOT NULL, 
     alternative2     VARCHAR(80) NOT NULL, 
     alternative3     VARCHAR(80) NOT NULL 
  ); 

INSERT INTO user (username, password, first_name, last_name, points, email, role, age) VALUES ('admin', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'admin', 'admin', 0, 'admin@gmail.com', 'Admin', 0);
INSERT INTO user (username, password, first_name, last_name, points, email) VALUES ('pernalonga', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'pernalonga', 'gamer', 120, 'pernalonga@gmail.com');
INSERT INTO user (username, password, first_name, last_name, points, email) VALUES ('patolino', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'patolino', 'gamer', 80, 'patolino@gmail.com');
INSERT INTO user (username, password, first_name, last_name, points, email) VALUES ('gaguinho', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'gaguinho', 'gamer', 30, 'gaguinho@gmail.com');
INSERT INTO user (username, password, first_name, last_name, points, email) VALUES ('john', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'john', 'doe', 343, 'john@gmail.com');
INSERT INTO user (username, password, first_name, last_name, points, email) VALUES ('taz', '$2y$12$4KZL2UqQWH3oUoFo8.NruuARIacRrXelMIuF7qrm6m5EMPX9w/Ovi ', 'taz', 'gamer', 343, 'taz@gmail.com');

INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('What name did Mario, from Super Mario Brothers, originally have?', 'Ossan', 'Jumpman', 'Video', 'Mario');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('When Halo 3: ODST was unveiled in 2008, it had a different title. What was the game formally called?', 'Halo 3: Recon', 'Halo 3: Helljumpers', 'Phantom', 'Soldiers');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('In the game The Sims, how many Simoleons does each family start with?', '20.000', '5.000', '8', '3');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('Where was the Sniper character in Team Fortress 2 born?', 'New Zealand', 'Brazil', 'Argentina', 'Australia');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('Which of these weapons is NOT available to the Terrorist team in the game, Counter-Strike: Global Offensive?', 'SCAR-20', 'SG 550', 'Gibson SG', 'XM1014');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('Which of these is NOT a team available in the game Pokémon Go?', 'Team Rocket', 'Team Instinct', 'Team Johto', 'Team Onix');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('In which game did the Konami Code make its first appearance?', 'Gradius', 'Contra', 'Castlevania', 'Dance Remix');
INSERT INTO question (question, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('In the Pikmin series, what is the only pikmin type to possess visible ears?', 'Yellow', 'Red', 'White', 'Winged');
INSERT INTO question (question, level, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('In the video game, Half-life, what event started the Half-life universe as we know today?', 2, 'The Resonance Cascade', 'World War 3', 'The Xen Attack', 'The Black Mesa Nuke');
INSERT INTO question (question, level, correct_answer, alternative1, alternative2, alternative3) 
  VALUES ('What is the lowest amount of max health you can have in Team Fortress 2?', 3, '70', '100', '50', '95');