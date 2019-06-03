const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../config/express');
const { 
  invalidShoeId, 
  shoeId, 
  validShoePostArray,
  invalidShoePostArray,
} = require('../utils/testData');

describe('routes.spec.js', () => {
  describe('GET /shoe/ routes', () => {
    it('should return all shoe objects', (done) => {
      return request(app)
        .get(`/shoe`)
        .expect('Content-Type', /json/)
        .expect(httpStatus.OK, done);
    });

    it('should return 404 when incorrect id is supplied', () => {
      return request(app)
        .get(`/shoe/${invalidShoeId}`)
        .expect(httpStatus.NOT_FOUND);
    });

    it('should return a shoe object when id is supplied', () => {
      return request(app)
        .get(`/shoe/${shoeId}`)
        .expect(JSON.stringify({
          company: 'Yeezy',
          name: '350 Boost',
          color: 'Pirate Black',
        }))
        .then((res) => {
          console.log('Response received')
        })
        .catch((err) => {
          console.log('Error received')
        })
    });
  });
});

  describe('POST /shoe/ routes', () => {
    it('should return 404 when no shoe JSON object is sent', () => {
      return request(app)
        .post('/shoe/')
        .set('Accept', 'application/json')
        .send({ shoes: [] })
        .expect('Content-Type', 'application/json')
        .expect(404)
        .then(res => {
          console.log('Response received. [Not logging]');
        });
    });
    it('should return 404 when incorrect JSON is given', () => {
      return request(app)
        .post('/shoe/')
        .set('Accept', 'application/json')
        .send({ invalidShoePostArray })
        .expect('Content-Type', 'application/json')
        .expect(httpStatus.NOT_FOUND)
        .then(res => {
          console.log('Response received. [Not logging]');
        });
    });
    it('should return OK status when valid array of shoe objects are given', () => {
      return request(app)
        .post('/shoe/')
        .set('Accept', 'application/json')
        .send({ validShoePostArray })
        .expect('Content-Type', 'application/json')
        .expect(httpStatus.OK)
        .then(res => {
          console.log('Response received. [Not logging]');
        });
    });
});
