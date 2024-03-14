const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Routing Test', () => {
    it('GET / is returning 200 OK', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('GET /sharks is returning 200 OK', (done) => {
        chai.request(server)
            .get('/sharks')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
