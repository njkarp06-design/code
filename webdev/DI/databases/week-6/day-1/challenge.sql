-- Daily Challenge: Actors Table

-- 1. Count how many actors are in the table
SELECT COUNT(*) FROM actors;

-- 2. Try to add a new actor with some blank fields
INSERT INTO actors (first_name, last_name) VALUES ('John', NULL);

-- The outcome depends on whether the column has a NOT NULL constraint.
-- If last_name has NOT NULL, PostgreSQL will throw an error and reject the insert.
-- If the column allows NULL, the insert will succeed and the blank field will be stored as NULL.
