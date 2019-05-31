const express = require('express');
const httpStatus = require('http-status');
const pool = require('../../config/postgres');
const { shoeGet, shoeGetId, shoePost } = require('../utils/queries');
const router = express.Router();

router.get('/', (req, res) => {
  (async () => {
    const client = await pool.connect()
    try {
      const response = await client.query(shoeGet);
      res.send(response.rows).status(httpStatus.OK);
    } finally {
      client.release()
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  (async () => {
    const client = await pool.connect()
    try {
      const response = await client.query(shoeGetId, [id])
      res.send(response.rows[0]).status(httpStatus.OK);
    } finally {
      client.release()
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
});

// Need to create the req items into an array of objects to send
// Into Postgres. I think it only takes arrays.
// name, company, color, sum_shoe_sizes
// if sum_shoe_size is sent, increase size_amount
router.post('/', (req, res) => {
  const { name, company, color, tts } = req.body;

  (async () => {
    const client = await pool.connect()
    try {
      const response = await client.query(shoePost, [name, company, color, tts])
      res.sendStatus(httpStatus.OK);
    } finally {
      client.release()
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
});

router.use('/docs', express.static('docs'));

module.exports = router;
