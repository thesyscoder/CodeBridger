-- Title: List All Databases
-- Description: This script lists all databases available in the PostgreSQL server using SQL queries.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT datname FROM pg_database;
--
-- Example:
--     SELECT datname FROM pg_database;
--     -- Output: List of all databases available in the PostgreSQL server.
SELECT
    datname
FROM
    pg_database;