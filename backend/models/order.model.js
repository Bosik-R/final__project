const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {type: String, require: true },
  name: { type: String, required: true },
  adress: { type: String, required: true },
  price: {type:String, required: true },

});

module.exports = mongoose.model('Order', orderSchema);
