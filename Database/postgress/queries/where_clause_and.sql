-- Title: Filtering Records with WHERE Clause and AND
-- Description: This script demonstrates the usage of the WHERE clause with AND and OR conditions to filter records from the person table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name WHERE condition;
--
-- Example:
--     -- Select all records of females
--     SELECT * FROM person WHERE gender = 'Female';
--     -- Output: Display all records of females from the person table.
--
--     -- Select the first names of males
--     SELECT first_name FROM person WHERE gender = 'Male';
--     -- Output: Display the first names of males from the person table.
--
--     -- Select the first names of females and males with id less than 10
--     SELECT first_name FROM person WHERE (gender = 'Female' OR gender = 'Male') AND id < 10;
--     -- Output: Display the first names of females and males with id less than 10 from the person table.
-- Select all records of females
SELECT
    *
FROM
    person
WHERE
    gender = 'Female';

-- Select the first names of males
SELECT
    first_name
FROM
    person
WHERE
    gender = 'Male';

-- Select the first names of females and males with id less than 10
SELECT
    first_name
FROM
    person
WHERE
    (
        gender = 'Female'
        OR gender = 'Male'
    )
    AND id < 10;