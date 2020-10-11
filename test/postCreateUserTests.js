let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { assert } = require('chai');
let server = 'https://reqres.in/api';
let should = chai.should();

chai.use(chaiHttp);

describe('Create new user', () => {
    it('it should create user', () => {
        let userReqBody = {
            name: "user one",
            job: "user job one"
        }

        chai.request(server)
        .post('/users')
        .send(userReqBody)
        .then((res) => {
            res.should.have.status(201);
            res.body.should.be.a('Object');
            res.body.should.have.property('name').equals('user one');
            res.body.should.have.property('job').equals('user job one');
            res.body.should.have.property('id');
            res.body.should.have.property('createdAt');
        });
    });
});