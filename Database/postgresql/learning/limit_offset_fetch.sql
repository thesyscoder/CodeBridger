-- Title: Limiting and Offsetting Results
-- Description: This script demonstrates the usage of LIMIT, OFFSET, and FETCH to control the number of rows returned in a query from the person table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name LIMIT n;
--     SELECT * FROM table_name OFFSET n LIMIT m;
--     SELECT * FROM table_name OFFSET n FETCH FIRST m ROW ONLY;
--
-- Example:
--     -- Select the first 10 records from the person table
--     SELECT * FROM person LIMIT 10;
--     -- Output: Display the first 10 records from the person table.
--
--     -- Select 5 records from the person table starting from the 6th record
--     SELECT * FROM person OFFSET 5 LIMIT 5;
--     -- Output: Display 5 records from the person table starting from the 6th record.
--
--     -- Select 5 records from the person table starting from the 6th record
--     SELECT * FROM person OFFSET 5 FETCH FIRST 5 ROW ONLY;
--     -- Output: Display 5 records from the person table starting from the 6th record.
-- Select the first 10 records from the person table
SELECT
    *
FROM
    person
LIMIT
    10;

-- Select 5 records from the person table starting from the 6th record
SELECT
    *
FROM
    person OFFSET 5
LIMIT
    5;

-- Select 5 records from the person table starting from the 6th record
SELECT
    *
FROM
    person OFFSET 5
FETCH FIRST
    5 ROW ONLY;