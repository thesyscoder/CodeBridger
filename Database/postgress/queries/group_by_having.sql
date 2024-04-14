-- Title: Filtering Groups with HAVING Clause
-- Description: This script demonstrates the usage of the GROUP BY clause with the HAVING clause to filter groups from the person table by first name and count the occurrences of each first name, where the count is greater than or equal to 2.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT column_name, aggregate_function(column_name) FROM table_name WHERE condition GROUP BY column_name HAVING condition;
--
-- Example:
--     -- Group records from the person table by first name and count the occurrences of each first name, where the count is greater than or equal to 2
--     SELECT first_name, COUNT(*) FROM person WHERE first_name ILIKE 'p%' GROUP BY first_name HAVING COUNT(*) >= 2;
--     -- Output: Display the first names along with the count of occurrences, where the count is greater than or equal to 2.
-- Group records from the person table by first name and count the occurrences of each first name, where the count is greater than or equal to 2
SELECT
    first_name,
    COUNT(*)
FROM
    person
WHERE
    first_name ILIKE 'p%'
GROUP BY
    first_name
HAVING
    COUNT(*) >= 2;