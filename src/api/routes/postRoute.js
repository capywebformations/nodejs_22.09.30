module.exports = (server) => {

    const postController = require('../controllers/postController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    server.route('/posts')
        .all(jwtMiddleware.verifyTokenAdmin)
        .get( postController.listAllPosts)
        .post(postController.createAPost);

    server.route('/posts/:post_id') // req.params.post_id
        .all(jwtMiddleware.verifyTokenAdmin)
        .get(postController.getAPost)
        .put(postController.updateAPost)
        .delete(postController.deleteAPost);
}