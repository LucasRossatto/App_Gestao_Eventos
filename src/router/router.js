const { Router } = require("express");
const EventoController = require("../controller/EventoController");
const ParticipanteController = require("../controller/ParticipanteController");
const eventoRoutes = require("./routerEvento");
const partRoutes = require("./routerParticipante");

const router = Router();

router.use("/", eventoRoutes);
router.use("/", partRoutes);

module.exports = router;
