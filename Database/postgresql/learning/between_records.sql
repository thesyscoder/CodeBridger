-- Title: Filtering Records with BETWEEN Operator
-- Description: This script demonstrates the usage of the BETWEEN operator to filter records from the person table based on a range of id values.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;
--
-- Example:
--     -- Select records from the person table where id is between 100 and 110
--     SELECT * FROM person WHERE id BETWEEN 100 AND 110;
--     -- Output: Display records from the person table where id is between 100 and 110.
--
--     -- Select the first name, last name, and email of records from the person table where id is between 10 and 20
--     SELECT first_name, last_name, email FROM person WHERE id BETWEEN 10 AND 20;
--     -- Output: Display the first name, last name, and email of records from the person table where id is between 10 and 20.
-- Select records from the person table where id is between 100 and 110
SELECT
    *
FROM
    person
WHERE
    id BETWEEN 100
    AND 110;

-- Select the first name, last name, and email of records from the person table where id is between 10 and 20
SELECT
    first_name,
    last_name,
    email
FROM
    person
WHERE
    id BETWEEN 10
    AND 20;