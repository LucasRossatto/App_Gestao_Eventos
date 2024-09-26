const { DataTypes } = require("sequelize");
// Importando as configuracoes da pasta config
const sequelize = require("../config/config");

// Definindo tabela Evento no banco de dados
const Evento = sequelize.define("Evento", {
  name: {
    // DataTypes = definindo o tipo do dado
    type: DataTypes.STRING,
    // Allow null: false = Não pode ser criado com valor vazio
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Evento;
