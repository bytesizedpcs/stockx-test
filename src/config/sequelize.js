const Sequelize = require('sequelize');
const logger = require('./logger');
const ShoeModel = require('./models/Shoe');
const { 
  pgDatabase: database, 
  pgHost: host, 
  pgDialect: dialect, 
  pgPassword: password, 
  pgUsername: username,
} = require('./vars');

const sequelize = new Sequelize(
  database,
  username,
  password,
  { host, dialect,});

const Shoe = ShoeModel(sequelize, Sequelize);

sequelize.sync({ force: eraseDatabaseOnSync })
  .then(() => {
    console.log('Database created');
  })
  .catch((error) => {
    console.log('Something went wrong: ', error);
  });

module.exports = {
  Shoe,
}