const router = require('express').Router();

const {
    getUsers, 
    getSingleUser,
    postUserLogin,
    readToken
} = require('../../controllers/userController');

router.route('/')
.get(getUsers);

router.route('/login')
.post(postUserLogin)

router.route('/readtoken')
.get(readToken)

router.route('/:userId')
.get(getSingleUser);

module.exports = router;