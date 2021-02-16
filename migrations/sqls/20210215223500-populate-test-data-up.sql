/* populate users table */
INSERT INTO users (firstName, lastName, password)
  VALUES ('Testy', 'McTester', 'securepass123');

INSERT INTO users (firstName, lastName, password)
  VALUES ('Sam', 'Sung', 'evenMoreSecurePass321');

/* populate categories table */
INSERT INTO categories (category_id, name)
  VALUES (1, 'useful');

INSERT INTO categories (category_id, name)
  VALUES (2, 'useless');

/* populate products table */
INSERT INTO products (name, price, category_id)
  VALUES ('dvd rewinder', 17.99, 2);

INSERT INTO products (name, price, category_id)
  VALUES ('instant water powder', 1.99, 2);

INSERT INTO products (name, price, category_id)
  VALUES ('best of Youtube book', 24.99, 2);

INSERT INTO products (name, price, category_id)
  VALUES ('pet rock', 0.99, 1);

/* populate orders table */
INSERT INTO orders (product_id, quantity, user_id, status)
  VALUES (currval('products_id_seq'), 1, currval('users_id_seq'), 'complete');

INSERT INTO orders (product_id, quantity, user_id, status)
  VALUES (currval('products_id_seq'), 2, currval('users_id_seq'), 'in transit');