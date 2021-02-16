const Request = require('request');

const url = 'http://localhost:3000/products';

describe('GET all products', () => {
    it('should return status 200', (done) => {
        Request.get(`${url}`, (error, response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it('should return a list that is not empty', (done) => {
        Request.get(`${url}`, (error, response) => {
            // number of returned rows to be more than zero
            expect(JSON.parse(response.body).rows.length).toBeGreaterThan(0);
            done();
        });
    });
});


describe('GET product by id', () => {
  it('Should return status 200', (done) => {
      Request.get(`${url}/1`, (error, response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
  it('Should return Testy McTester as user with id 1', (done) => {
      Request.get(`${url}/1`, (error, response) => {
          const product1 = JSON.parse(response.body).rows[0];
          expect(product1.name).toBe('dvd rewinder');
          expect(product1.price).toBe('17.99');
          expect(product1.category_id).toBe('2');
          done();
      });
  });
});

describe('save new product', () => {
  it('Should return status 200 and the newly saved product', (done) => {
      const new_product = {
        name: 'taco sleeping bag',
        price: '21.49',
        category_id: '2'
      }
      Request.post(`${url}`, { json: true, body: new_product }, (error, response) => {
          expect(response.statusCode).toBe(200);
          const new_product = response.body.rows[0];
          expect(new_product.name).toBe('taco sleeping bag');
          expect(new_product.price).toBe('21.49');
          expect(new_product.category_id).toBe('2');
          done();
      });
  });
});


describe('return largest product id', () => {
    it('Should return status 200', (done) => {
        Request.get(`${url}/last-id`, (error, response) => {
            expect(response.statusCode).toBe(200);
            const latest_id = response.body;
            expect(response.statusCode).toBeGreaterThan(0);
            done();
        });
    });
});

describe('delete existing product (last one in the db)', () => {
    let latest_id = 0;
    it('Should return status 200', (done) => {
        Request.get(`${url}/last-id`, (error, response) => {
            latest_id = response.body;
        });
        Request.delete(`${url}/` + latest_id, (error, response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});