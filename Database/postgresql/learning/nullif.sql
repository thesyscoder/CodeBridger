-- Title: NULLIF
-- Description: This script demonstrates the usage of the NULLIF function to return NULL if two expressions are equal; otherwise, it returns the first expression.
-- Author: thesyscoder
--
-- Syntax:
--     NULLIF(expression1, expression2)
--
-- Example:
--     -- Return NULL if the two expressions are equal; otherwise, return the first expression
--     SELECT 10 / 0;
--     -- Output: Display an error due to division by zero.
--
--     -- Return 10 if the two expressions are not equal; otherwise, return NULL
--     SELECT NULLIF(10, 8);
--     -- Output: Display the number 10 since the two expressions are not equal.
-- Division by zero
SELECT
    10 / 0;

-- Output: Display an error due to division by zero.
-- NULLIF
SELECT
    NULLIF(10, 8);

-- Output: Display the number 10 since the two expressions are not equal.