-- Title: Filtering Records with IN Operator
-- Description: This script demonstrates the usage of the IN operator to filter records from the person table based on multiple id values.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name WHERE column_name IN (value1, value2, ...);
--
-- Example:
--     -- Select records from the person table where id matches any of the specified values
--     SELECT * FROM person WHERE id IN (12, 45, 6, 877, 88, 2, 4, 56) ORDER BY gender;
--     -- Output: Display records from the person table where id matches any of the specified values, ordered by gender.
-- Select records from the person table where id matches any of the specified values
SELECT
    *
FROM
    person
WHERE
    id IN (12, 45, 6, 877, 88, 2, 4, 56)
ORDER BY
    gender;