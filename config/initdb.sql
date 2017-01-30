/*psql -f config/initdb.sql -U postgres*/
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

INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Soy bean','Drinks',11, 4.8);

INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Magnum Ice-cream','Dessert',20, 2.60);
  
  INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Kimchi','Canned food', 536, 14.50);

  INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Bottle Ketchup','Spices',91, 8.90);
  INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Bottled Pepper','Spices', 251, 22.90);
  INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Belacan','Spices', 85, 18.30);

INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Mr Potato Fried Chips','Snacks',332, 2.90);

INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Double Decker Crackers','Snacks', 872, 0.45);
INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Rice Cake','Dry food',218, 2.62);
    INSERT INTO inventory (name,category,quantity,price)
  VALUES ('Ramen','Dry Food',419, 3.78);