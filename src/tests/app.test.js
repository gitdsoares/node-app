const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../../app');

chai.use(chaiHttp);
chai.should();

describe('Routing Test', () => {
  after((done) => {
    server.close();
    done();
  });

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
