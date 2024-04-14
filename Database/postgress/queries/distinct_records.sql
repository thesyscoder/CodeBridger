-- Title: Select Distinct Records from PostgreSQL Table
-- Description: This script retrieves unique first names from the person table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT DISTINCT column_name
--     FROM table_name
--     [ORDER BY column_name];
--
-- Example:
--     SELECT DISTINCT first_name
--     FROM person
--     ORDER BY first_name;
--     -- Output: Unique first names sorted alphabetically.
SELECT
    DISTINCT first_name
FROM
    person
ORDER BY
    first_name;