-- to create a new database
CREATE DATABASE IF NOT EXISTS nodejs2;

-- to use database
use nodejs2;

-- creating a new table
CREATE TABLE IF NOT EXISTS customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe customer;

-- TO CREATE USER
CREATE USER IF NOT EXISTS
  'paystand'@'%'
  IDENTIFIED BY 'paystand';

-- to grant permission
GRANT ALL PRIVILEGES ON nodejs2.* TO 'paystand'@'%';