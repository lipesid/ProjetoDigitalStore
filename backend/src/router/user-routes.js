const privateRouter = require('./Private-Routes');
const publicRouter = require('./Public-Routes');
const AllUserControler = require('../controlers/User/AllUserControler');
const CreateController  = require('../controlers/User/CreatController')
const encriptPassword = require('../middears/incript-password');
const creatTokenController = require('../controlers/User/CreatTokenController');
const updateUserController = require('../controlers/User/UpdateUserController');
const deleteUserController = require('../controlers/User/DeleteUserController');
const GetById = require('../controlers/User/GetById');

publicRouter.get('/users', AllUserControler);
publicRouter.post('/users', encriptPassword, CreateController);
publicRouter.post('/users/token', creatTokenController);
privateRouter.put('/users/:id', updateUserController);
privateRouter.delete('/users/:id', deleteUserController);
publicRouter.get('/users/:id', GetById);

module.exports = [publicRouter, privateRouter];