const { User, Post } = require('../models');

async function getPosts(req, res) {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User
                }
            ]
        });
        return res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        return res.status(200).json({ msg: 'An error occured retrieving all posts', err })        
    }
}

async function getSinglePost(req, res) {
    try {
        const postData = await Post.findByPk(req.params.body, {
            include: [
                {
                    model: User
                }
            ]
        })
        return res.status(200).json(postData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'An error occured finding a single post', err })
    }
}

async function createPost(req, res) {
    try {
        const createPostData = await Post.create({
            title: req.body.title,
            text: req.body.text,
            UserId: req.body.userId
        })
        return res.status(200).json(createPostData)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'An error occured creating a post', err })
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    createPost
}