const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.chek)


module.exports = router

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'WORKING!!!'})
// })