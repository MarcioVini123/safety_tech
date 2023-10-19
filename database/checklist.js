const Sequelize = require('sequelize');
const database = require(  './database');

const checklist = database.define('checklist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    nome_completo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    setor:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    pergunta1: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta2: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta3: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta4: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta5: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta6: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta7: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },pergunta8: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },pergunta9: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    pergunta10: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});


checklist.sync()
.then(()=>{
console.log('Tabela de Check Criada com sucesso')
})
.catch((error)=>{
    console.error("Erro ao criar a tabela de Check", error)
});

module.exports = checklist;
