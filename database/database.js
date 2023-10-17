const sequelize = require('sequelize');
const connection = new sequelize( 'SafetyTech','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;