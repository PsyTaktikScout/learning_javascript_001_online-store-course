const { Sequelize } = require('sequelize') // импортируем Sequelize, сразу же делаем деструктуализацию, так как модуль большой и нам нужен конкретно вот этот вот класс

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // Пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)