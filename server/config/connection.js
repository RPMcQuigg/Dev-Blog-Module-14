const Sequelize = require('sequelize');


const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
