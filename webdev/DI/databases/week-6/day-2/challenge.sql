-- Daily Challenge: SQL NULL Puzzle

CREATE TABLE FirstTab (
    id integer,
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

SELECT * FROM SecondTab;


-- Q1.
-- Prediction: 0
-- The subquery returns only NULL. NOT IN (NULL) becomes id != NULL which is UNKNOWN for every row.
-- WHERE only passes TRUE, so no rows pass. Result: 0

SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );


-- Q2.
-- Prediction: 2
-- The subquery returns only (5). NOT IN (5) is TRUE for id=6 and id=7.
-- id=5 fails (FALSE), id=NULL fails (UNKNOWN). Result: 2

SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );


-- Q3.
-- Prediction: 0
-- The subquery returns (5, NULL). NOT IN (5, NULL) = id != 5 AND id != NULL.
-- The id != NULL part is always UNKNOWN, so the whole condition is UNKNOWN for every row.
-- Even id=6 and id=7 return UNKNOWN, not TRUE. Result: 0

SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );


-- Q4.
-- Prediction: 2
-- The subquery returns only (5) because WHERE id IS NOT NULL filters out the NULL.
-- Same result as Q2. id=6 and id=7 pass. Result: 2

SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
