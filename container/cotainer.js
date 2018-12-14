const Bottle = require('bottlejs');

const homeControllerFactory = require('../controllers/homeController');
const listUsersControllerFactory = require('../controllers/listUsersController');

const utils = require('../services/utils');
const getUsersFactory = require('../services/getUsers');

const bottle = new Bottle();

bottle.constant('utilsService', utils);
bottle.serviceFactory('getUsers', getUsersFactory, 'utilsService');

bottle.serviceFactory('mainController', homeControllerFactory);
bottle.serviceFactory('listUsersController', listUsersControllerFactory, 'getUsers');

module.exports = bottle.container;
