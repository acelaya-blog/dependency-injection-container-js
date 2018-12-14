const homeControllerFactory = require('../controllers/homeController');
const listUsersControllerFactory = require('../controllers/listUsersController');

const utils = require('../services/utils');
const getUsersFactory = require('../services/getUsers');

const services = {
    // mainController: container => homeControllerFactory(),
    // listUsersController: container => {
    //     const getUsers = container.get('getUsers');
    //     return listUsersControllerFactory(getUsers);
    // },
    //
    // utilsService: container => utils,
    // getUsers: container => {
    //     const utils = container.get('utilsService');
    //     return getUsersFactory(utils);
    // },

    mainController: [homeControllerFactory],
    listUsersController: ['getUsers', listUsersControllerFactory],

    utilsService: [() => utils],
    getUsers: ['utilsService', getUsersFactory]
};

module.exports = services;
