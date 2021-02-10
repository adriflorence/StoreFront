import Request from 'request';

const url = 'http://localhost:3000';

describe('Server', () => {
    describe('GET all users /', () => {
    const status = 0;
        beforeAll((done) => {
            Request.get(`${url}/users`, (_error, response) => {
                status = response.statusCode;
                done();
            });
        });
        it('Status 200', () => {
            expect(status).toBe(200);
        });
    });
});