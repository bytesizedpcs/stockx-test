const express = require('express');
const httpStatus = require('http-status');
const pool = require('../../config/postgres');

const router = express.Router();

router.get('/', (req, res) => {
  pool.connect()
    .then(client => {
      return client.query('SELECT * FROM shoes')
        .then(response => {
          client.release()
          res.send(response.rows[0]).status(httpStatus.OK)
          console.log(response.rows[0])
        })
        .catch(e => {
          client.release()
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
          logger.info(err.stack)
        });
    });
});

router.post('/', (req, res) => {
  res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
});

router.get('/:id', (req, res) => {
  res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
});

router.use('/docs', express.static('docs'));

module.exports = router;
