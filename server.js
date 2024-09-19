const express = require('express');
const router = require('./src/router/router');
const sequelize = require('./src/config/config');
const Evento = require('./src/models/Evento');
const Participante = require('./src/models/Participante');

const app = express();
app.use(express.json());
app.use('/api', router);

app.get("/healthcheck", (req, res) => {
    // 200 -> Ok
  return res.status(200).json({
    msg: "Estamos vivos",
    alive: true,
  });
});


sequelize
.authenticate()
.then(async () =>{
  console.log("Conexão com BD estabelecida com sucesso");
  await sequelize.sync();
})
.then(() => {
  app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
    console.log("Servdor Online na porta 8080");
  });
})
.catch((error) => {
  console.error("Erro ao se conectar com banco:", error);
});