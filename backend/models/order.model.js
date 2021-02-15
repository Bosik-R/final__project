const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true},
  adress: {type: String, required: true},
  email: {type: String, required: true},
  info: {type: String},
  totalValue: {type: Number, required: true},
  products: {type: Object, required: true},
});

module.exports = mongoose.model('Order', orderSchema);
