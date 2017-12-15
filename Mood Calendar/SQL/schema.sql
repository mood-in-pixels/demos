
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



INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Happy","#3bd93b",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Productive","#a8bffa",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Average","#ddaacc",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Grumpy","#f3f300",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Tired","#F8B707",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Disappointed","#dd9999",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Lonely","#4CAFFA",true,current_date());
INSERT INTO dim_moods (mood_description,color,active,date) VALUES ("Depressed","#ffaa88",true,current_date());
