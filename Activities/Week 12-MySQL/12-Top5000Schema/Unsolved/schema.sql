CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000
(
  position int null
  auto_increment,
  artist varchar
  (100) null,
  song varchar
  (100) null,
  year int null,
  popularityWorld decimal null,
  popularityUSA decimal null,
  popularityUK decimal null,
  popularityEurope decimal null,
  popularityRest decimal null,
  PRIMARY KEY
  (position)

);



