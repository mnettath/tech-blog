const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
    },
    contents: {
        type: DataTypes.STRING,
    },
    dateCreated: {
        type: DataTypes.DATE,
    },
})

module.exports = Post;