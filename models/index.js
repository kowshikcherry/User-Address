const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  "user-address",
  "root",
  "1234",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = { sequelize, DataTypes };