const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

router.get('/orders', OrderController.getAll);

router.get('/orders/:id', OrderController.getById);

router.post('/orders', OrderController.post);

module.exports = router;
