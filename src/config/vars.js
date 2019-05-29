const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  pgDatabase: process.env.PG_DB,
  pgUsername: process.env.PG_USER,
  pgPassword: process.env.PG_PASS,
  pgHost: process.env.PG_HOST,
  pgDialect: process.env.PG_DIALECT,
}