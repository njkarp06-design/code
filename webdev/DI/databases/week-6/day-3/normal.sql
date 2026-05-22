-- Exercise 1

SELECT * FROM language;

SELECT f.title, f.description, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO new_film (name) VALUES
('The Dark Knight'),
('Interstellar'),
('Inception');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY NOT NULL,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(200),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT NOW()
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) VALUES
(1, 1, 'Amazing Film', 9, 'One of the best movies I have ever seen.', NOW()),
(2, 1, 'Absolutely Incredible', 10, 'A visually stunning and emotional experience.', NOW());

DELETE FROM new_film WHERE id = 1;

SELECT * FROM customer_review;


-- Exercise 2

UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

SELECT
    kcu.column_name,
    ccu.table_name AS references_table,
    ccu.column_name AS references_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu ON tc.constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
AND tc.table_name = 'customer';

DROP TABLE customer_review;

SELECT COUNT(*) FROM rental
WHERE return_date IS NULL;

SELECT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT f.film_id, f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

SELECT f.film_id, f.title, f.description, f.length, f.rating
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
AND f.length < 60
AND f.rating = 'R';

SELECT f.film_id, f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer cu ON r.customer_id = cu.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE cu.first_name = 'Matthew' AND cu.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.film_id, f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer cu ON r.customer_id = cu.customer_id
WHERE cu.first_name = 'Matthew' AND cu.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
