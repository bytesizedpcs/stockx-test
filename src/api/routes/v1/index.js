const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

// CRUD?
router.get('/shoe/', (req, res) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR)
});

router.get('/shoe/:id', (req, res) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR)
});

router.post('/shoe/', (req, res) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR)
});

router.use('/docs', express.static('docs'));


module.exports = router;
