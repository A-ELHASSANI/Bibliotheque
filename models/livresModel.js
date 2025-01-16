const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Pret = require('./pretsModel');

const Livre = sequelize.define('Livre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titre: Sequelize.STRING,
    auteur: Sequelize.STRING
},
{
    tableName: "livres",
    timestamps: false
});

Livre.hasMany(Pret, { foreignKey: "LivreId" });
Pret.belongsTo(Livre , {foreignKey : "LivreId"});

module.exports = Livre;
