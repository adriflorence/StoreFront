const Request = require('request');

const url = 'http://localhost:3000';

describe('GET all users', () => {
    it('should return status 200', (done) => {
        Request.get(`${url}/users`, (error, response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it('should return a list that is not empty', (done) => {
        Request.get(`${url}/users`, (error, response) => {
            // number of returned rows to be more than zero
            expect(JSON.parse(response.body).rows.length).toBeGreaterThan(0);
            done();
        });
    });
});


describe('GET user by id', () => {
    it('Should return status 200', (done) => {
        Request.get(`${url}/users/1`, (error, response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});