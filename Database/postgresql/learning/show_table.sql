-- Title: Show Table Structure
-- Description: This script displays the structure of tables in the current database using SQL queries.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT table_name, column_name, data_type
--     FROM information_schema.columns
--     WHERE table_schema = 'public';
--
-- Example:
--     -- Show all tables in the current database
--     SELECT table_name, column_name, data_type
--     FROM information_schema.columns
--     WHERE table_schema = 'public';
--     -- Output: Display table names along with their columns and data types.
--
--     -- Show structure of the 'person' table
--     SELECT column_name, data_type
--     FROM information_schema.columns
--     WHERE table_name = 'person';
--     -- Output: Display column names and data types of the 'person' table.
SELECT
    table_name
FROM
    information_schema.tables
WHERE
    table_schema = 'public'
    AND table_type = 'BASE TABLE';

SELECT
    column_name,
    data_type
FROM
    information_schema.columns
WHERE
    table_name = 'person';