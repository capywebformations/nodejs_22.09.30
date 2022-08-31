module.exports = (server) => {

    const commentController = require('../controllers/commentController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    server.route('/posts/:post_id/comments')
        .all(jwtMiddleware.verifyTokenUser)
        .get(commentController.listAllComments)
        .post(commentController.createAComment);

    server.route('/comments/:comment_id') // req.params.post_id
        .all(jwtMiddleware.verifyTokenUser)
        .get(commentController.getAComment)
        .put(commentController.updateAComment)
        .delete(commentController.deleteAComment);
}