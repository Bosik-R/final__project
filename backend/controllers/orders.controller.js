const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Order.find();
    if(!result) res.status(404).json({message: 'Not Found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if(!result) res.status(404).json({message: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.post = async (req, res) => {
  const { orderId, name, adress, price } = req.body;

  try {
    const newOrder = new Order({
      orderId: orderId,
      name: name,
      price: price,
      adress: adress,
    });
    await newConcert.save();
    messageOk(res);
  }
  catch(err) {
    messageError(res, err);
  }
};
}
