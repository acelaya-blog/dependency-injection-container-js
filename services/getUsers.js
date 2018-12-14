const getUsers = ({ generateRandomNumber }) => () => ([
    {
        id: generateRandomNumber(),
        name: 'Foo'
    },
    {
        id: generateRandomNumber(),
        name: 'Bar'
    },
]);

module.exports = getUsers;
