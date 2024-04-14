-- Title: Filtering Records with Comparison Operators
-- Description: This script demonstrates the usage of comparison operators in the WHERE clause to filter records from the person table based on the id column.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT column1, column2 FROM table_name WHERE condition;
--
-- Example:
--     -- Select the id and first_name where id is equal to 20
--     SELECT id, first_name FROM person WHERE id = 20;
--     -- Output: Display the id and first_name where id is equal to 20.
--
--     -- Select the id and first_name where id is greater than or equal to 990
--     SELECT id, first_name FROM person WHERE id >= 990;
--     -- Output: Display the id and first_name where id is greater than or equal to 990.
--
--     -- Select the id and first_name where id is less than or equal to 10
--     SELECT id, first_name FROM person WHERE id <= 10;
--     -- Output: Display the id and first_name where id is less than or equal to 10.
--
--     -- Select the id and first_name where id is not equal to 2
--     SELECT id, first_name FROM person WHERE id <> 2;
--     -- Output: Display the id and first_name where id is not equal to 2.
-- Select the id and first_name where id is equal to 20
SELECT
    id,
    first_name
FROM
    person
WHERE
    id = 20;

-- Select the id and first_name where id is greater than or equal to 990
SELECT
    id,
    first_name
FROM
    person
WHERE
    id >= 990;

-- Select the id and first_name where id is less than or equal to 10
SELECT
    id,
    first_name
FROM
    person
WHERE
    id <= 10;

-- Select the id and first_name where id is not equal to 2
SELECT
    id,
    first_name
FROM
    person
WHERE
    id <> 2;