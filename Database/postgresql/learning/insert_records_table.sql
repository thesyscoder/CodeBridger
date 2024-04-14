-- Title: Insert Records into PostgreSQL Table
-- Description: This script inserts a new record into the person table and then displays all records in the table.
-- Author: thesyscoder
--
-- Syntax:
--     INSERT INTO table_name (column1, column2, ...)
--     VALUES (value1, value2, ...);
--
-- Example:
--     INSERT INTO person (first_name, last_name, gender, date_of_birth)
--     VALUES ('Jason', 'Jones', 'Male', DATE '1988-02-19');
--     -- Output: One record inserted into the person table.
--
--     -- Show table data after insertion
--     SELECT * FROM person;
--     -- Output: Display all records in the person table, including the newly inserted record.
-- Insert a record into the person table
INSERT INTO
    person (first_name, last_name, gender, date_of_birth)
VALUES
    ('Jason', 'Jones', 'Male', DATE '1988-02-19');

-- Show table data after insertion
SELECT
    *
FROM
    person;