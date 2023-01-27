const router = require('express').Router();

const {
    getUsers, 
    getSingleUser,
    postUserLogin,
} = require('../../controllers/userController');

router.route('/')
.get(getUsers);

router.route('/login')
.post(postUserLogin)

router.route('/:userId')
.get(getSingleUser);

module.exports = router;