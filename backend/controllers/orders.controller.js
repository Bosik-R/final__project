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
  const { name, adress, email, info, totalValue, products } = req.body.order;

  try {
    const newOrder = new Order({
      name: name,
      adress: adress,
      email: email,
      info: info,
      totalValue: totalValue,
      products: [...products],
    });

    await newOrder.save();
    res.send({newOrder});

  }
  catch(err) {
    res.status(500).json(err);
  }
};

