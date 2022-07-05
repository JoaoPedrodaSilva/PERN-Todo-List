-- create database
CREATE DATABASE todo;

-- create todo table
CREATE TABLE todo(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(255) NOT NULL
);

-- create individual todo
INSERT INTO todo(description) VALUES($1) RETURNING *;

-- get all todos
SELECT * FROM todo;

-- get individual todo
SELECT * FROM todo WHERE id = $1;

-- update individual todo
UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;

-- delete individual todo
DELETE FROM todo WHERE id = $1