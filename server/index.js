require('dotenv').config() // для того что бы наш сервет мог считывать файл пременных окружения, необходимо так же сюда импортировать конфиг из мобуля dotenv
const express = require('express') // импортируем "express"
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000 // укажем порт на котором наше приложение будет работать

const app = express() // создадим объект вызвав функцию "express"
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'WORKING!!!'})
// })

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`)) // какой порт должен прослушивать наш сервер, и колбек который отработает при успешном запуске нашего сервера
    } catch (e) {
        console.log('Ошибка')
        console.log(e)
    }
}

//
start()