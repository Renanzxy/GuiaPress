const { DataTypes } = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Relações
Category.hasMany(Article);      // 1 categoria -> muitos artigos
Article.belongsTo(Category);    // 1 artigo -> 1 categoria

module.exports = Article;
