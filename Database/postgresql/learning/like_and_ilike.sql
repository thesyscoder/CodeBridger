-- Title: Pattern Matching with LIKE and ILIKE Operators
-- Description: This script demonstrates the usage of the LIKE and ILIKE operators to perform pattern matching in the person table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT * FROM table_name WHERE column_name LIKE pattern;
--     SELECT * FROM table_name WHERE column_name ILIKE pattern;
--
-- Example:
--     -- Select records from the person table where email ends with '.com'
--     SELECT * FROM person WHERE email LIKE '%.com' LIMIT 10;
--     -- Output: Display records from the person table where email ends with '.com'.
--
--     -- Select first names from the person table where the name ends with 'n'
--     SELECT first_name FROM person WHERE first_name LIKE '%n' LIMIT 10;
--     -- Output: Display first names from the person table where the name ends with 'n'.
--
--     -- Select first names, last names, and emails from the person table where the last name starts with 'P' and ends with 'l'
--     SELECT first_name, last_name, email FROM person WHERE last_name LIKE 'P%l' LIMIT 10;
--     -- Output: Display first names, last names, and emails from the person table where the last name starts with 'P' and ends with 'l'.
--
--     -- Select first names and emails from the person table where the email has 8 characters before the '@' symbol
--     SELECT first_name, email FROM person WHERE email LIKE '________@%' LIMIT 20;
--     -- Output: Display first names and emails from the person table where the email has 8 characters before the '@' symbol.
--
--     -- Select first names and emails from the person table where the email starts with 'p' (case-insensitive)
--     SELECT first_name, email FROM person WHERE email ILIKE 'p%' LIMIT 10;
--     -- Output: Display first names and emails from the person table where the email starts with 'p' (case-insensitive).
-- Select records from the person table where email ends with '.com'
SELECT
    *
FROM
    person
WHERE
    email LIKE '%.com'
LIMIT
    10;

-- Select first names from the person table where the name ends with 'n'
SELECT
    first_name
FROM
    person
WHERE
    first_name LIKE '%n'
LIMIT
    10;

-- Select first names, last names, and emails from the person table where the last name starts with 'P' and ends with 'l'
SELECT
    first_name,
    last_name,
    email
FROM
    person
WHERE
    last_name LIKE 'P%l'
LIMIT
    10;

-- Select first names and emails from the person table where the email has 8 characters before the '@' symbol
SELECT
    first_name,
    email
FROM
    person
WHERE
    email LIKE '________@%'
LIMIT
    20;

-- Select first names and emails from the person table where the email starts with 'p' (case-insensitive)
SELECT
    first_name,
    email
FROM
    person
WHERE
    email ILIKE 'p%'
LIMIT
    10;