const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Evento = require('./Evento');

const Participante = sequelize.define("Participante", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eventoId: {
    type: DataTypes.INTEGER,
    references: {
        model: Evento,
        key: 'id',
    },
  },
  
});

Participante.belongsToMany(Evento, { through: 'ParticipanteEvento' });


module.exports = Participante;
