-- Create table
-- syntax:
-- CREATE TABLE table_name(Column name + data type + constraints if any)
CREATE TABLE IF NOT EXISTS person(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    date_of_birth DATE NOT NULL
)