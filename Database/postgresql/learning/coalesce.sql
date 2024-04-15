-- Title: Coalesce
-- Description: This script demonstrates the usage of the COALESCE function to return the first non-null value from the provided list of expressions.
-- Author: thesyscoder
--
-- Syntax:
--     COALESCE(expression1, expression2, ..., expressionN)
--
-- Example:
--     -- Return the first non-null value from the provided list of expressions
--     SELECT COALESCE(null, 1) AS number;
--     -- Output: Display the number 1, as it is the first non-null value from the provided list of expressions.

SELECT
    COALESCE(null, 1) AS number;