const Order = require('../models/orders');

module.exports = {
  create(req, res){
    var order = new Order({
      username:req.body.username,
      email: req.body.email,
      phone:req.body.phone,
      orders:req.body.orders
    });
    order.save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order."
      });
    });
  },
  findAll(req, res){
    Order.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while retrieving orders."
      });
    });
  },
  findOne(req, res){
    const id = req.params.id;
    Order.findById(id)
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
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Order was not found!`
          });
        } else res.send({ message: "Order was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({message: "Error updating Order with id=" + id});
      });
  },
  delete(req, res){
    const id = req.params.id;
    Order.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: `Cannot delete Order with id=${id}. Maybe Order was not found!`});
        } else {
          res.send({
            message: "Order was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({message: "Could not delete Order with id=" + id});
      });
  },
  deleteAll(req, res){
    Order.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Orders were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while removing all orders."});
    });
  }
}