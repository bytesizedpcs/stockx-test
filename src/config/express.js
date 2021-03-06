const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression')
const methodOverride = require('method-override')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../api/routes');
const { logs } = require('./vars');
const error = require('../api/middlewares/errors');

const app = express();

app.use(morgan(logs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());

app.use(methodOverride());

app.use(helmet());

app.use(cors());

app.use('/shoes', routes);

app.use(error.converter);
app.use(error.notFound);
app.use(error.handler);

module.exports = app;