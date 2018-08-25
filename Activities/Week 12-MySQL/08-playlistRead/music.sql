CREATE DATABASE playlist_DB;

USE playlist_DB;

CREATE TABLE playlist
(
  id INT NOT NULL
  AUTO_INCREMENT,
  artist VARCHAR
  (45) NULL,
  song VARCHAR
  (45) NULL,
  genre VARCHAR
  (45) NULL,  
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (artist, song, genre)
  VALUES
    ("adele", "hello", "pop");

  INSERT INTO products
    (artist, song, genre)
  VALUES
    ("illScarlet", "riot", "alt rock");

  INSERT INTO products
    (artist, song, genre)
  VALUES
    ("linking park", "my december", "rock");
