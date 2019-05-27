const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../index');

describe('index.spec.js', () => {
  describe('GET /', () => {
    it('should give back status OK', () => {
      return request(app)
        .get('/')
        .expect(httpStatus.OK)
    })
  })
})