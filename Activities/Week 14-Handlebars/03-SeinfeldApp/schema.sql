-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors
(
  id int
  AUTO_INCREMENT,
  name varchar
  (30) NOT NULL,
  coolness_points int NOT NULL, 
  attitude varchar
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);

  -- Inserted a set of records into the table
  INSERT INTO actors
    (name, coolness_points, attitude)
  VALUES
    ("Newman", 2, "grumpy");
  INSERT INTO actors
    (name, coolness_points, attitude)
  VALUES
    ("Kramer", 8, "esctric");
  INSERT INTO actors
    (name, coolness_points, attitude)
  VALUES
    ("Elaine", 4, "moody");
  INSERT INTO actors
    (name, coolness_points, attitude)
  VALUES
    ("Soup Guy", 10, "angry");
