-- Title: Create PostgreSQL Table
-- Description: This script creates a new PostgreSQL table named person to store information about individuals.
-- Author: thesyscoder
--
-- Syntax:
--     CREATE TABLE table_name (
--         column1_name data_type [constraints],
--         column2_name data_type [constraints],
--         ...
--     );
--
-- Example:
--     CREATE TABLE IF NOT EXISTS person (
--         id BIGSERIAL NOT NULL PRIMARY KEY,
--         first_name VARCHAR(50) NOT NULL,
--         last_name VARCHAR(50) NOT NULL,
--         email VARCHAR(200) NOT NULL,
--         gender VARCHAR(6) NOT NULL,
--         date_of_birth DATE NOT NULL
--     );
--     -- Output: The table 'person' is created successfully.
CREATE TABLE IF NOT EXISTS person (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    date_of_birth DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS cars (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    price VARCHAR(50) NOT NULL
);