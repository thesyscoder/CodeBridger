-- Title: Grouping Records with GROUP BY Clause
-- Description: This script demonstrates the usage of the GROUP BY clause to group records from the person table by the gender column and count the occurrences of each gender.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT column_name, aggregate_function(column_name) FROM table_name GROUP BY column_name;
--
-- Example:
--     -- Group records from the person table by gender and count the occurrences of each gender
--     SELECT gender, COUNT(*) FROM person GROUP BY gender;
--     -- Output: Display the count of records grouped by gender.
-- Group records from the person table by gender and count the occurrences of each gender
SELECT
    gender,
    COUNT(*)
FROM
    person
GROUP BY
    gender;