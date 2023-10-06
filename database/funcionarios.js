const sequelize = require("sequelize");
const database = require("./database");

const Funcionario = database.define('funcionarios',{
    id: {
        type: Sequelize.INTERGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    matricula:{
        type: Sequelize.INTERGER,
        allowNull: false,
        unique: true
    },

    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})