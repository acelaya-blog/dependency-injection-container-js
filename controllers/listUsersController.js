const listUsersController = getUsers => (req, res, next) => {
    const users = getUsers();
    res.send(JSON.stringify(users));
};

module.exports = listUsersController;
