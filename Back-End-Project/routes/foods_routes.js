const foodController = require('../controllers/foods_controller')
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploadImage')
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});
var upload = multer({storage: storage});

module.exports = (app) => {
  
  app.post('/foods', upload.single('image') , foodController.create);
  
  app.get("/foods", foodController.findAll);
  
  app.get("/foods/:id", foodController.findOne);

  app.put("/foods/:id", foodController.update);
  
  app.delete("/foods/:id", foodController.delete);
  
  app.delete("/foods", foodController.deleteAll);
}
