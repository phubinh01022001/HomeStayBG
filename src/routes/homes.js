const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const Home = require('../app/models/Home')
const auth = require('../middleware/adminAuth');

router.get('/create', homeController.create);
router.post('/store', homeController.store);
router.get('/:id/edit', homeController.edit);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);
router.delete('/:id/force', homeController.force);
router.patch('/:id/restore', homeController.restore);
router.get('/showFull', homeController.showFull);
router.get('/showChungCu', homeController.showChungCu);
router.get('/showNhaRieng', homeController.showNhaRieng);
router.get('/showBietThu', homeController.showBietThu);
router.post('/search', homeController.search);
router.get('/:slug', homeController.show);

module.exports = router;
