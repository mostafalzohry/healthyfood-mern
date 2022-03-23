const Food = require('../models/foods');

module.exports = {
  create(req, res){
    var food = new Food({
      name:req.body.name,
      details: req.body.details,
      Recipeinfo:req.body.Recipeinfo,
      image: req.file ?  'http://localhost:4000/' + req.file.filename : req.body.image,
      NutritionInfo:req.body.NutritionInfo,
      Ingredients:req.body.Ingredients,
      category:req.body.category,
      price:req.body.price
    });
    food.save(food)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Food."
      });
    });
  },
  findAll(req, res){
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Food.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while retrieving foods."
      });
    });
  },
  findOne(req, res){
    const id = req.params.id;
    Food.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Food with id=" + id });
    });
  },
  update(req, res){
    if (!req.body) {
      return res.status(400).send({message: "Data to update can not be empty!"});
    }
    const id = req.params.id;
    Food.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Food was not found!`
          });
        } else res.send({ message: "Food was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({message: "Error updating Food with id=" + id});
      });
  },
  delete(req, res){
    const id = req.params.id;
    Food.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: `Cannot delete Food with id=${id}. Maybe Food was not found!`});
        } else {
          res.send({
            message: "Food was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({message: "Could not delete Food with id=" + id});
      });
  },
  deleteAll(req, res){
    Food.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Foods were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while removing all foods."});
    });
  }
}
