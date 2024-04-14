-- Title: Aggregate Functions
-- Description: This script demonstrates the usage of various aggregate functions on the cars table.
-- Author: thesyscoder
--
-- Syntax:
--     SELECT aggregate_function(column_name) FROM table_name;
--     SELECT aggregate_function(column_name) FROM table_name GROUP BY column_name;
--
-- Example:
--     -- Find the maximum price of cars
--     SELECT MAX(price) FROM cars;
--     -- Output: Display the maximum price of cars.
--
--     -- Find the minimum price of cars
--     SELECT MIN(price) FROM cars;
--     -- Output: Display the minimum price of cars.
--
--     -- Find the maximum price for each make of cars
--     SELECT make, MAX(price) FROM cars GROUP BY make ORDER BY MAX(price) DESC;
--     -- Output: Display the maximum price for each make of cars, ordered by maximum price in descending order.
--
--     -- Calculate the total price for each make of cars by summing up the prices
--     SELECT make, SUM(CAST(REGEXP_REPLACE(price, '[^\d.]', '', 'g') AS numeric)) AS total_price FROM cars GROUP BY make ORDER BY total_price DESC;
--     -- Output: Display the total price for each make of cars, ordered by total price in descending order.
-- Find the maximum price of cars
SELECT
    MAX(price)
FROM
    cars;

-- Find the minimum price of cars
SELECT
    MIN(price)
FROM
    cars;

-- Find the maximum price for each make of cars
SELECT
    make,
    MAX(price)
FROM
    cars
GROUP BY
    make
ORDER BY
    MAX(price) DESC;

-- Calculate the total price for each make of cars by summing up the prices
SELECT
    make,
    SUM(
        CAST(
            REGEXP_REPLACE(price, '[^\d.]', '', 'g') AS numeric
        )
    ) AS total_price
FROM
    cars
GROUP BY
    make
ORDER BY
    total_price DESC;