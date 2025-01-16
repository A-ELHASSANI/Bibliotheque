const { Sequelize , DataTypes  } = require('sequelize');
const sequelize = require('../config/database');
const Livre = require('./livresModel');
const Abonne = require('./abonesModel');

const Pret = sequelize.define('prets', {
    date_pret: {
        type: DataTypes.DATE,
        allowNull: false
    } ,
    date_retour: {
        type: DataTypes.DATE,
        allowNull: false
    } 
},
{
    tableName: "prets",
    timestamps: false
});

// Pret.belongsTo(Livre, { foreignKey: 'id_livre' });
// Pret.belongsTo(Abonne, { foreignKey: 'id_abonne' });

module.exports = Pret;
