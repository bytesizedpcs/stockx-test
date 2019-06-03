const express = require('express');
const httpStatus = require('http-status');
const pool = require('../../../config/postgres');
const { 
  shoeGetAllQuery,
  shoeGetByIdQuery,
  insertFullShoeQuery,
  insertPartialShoeQuery,
  getShoeSizeArrayByIdQuery,
  updateShoeSizeArrayByIdQuery
} = require('../../utils/queries');

const shoe = {};

shoe.getAllShoes = function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  (async () => {
    const client = await pool.connect()
    try {
      const response = await client.query(shoeGetAllQuery);
      res.send(response.rows).status(httpStatus.OK);
    } finally {
      client.release()
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
}
shoe.getShoeById = function (req, res) {
  const id = req.params.id;
  res.setHeader('Content-Type', 'application/json');

  (async () => {
    const client = await pool.connect()
    try {
      const response = await client.query(shoeGetByIdQuery, [id])
      res.send(response.rows).status(httpStatus.OK);
    } finally {
      client.release()
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
}

// Need to create a single function that takes arguments for the things
shoe.createShoe = function (req, res) {
  const { name, company, color, tts } = req.body;

  if (!req.body) {
    res.send(httpStatus.NOT_FOUND);
  }

  if (!tts) {
    (async () => {
      const client = await pool.connect();
      try {
        await client.query(insertPartialShoeQuery, [name, company, color]);
        res.sendStatus(httpStatus.OK);
      } finally {
        client.release();
      }
    })().catch(e => {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      console.log(e.stack);
    });
  }

  (async () => {
    const client = await pool.connect();
    try {
      await client.query(insertFullShoeQuery, [name, company, color, tts]);
      res.sendStatus(httpStatus.OK);
    } finally {
      client.release();
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
}
shoe.getShoeSizesArrayById = function (req, res) {
  const { id } = req.params.id;

  (async () => {
    const client = await pool.connect();
    try {
      const response = await client.query(getShoeSizeArrayByIdQuery, [id]);
      res.send(response.rows).status(httpStatus.OK);
    } finally {
      client.release();
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
}
shoe.addShoeSizeToArray = function (req, res) {
  const { id, tts } = req.params;

  (async () => {
    const client = await pool.connect();
    try {
      await client.query(updateShoeSizeArrayByIdQuery, [id, tts]);
      res.sendStatus(httpStatus.OK);
    } finally {
      client.release();
    }
  })().catch(e => {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    console.log(e.stack);
  });
}

module.exports = shoe;