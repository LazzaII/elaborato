DROP DATABASE IF EXISTS DBelaborato;
CREATE DATABASE DBelaborato;
USE DBelaborato;

SET @@time_zone = '+01:00';

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE teacher (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
    role INT NOT NULL,
    
	PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES role (id) 
);

CREATE TABLE class (
	degree INT NOT NULL,
	section CHAR  NOT NULL,
    teacher INT NOT NULL,
    
    PRIMARY KEY (degree, section),
    FOREIGN KEY (teacher) REFERENCES teacher (id)
);

CREATE TABLE gym_access (
	id INT NOT NULL AUTO_INCREMENT, 
	access_day DATE NOT NULL,
    access_hour TIME NOT NULL,
    exit_day DATE,
    exit_hour TIME,
    teacher INT NOT NULL,
    
	PRIMARY KEY (id),
    FOREIGN KEY (teacher) REFERENCES teacher (id)
);

INSERT INTO role (name) VALUES
("simple"),
("admin");

INSERT INTO teacher (first_name, last_name, role) VALUES
("Amalia", "Napolitano", "1"),
("Carolina", "Padovesi", "1"),
("Costantino", "Piccio", "1"),
("Ezio", "Trentino", "2");

INSERT INTO class (degree, section, teacher) VALUES
("1", "A", 1),
("1", "B", 2),   
("1", "C", 2),   
("1", "D", 1), 
("1", "E", 3),   
("2", "A", 4),   
("2", "B", 4),   
("2", "C", 2),   
("2", "D", 3),     
("2", "E", 2),
("3", "A", 2),  
("3", "B", 1),  
("3", "C", 3),  
("3", "D", 1),  
("3", "E", 3),
("4", "A", 3),  
("4", "B", 4),  
("4", "C", 1),  
("4", "D", 1),  
("4", "E", 4),
("5", "A", 3),  
("5", "B", 1),  
("5", "C", 4),  
("5", "D", 4),  
("5", "E", 2);     

INSERT INTO gym_access (teacher, access_day, access_hour, exit_day, exit_hour) VALUES
(1,'2021-05-14', '10:05:0', '2021-05-24', '11:01:00'),
(3,'2021-05-14', '10:30:0', '2021-01-01', '12:10:10'),
(2,'2021-06-14', '10:05:0', '2021-06-24', '11:01:00'),
(3,'2021-06-14', '10:30:0', '2021-06-01', '12:10:10'),
(2,'2021-07-14', '10:05:0', '2021-07-24', '11:01:00'),
(2,'2021-07-14', '10:30:0', '2021-07-01', '12:10:10'),
(4,'2021-07-14', '10:05:0', '2021-07-24', '11:01:00'),
(4,'2021-09-14', '10:30:0', '2021-09-01', '12:10:10'),
(1,'2021-09-14', '10:05:0', '2021-09-24', '11:01:00'),
(3,'2021-09-14', '10:30:0', '2021-09-01', '12:10:10'),
(1,'2021-10-14', '10:05:0', '2021-10-24', '11:01:00'),
(2,'2021-11-14', '10:30:0', '2021-11-01', '12:10:10'),
(3,'2021-11-14', '10:05:0', '2021-11-24', '11:01:00'),
(3,'2021-12-14', '10:30:0', '2021-12-01', '12:10:10');

