const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

async function getSingleUser(req, res) {
    try {
        const userData = await User.findByPk(req.params.userId)
        return res.status(200).json(userData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'An error occured finding a single user', err })        
    }
}

async function postUserLogin(req, res) {
    try {
        const foundUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!foundUser) {
            return res.status(401).json({ msg: 'invalid email' });
        } else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({ msg: 'invalid password' });
        } else {
            const token = jwt.sign(
                {
                    id: foundUser.id,
                    email: foundUser.email,
                    username: foundUser.username,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '14d',
                }
            );
            return res.status(200).json({ token, user: foundUser })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'A login error has occured' })      
    }
}


module.exports = {
    getUsers,
    getSingleUser,
    postUserLogin
};