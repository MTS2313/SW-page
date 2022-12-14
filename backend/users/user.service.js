const config = require('config.json');
const jwt = require('jsonwebtoken');

const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    verifyToken
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Senha ou Nome errado';

    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        token
    };
}

async function verifyToken() {
    return {valid:true}
}


function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}