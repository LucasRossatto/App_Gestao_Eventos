const Evento = require("../models/Evento");
const Participante = require("../models/Participante");

const ParticipanteController = {
  create: async (req, res) => {
    try {
      const { name, email, eventoId } = req.body;
      const validateEmail = await Participante.findOne({
        where: {
          email: email,
        },
      });

      if (validateEmail) {
        return res.status(500).json({
          msg: "Esse email já esta cadastrado",
        });
      } else {
        const partCriado = await Participante.create({ name, email, eventoId });
        return res.status(200).json({
          msg: "Participante criado com sucesso!",
          participanteCriado: partCriado,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, eventoId } = req.body;
      const participanteUpdate = await Participante.findByPk(id);
      if (participanteUpdate == null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }

      const updated = participanteUpdate.update({
        name,
        email,
        eventoId,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Participante atualizado com sucesso!",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const partListados = await Participante.findAll();
      return res.status(200).json({
        msg: "Participantes encontrados",
        lista_participantes: partListados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const partEncontrado = await Participante.findByPk(id);
      if (partEncontrado == null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Participante encontrado com sucesso!",
        participante: partEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const partEncontrado = await Participante.findByPk(id);
      if (partEncontrado == null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }
      await partEncontrado.destroy();
      return res.status(200).json({
        msg: "Participante deletado com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAllPartsOfEvent: async (req, res) => {
    try {
      const { eventoId } = req.params;
      const participantesEncontrados = await Participante.findAll({
        where: { eventoId: eventoId },
      });
      if (participantesEncontrados == null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Evento encontrados",
        lista_participantes: participantesEncontrados,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ParticipanteController;
