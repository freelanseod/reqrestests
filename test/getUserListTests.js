let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { assert } = require('chai');
let server = 'https://reqres.in/api';

chai.use(chaiHttp);

describe('Get list of users', () => {
    it('it should receive all users list', () => {
        chai.request(server)
        .get('/users')
        .query({page: 2})
        .then((res) => {
            res.should.have.status(200);
            res.body.should.be.a('Object');
            page = JSON.parse(res.text).page;
            //add check response body 
            //add check size of user list 
            assert.equal(2, page);
        });
    });
});