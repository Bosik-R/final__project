const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orders.controller');

router.get('/orders/:id', OrderController.getById);

router.post('/orders', OrderController.post);

module.exports = router;
