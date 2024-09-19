const Evento = require("../models/Evento");

const EventoController = {
  create: async (req, res) => {
    try {
      const { name, data, localizacao } = req.body;
      const EventoCriado = await Evento.create({ name, data, localizacao });

      return res.status(200).json({
        msg: "Evento criado com sucesso!",
        evento: EventoCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, data, localizacao } = req.body;
      const eventoUpdate = await Evento.findByPk(id);
      if (eventoUpdate == null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }

      const updated = eventoUpdate.update({
        name,
        data,
        localizacao,
      });

      if (updated) {
        return res.status(200).json({
          msg: "Evento atualizado com sucesso!",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const eventosListados = await Evento.findAll();
      return res.status(200).json({
        msg: "Eventos encontrados",
        user: eventosListados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const eventoEncontrado = await Evento.findByPk(id);
      if (eventoEncontrado == null) {
        return res.status(404).json({
          msg: " Evento não encontrado",
        });
      }
      return res.status(200).json({
        msg: "Evento encontrado com sucesso!",
        user: eventoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const eventoEncontrado = await Evento.findByPk(id);
      if (eventoEncontrado == null) {
        return res.status(404).json({
          msg: "Evento não encontrado",
        });
      }
      await eventoEncontrado.destroy();
      return res.status(200).json({
        msg: "Evento deletado com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = EventoController;
