const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress3", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

connection.authenticate()
  .then(() => {
    console.log("Conexão com banco de dados realizada com sucesso!");
  })
  .catch(error => {
    console.error("Erro ao conectar com o banco de dados:", error);
  });

module.exports = connection;
