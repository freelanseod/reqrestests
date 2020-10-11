let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { assert } = require('chai');
let server = 'https://reqres.in/api';

chai.use(chaiHttp);

describe('Update user info', () => {
    it('it should update user name and job', () => {
        let userReqBody = {
            name: "user change one",
            job: "user job change one"
        }

        chai.request(server)
        .post('/users')
        .send(userReqBody)
        .then((res) => {
            id = JSON.parse(res.text).id;
        });
        let updateReqBody = {
            name: "user change",
            job: "user job change"
        }
        chai.request(server)
        .put('/users/${id}')
        .send(updateReqBody)
        .then((res) => {
            res.should.have.status(200);
            res.body.should.have.property('name').equals('user change');
            res.body.should.have.property('job').equals('user job change');
            res.body.should.have.property('updatedAt');
        });
    });
});