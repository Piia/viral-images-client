const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('API-layer', () => {
  describe('SERVER/api', () => {
      it('it should GET metadata of imgur images', (done) => {
        chai.request('http://localhost:3002')
            .get('/api')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });

});