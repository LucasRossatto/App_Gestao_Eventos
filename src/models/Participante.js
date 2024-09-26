const { DataTypes } = require("sequelize");
// Importando as configuracoes da pasta config
const sequelize = require("../config/config");
// importando tabela de evento para cirar Chave estrangeira
const Evento = require("./Evento");

// Definindo tabela Particpante no Banco de dados
const Participante = sequelize.define("Participante", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  eventoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Evento,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});

module.exports = Participante;
