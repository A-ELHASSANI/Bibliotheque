const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Pret = require('./pretsModel');

const Abonne = sequelize.define('Abonne', {
    nom: Sequelize.STRING,
    prenom: Sequelize.STRING,
    adresse: Sequelize.STRING
},
{
    tableName: "abonnes",
    timestamps: false
});

// Abonne.hasMany(Pret , {foreignKey : "AbonnesId"});
// Pret.belongsTo(Abonne , {foreignKey : "AbonnesId"});

module.exports = Abonne;
