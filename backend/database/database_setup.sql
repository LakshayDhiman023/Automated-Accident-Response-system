DROP DATABASE IF EXISTS accident_response_system;
CREATE DATABASE accident_response_system;
USE accident_response_system;
CREATE TABLE IF NOT EXISTS hospitals (
    hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(45) NOT NULL,
    contact VARCHAR(10) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL
);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital A', '1234567890', 40.7128, -74.0060);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital B', '0987654321', 34.0522, -118.2437);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital C', '1112223333', 41.8781, -87.6298);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital D', '9998887777', 29.7604, -95.3698);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital E', '4445556666', 33.4484, -112.0740);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital F', '7778889999', 37.7749, -122.4194);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital G', '5554443333', 32.7157, -117.1611);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital H', '2223334444', 39.9526, -75.1652);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital I', '6667778888', 42.3601, -71.0589);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital J', '3332221111', 45.5051, -122.6750);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital K', '8889990000', 34.0522, -118.2437);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital L', '1112223333', 33.4484, -112.0740);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital M', '7778889999', 37.7749, -122.4194);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital N', '5554443333', 32.7157, -117.1611);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital O', '2223334444', 39.9526, -75.1652);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital P', '6667778888', 42.3601, -71.0589);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital Q', '3332221111', 45.5051, -122.6750);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital R', '8889990000', 34.0522, -118.2437);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital S', '1112223333', 33.4484, -112.0740);
INSERT INTO hospitals (hospital_name, contact, latitude, longitude) VALUES ('Hospital T', '7778889999', 37.7749, -122.4194);



CREATE TABLE IF NOT EXISTS ambulance (
    ambulance_id INT AUTO_INCREMENT PRIMARY KEY,
    number_plate_no INT NOT NULL,
    hospital_id INT NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    driver VARCHAR(255)
);



INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1234, 1, 40.7128, -74.0060, 'John Doe');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (5678, 2, 34.0522, -118.2437, 'Jane Smith');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (9101, 3, 41.8781, -87.6298, 'Michael Johnson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1121, 4, 29.7604, -95.3698, 'Emily Williams');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (3141, 5, 33.4484, -112.0740, 'David Brown');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (5161, 6, 37.7749, -122.4194, 'Jessica Wilson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (7181, 7, 32.7157, -117.1611, 'Daniel Miller');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (9201, 8, 39.9526, -75.1652, 'Sarah Anderson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1221, 9, 42.3601, -71.0589, 'Christopher Martinez');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1423, 10, 45.5051, -122.6750, 'Linda Thompson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1625, 11, 34.0522, -118.2437, 'James Lee');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (1827, 12, 33.4484, -112.0740, 'Amanda White');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (2029, 13, 37.7749, -122.4194, 'Matthew Harris');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (2231, 14, 32.7157, -117.1611, 'Jennifer Thompson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (2433, 15, 39.9526, -75.1652, 'Andrew Martinez');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (2635, 16, 42.3601, -71.0589, 'Jessica Robinson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (2837, 17, 45.5051, -122.6750, 'David Johnson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (3039, 18, 34.0522, -118.2437, 'Emily Davis');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (3241, 19, 33.4484, -112.0740, 'Michael Wilson');
INSERT INTO ambulance (number_plate_no, hospital_id, latitude, longitude, driver) VALUES (3443, 20, 37.7749, -122.4194, 'Sarah Anderson');



