BEGIN;

DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    imdbid VARCHAR(300) NOT NULL,
    userid INTEGER REFERENCES users(id) NOT NULL,
    title VARCHAR(300) NOT NULL,
    imageurl VARCHAR(300),
    year INT,
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, password) VALUES ('Jeff', '$2b$10$dEFaf0yCa9Mtxix5R3dZNuSQCeTbzdvThiAkhlBbBcDdrBFscuujW');
INSERT INTO movies (imdbid, userid, title, imageurl, year) VALUES ('tt0083658', 1, 'Blade Runner', 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', 1982);

COMMIT;
