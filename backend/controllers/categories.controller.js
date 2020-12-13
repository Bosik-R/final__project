const Category = require('../models/category.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Category.find();
    if(!result) res.status(404).json({message: 'Not Found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Category.findById(req.params.id);
    if(!result) res.status(404).json({message: 'Not found'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
