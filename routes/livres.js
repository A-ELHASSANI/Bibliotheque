const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livresController');

router.get('/', livreController.getAllLivres);
router.post('/', livreController.createLivre);
router.get('/:id', livreController.getLivreById);
router.put('/:id', livreController.updateLivre);
router.delete('/:id', livreController.deleteLivre);

module.exports = router;