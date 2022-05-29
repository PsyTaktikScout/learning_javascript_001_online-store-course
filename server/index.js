const express = require('express') // импортируем "express"

const PORT = 5000 // укажем порт на котором наше приложение будет работать

const app = express() // создадим объект вызвав функцию "express"

app.listen(PORT, () => console.log(`Server start on port ${PORT}`)) // какой порт должен прослушивать наш сервер, и колбек который отработает при успешном запуске нашего сервера
