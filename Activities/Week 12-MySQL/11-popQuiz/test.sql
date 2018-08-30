DROP DATABASE IF EXISTS test_db;

CREATE DATABASE test_db;

USE test_db;

CREATE TABLE quiz
(
  id interger NOT NULL
  AUTO_INCREMENT,
  name varchar
  (50) NOT NULL,
  SQLRating INTEGER
  (10),
  PRIMARY KEY
  (id)
)

  INSERT into quiz
    (name, SQLRating)
  VALUES
    ('Peter', 1);
  INSERT into quiz
    (name, SQLRating)
  VALUES
    ('Mary', 3);
  INSERT into quiz
    (name, SQLRating)
  VALUES
    ('Tom', 5);
  INSERT into quiz
    (name, SQLRating)
  VALUES
    ('James', 7);

  SELECT *
  FROM test_db;