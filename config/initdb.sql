DROP DATABASE IF EXISTS inventorydb;

CREATE DATABASE inventorydb;

\c inventorydb;

CREATE TABLE inventory (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  category varchar,
  quantity int,
  price float
);

INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Canned Tomato','Canned food',78, 13.90);
