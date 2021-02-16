const Request = require('request');

const url = 'http://localhost:3000/orders';

describe('GET orders by user_id', () => {
  it('Should return status 200', (done) => {
      Request.get(`${url}/2`, (error, response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});