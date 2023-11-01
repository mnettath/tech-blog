const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    contents: {
      type: DataTypes.STRING,
    },
    dateCreated: {
      type: DataTypes.DATE,
    },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: "post" }
);

module.exports = Post;
