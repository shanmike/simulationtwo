-- Select all from users
Select * from users

-- Create a user table
CREATE TABLE users (
    userid SERIAL PRIMARY KEY,
    name VARCHAR(20), 
    password VARCHAR(20)
)

-- Select all from properties
Select * from properties

-- Create a properties table
CREATE TABLE properties (
    propid SERIAL PRIMARY KEY, 
    userid int FOREIGN KEY REFERENCES users(userid),
    propname VARCHAR(40),
    propdescription VARCHAR(60),
    address VARCHAR(40),
    city VARCHAR(40),
    state VARCHAR(40),
    zip VARCHAR(10),
    imageurl VARCHAR(200),
    loanamount int,
    monthlymortgage int,
    desiredrent int
)
-- Insert into values on Properties Table

INSERT INTO properties(propname, propdescription, address,city,state,zip,imageurl,loanamount,monthlymortgage,desiredrent)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)

-- Get all the properties

select * from properties