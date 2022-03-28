const orderController = require('../controllers/orders_controller')

module.exports = (app) => {

  app.post('/orders', orderController.create);
  
  app.get("/orders", orderController.findAll);
  
  app.get("/orders/:id", orderController.findOne);

  app.put("/orders/:id", orderController.update);
  
  app.delete("/orders/:id", orderController.delete);
  
  app.delete("/orders", orderController.deleteAll);
}
