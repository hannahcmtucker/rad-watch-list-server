BEGIN;

DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    imageurl VARCHAR(300),
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, imageurl) VALUES ('Blade Runner', 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg');

COMMIT;
