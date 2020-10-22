let mocha = require('mocha');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { assert } = require('chai');
let server = 'https://reqres.in/api';

chai.use(chaiHttp);

describe('Delete user', () => {
    it('it should delete user info', () => {
        let userReqBody = {
            name: "user delete",
            job: "user job delete"
        }

        chai.request(server)
            .post('/users')
            .send(userReqBody)
            .then((res) => {
                id = JSON.parse(res.text).id;
            });

        chai.request(server)
            .delete('/users/${id}')
            .then((res) => {
                res.should.have.status(204);
            });
    });
});