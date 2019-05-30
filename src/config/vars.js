const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env.example'),
});

let port = '';

if (process.env.NODE_ENV === 'test') { port = 8080}
else { port = 3000 }

module.exports = {
  env: process.env.NODE_ENV,
  port,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'development',
  pgDatabase: process.env.PGDATABASE,
  pgUsername: process.env.PGUSER,
  pgPassword: process.env.PGPASSWORD,
  pgHost: process.env.PGHOST,
  pgPort: process.env.PGPORT,
}