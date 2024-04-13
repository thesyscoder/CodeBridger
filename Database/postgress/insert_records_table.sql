-- Insert records into tables
-- Syntax:
-- INSERT INTO table_name(column1,column2,column..) VALUES(value1,value2,valuen)
INSERT INTO
    person(
        first_name,
        last_name,
        gender,
        date_of_birth
    )
VALUES
    ('Jason', 'Jones', 'Male', DATE '1988-02-19');

-- Show table data after insertion
SELECT
    *
FROM
    person;

\ o;