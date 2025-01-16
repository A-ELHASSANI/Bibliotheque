const Pret = require('../models/pretsModel');

exports.getAllPrets = async (req, res) => {
    const prets = await Pret.findAll();
    res.json(prets);
};

exports.createPret = async (req, res) => {
    const pret = await Pret.create(req.body);
    res.json(pret);
};

exports.getPretById = async (req, res) => {
    const pret = await Pret.findByPk(req.params.id);
    res.json(pret);
};

exports.updatePret = async (req, res) => {
    const pret = await Pret.update(req.body, { where: { id: req.params.id } });
    res.json(pret);
};

exports.deletePret = async (req, res) => {
    await Pret.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Prêt supprimé' });
};
