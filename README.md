# assessment-week7-uk-animal-adoption

# React + Vite

Notes added to Moodle & README.md

Week 7 Project: Build a Database Driven Full Stack React & Express App

User Stories

🐿️ As a user, I want to be able to create new posts and add them to the page
🐿️ As a user, I want to be able to assign a category to each post
🐿️ As a user, I want to be able to view all posts added on the page and the category they're in
🐿️ As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category (Stretch Goal)
🐿️ As a user, I want to be able to add new categories (Stretch Goal)

Requirements

🎯 Design a database schema with relationships between tables

    DONE

🎯 Create a new application with a React client and an Express server
(again, remember the client and the server should be separate)

    DONE

🎯 Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)

    DONE - I created two SQL seed querys in the end the first used junctions: See below. unfortunately I couldn't get the insert to work with the junction tables, so I needed to add the animal type back into the animals table to get the query working.

---

DROP TABLE IF EXISTS animals CASCADE;
DROP TABLE IF EXISTS animal_types CASCADE;
DROP TABLE IF EXISTS animal_types_junction;

CREATE TABLE IF NOT EXISTS animals (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
age INT,
colour varchar(50),
breed VARCHAR(50),
date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS animal_types (
id SERIAL PRIMARY KEY,
type VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS animal_types_junction (
animal_id INT REFERENCES animals(id),
animal_types_id INT REFERENCES animal_types(id)
);

INSERT INTO animal_types (type) VALUES
('cat'), ('dog'), ('bird'), ('rabbit'), ('hamster'), ('guinea pig'), ('fish'), ('turtle'), ('snake'), ('lizard'), ('ferret'), ('horse'), ('pig'), ('chinchilla'), ('gerbil'), ('parrot'), ('mouse'), ('rat'), ('hedgehog');

INSERT INTO animals (name, age, colour, breed) VALUES
('Milo', 2, 'Black and White', 'Maine Coon'),
('Daisy', 5, 'Golden', 'Golden Retriever'),
('Lola', 1, 'Black', 'Holland Lop'),
('Shadow', 3, 'Brown', 'German Shepherd'),
('Oliver', 1, 'Gray', 'Russian Blue'),
('Coco', 2, 'Orange', 'Syrian'),
('Maximus', 4, 'Brindle', 'Boxer'),
('Mia', 2, 'Calico', 'Calico'),
('Leo', 1, 'Yellow', 'Canary'),
('Molly', 6, 'Brown and White', 'Dalmatian'),
('Simba', 3, 'Orange', 'Bengal'),
('Nemo', 1, 'Orange and White', 'Clownfish'),
('Ginger', 2, 'Tabby', 'Tabby'),
('Cooper', 4, 'Chocolate', 'Labradoodle'),
('Lily', 1, 'White', 'Dwarf Hotot'),
('Bailey', 5, 'Golden', 'Golden Doodle'),
('Mochi', 2, 'Black', 'Scottish Fold'),
('Charlie', 1, 'Gray', 'Roborovski'),
('Riley', 3, 'Black and White', 'Border Collie'),
('Lucky', 2, 'Orange', 'Tabby'),
('Nala', 1, 'Calico', 'Calico'),
('Casper', 3, 'White', 'Sphynx'),
('Teddy', 1, 'Golden', 'Cavalier King Charles Spaniel'),
('Rocky', 2, 'Brown', 'Tortoise'),
('Spike', 4, 'Green', 'Iguana'),
('Bandit', 1, 'Black', 'Ferret'),
('Misty', 6, 'Brown', 'Thoroughbred'),
('Porky', 3, 'Pink', 'Pig'),
('Whiskers', 2, 'Gray', 'Chinchilla'),
('Nibbles', 1, 'Brown', 'Gerbil');

INSERT INTO animal_types_junction (animal_id, animal_types_id) VALUES (1, 1),
(2, 2),
(3, 4),
(4, 2),
(5, 1),
(6, 5),
(7, 2),
(8, 1),
(9, 3),
(10, 2),
(11, 1),
(12, 7),
(13, 1),
(14, 2),
(15, 4),
(16, 2),
(17, 1),
(18, 5),
(19, 2),
(20, 1),
(21, 1),
(22, 1),
(23, 2),
(24, 8),
(25, 10),
(26, 11),
(27, 12),
(28, 13),
(29, 14),
(30, 15);

---

🎯 Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.

    DONE

🎯 Create multiple pages using react-router-dom

    DONE

🎯 Create a home page.

    DONE

🎯 Create a page to show all the posts and use fetch to call your server to get your data.

    DONE

🎯 Create a page where users can create new posts using a form.

    DONE

Was another challenging week. Being out on Thursday I was playing catch up. There was a lot I would have liked to have changed or updated on reflection.

I would have used a junction table query for the animal greeting e.g woof-woof if the animal is a dog, meow if a cat rather than using an if but I didn't have time.

There were several things I was pleased with including, the grid layout, the use of components and Routes.

https://assessment-week7-uk-animal-adoption-1.onrender.com/ (LIVE)
https://assessment-week7-uk-animal-adoption.onrender.com (SERVER)
https://github.com/nicklormanhall/assessment-week7-uk-animal-adoption (GITHUB)
