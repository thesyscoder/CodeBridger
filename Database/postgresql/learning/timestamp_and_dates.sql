-- Title: Timestamp and Dates
-- Description: This script demonstrates the usage of NOW() function to retrieve the current timestamp and how to cast it to date or time data types.
-- Author: thesyscoder
--
-- Syntax:
--     NOW()
--
-- Example:
--     -- Retrieve the current timestamp
--     SELECT NOW();
--     -- Output: Display the current timestamp.
--
--     -- Retrieve the current date portion of the timestamp
--     SELECT NOW()::DATE;
--     -- Output: Display the current date portion of the timestamp.
--
--     -- Retrieve the current time portion of the timestamp
--     SELECT NOW()::TIME;
--     -- Output: Display the current time portion of the timestamp.

-- Retrieve the current timestamp
SELECT NOW();
-- Output: Display the current timestamp.

-- Retrieve the current date portion of the timestamp
SELECT NOW()::DATE;
-- Output: Display the current date portion of the timestamp.

-- Retrieve the current time portion of the timestamp
SELECT NOW()::TIME;
-- Output: Display the current time portion of the timestamp.
