const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");
const Article = require("./Articles"); // ✅ Aqui você importa o model já definido

// ❌ Remover tudo abaixo até module.exports
// const Article = connection.define(...) ← NÃO definir model aqui!

// ❌ Também não é aqui que se define relacionamentos entre modelos

module.exports = Article;
