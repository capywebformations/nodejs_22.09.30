module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.route('/users/register').post(userController.createAnUser);
    server.route('/users/login').post(userController.loginAnUser);
}