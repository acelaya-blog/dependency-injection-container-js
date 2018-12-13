const getUsers = (utils) => () => ([
    {
        id: utils.generateRandomNumber(),
        name: 'Foo'
    },
    {
        id: utils.generateRandomNumber(),
        name: 'Bar'
    },
]);

module.exports = getUsers;
