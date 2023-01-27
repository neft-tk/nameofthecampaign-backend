const User = require("./User.js");
const Post = require("./Post.js");

User.hasMany(Post, {
    onDelete: 'CASCADE'
});

Post.belongsTo(User);

module.exports = { User, Post }