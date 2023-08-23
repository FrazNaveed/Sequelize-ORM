// db.js
const { Sequelize } = require("sequelize");
const config = require("./config/config.json"); // Import your configuration

const sequelize = new Sequelize(config.development);

module.exports = sequelize;
