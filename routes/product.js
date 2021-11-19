const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/product');

router.put('/', ProdCtrl.createProduct); // Creer dans la base
router.get('/:id', ProdCtrl.getOneProduct); // AFFICHE PAR ID 

module.exports = router;
