-- Title: Select Records from PostgreSQL Table
-- Description: This script demonstrates different ways to select records from the person table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name;
--     SELECT column_name FROM table_name;
--     SELECT column1, column2, ... FROM table_name;
--
-- Example:
--     -- SELECT all columns records.
--     SELECT * FROM person;
--     -- Output: Display all records from the person table.
--
--     -- SELECT specific single columns.
--     SELECT first_name FROM person;
--     -- Output: Display only the first_name column from the person table.
--
--     -- SELECT multiple columns.
--     SELECT first_name, date_of_birth FROM person;
--     -- Output: Display first_name and date_of_birth columns from the person table.
-- SELECT all columns records.
SELECT
    *
FROM
    person;

-- SELECT specific single columns.
SELECT
    first_name
FROM
    person;

-- SELECT multiple columns.
SELECT
    first_name,
    date_of_birth
FROM
    person;