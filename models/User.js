// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Post = require("./post");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Define the association
User.hasMany(Post, { as: "posts", foreignKey: "userId" });
Post.belongsTo(User, { as: "author", foreignKey: "userId" });

module.exports = User;
