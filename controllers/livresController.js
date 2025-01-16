const Livre = require('../models/livresModel');

exports.getAllLivres = async (req, res) => {
    const livres = await Livre.findAll();
    res.json(livres);
};

exports.createLivre = async (req, res) => {
    const livre = await Livre.create(req.body);
    res.json(livre);
};

exports.getLivreById = async (req, res) => {
    const livre = await Livre.findByPk(req.params.id);
    res.json(livre);
};

exports.updateLivre = async (req, res) => {
    const livre = await Livre.update(req.body, { where: { id: req.params.id } });
    res.json(livre);
};

exports.deleteLivre = async (req, res) => {
    await Livre.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Livre supprimé' });
};
