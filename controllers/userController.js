const { User } = require('../models');

async function getUsers(req, res) {
    try {
        const userData = await User.findAll()
        return res.status(200).json(userData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'An error occured finding all user data', err })       
    }
}

module.exports = {
    getUsers,
};