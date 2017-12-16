DROP DATABASE IF EXISTS
moods_db
CREATE DATABASE moods_db;
USE moods_db;

-- Create the table plans.
CREATE TABLE users
(
user_id int NOT NULL AUTO_INCREMENT,
user_name varchar(255) NOT NULL,
pass varchar(255) NOT NULL,
date timestamp,
PRIMARY KEY (user_id)
);


CREATE TABLE moods_by_day
(
mood_selection_id int NOT NULL AUTO_INCREMENT,
user_id varchar(255) NOT NULL,
mood_id varchar(255) NOT NULL,
mood_date date,
PRIMARY KEY (mood_selection_id)
);


CREATE TABLE dim_moods
(
mood_id int NOT NULL AUTO_INCREMENT,
mood_description varchar(255) NOT NULL,
color varchar(255) NOT NULL,
active boolean,
date timestamp,
PRIMARY KEY (mood_id)
);



INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Happy", "#4caf50",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Stressed", "#ffeb3b",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Angry","#B71C1C",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Content","#00bcd4",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Depressed","#17558C",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Energetic","#ff9800",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Guilty","#673ab7",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Compassionate","#EC407A",true,current_date());
