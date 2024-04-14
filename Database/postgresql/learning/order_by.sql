-- Title: Select Records in Ascending and Descending Order
-- Description: This script retrieves records from the person table in ascending and descending order based on specified columns.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name ORDER BY column_name ASC;
--     SELECT column_name FROM table_name ORDER BY column_name DESC;
--
-- Example:
--     -- Select records in ascending order by first_name
--     SELECT * FROM person ORDER BY first_name ASC;
--     -- Output: Display records from the person table sorted by first name in ascending order.
--
--     -- Select records in descending order by email
--     SELECT email FROM person ORDER BY email DESC;
--     -- Output: Display emails from the person table sorted in descending order.
-- Select records in ascending order by first_name
SELECT
    *
FROM
    person
ORDER BY
    first_name ASC;

-- Select records in descending order by email
SELECT
    email
FROM
    person
ORDER BY
    email DESC;