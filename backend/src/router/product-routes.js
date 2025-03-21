const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllProductControler = require('../controlers/Product/AllProductControler');
const CreateProductControler = require('../controlers/Product/CreateControler');
const UpdateController = require('../controlers/Product/UpdateController');
const DeleteController = require('../controlers/Product/DeleteController');
const ListImageController = require('../controlers/Product/ListImageController');
const GetBySlug = require("../controlers/Product/GetBySlug");
const CreateImageController = require('../controlers/Product/CreateImageController');
const UpdateImageController = require('../controlers/Product/UpdateImageController');
const DeleteImagemController = require('../controlers/Product/DeleteImageController');


publicRouter.get('/products', AllProductControler);
publicRouter.get('/products/:slug', GetBySlug);
privateRouter.post('/products', CreateProductControler);
privateRouter.put('/products/:id', UpdateController);
privateRouter.delete('/products/:id', DeleteController);
publicRouter.get('/products/:id/images', ListImageController);
privateRouter.post('/products/:id/images', CreateImageController);
privateRouter.put('/products/:id/images/:imageId', UpdateImageController);
privateRouter.delete('/products/:id/images/:id', DeleteImagemController);

module.exports = [publicRouter, privateRouter];