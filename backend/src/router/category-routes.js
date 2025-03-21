const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllCategoryController = require('../controlers/Category/AllCategoryController');
const CreateCategoryController = require('../controlers/Category/CreateCategoryController');
const UpdateCategoryController = require('../controlers/Category/UpdateCategoryController');
const DeleteOptionsController = require('../controlers/Category/DeleteCategoryController');
const ListCategoryController = require('../controlers/Category/ListCategoryController');
const GetBySlug = require('../controlers/Category/GetById')

publicRouter.get('/categories', AllCategoryController);
privateRouter.post('/categories', CreateCategoryController);
privateRouter.put('/categories/:id', UpdateCategoryController);
privateRouter.delete('/categories/:id', DeleteOptionsController);
publicRouter.get('/categories', ListCategoryController);
publicRouter.get('/categories/:id', GetBySlug);

module.exports = [publicRouter, privateRouter];