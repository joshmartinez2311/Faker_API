// importing express and faker
const express = require('express');
const faker = require('faker');

// create 2 functions 'createUser' and 'createCompany'

const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address : {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
        },
    };
};

// instance of the express server listening to post 5000
const app = express();

app.listen(5000, function() {
    console.log("listening on port 5000")
});

// create API routes that will return a new user, a new company and both a new user and a new company

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});

app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany(),
    });
});