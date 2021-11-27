const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/product');

router.post('/', ProdCtrl.createProduct); // Creer dans la base

router.get('/:id', ProdCtrl.getOneProduct); // AFFICHE PAR ID 

router.get('/', ProdCtrl.getAllProducts); // AFFICHE TOUS LES PRODUCTS 

router.put("/:id", ProdCtrl.update); // UPDATE A PRODUCT AVEC ID

router.delete("/:id", ProdCtrl.delete); // DELETE A PRODUCT AVEC ID

module.exports = router;
