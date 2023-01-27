const router = require('express').Router();

const {
    getPosts,
    getSinglePost,
    createPost
} = require('../../controllers/postController')

router.route('/')
.get(getPosts)
.post(createPost)

router.route('/:postId')
.get(getSinglePost)

module.exports = router