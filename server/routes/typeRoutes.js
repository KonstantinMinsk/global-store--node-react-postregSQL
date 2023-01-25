const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

const roles = ['ADMIN']

router.post('/', checkRole(roles[0]), typeController.create)
router.get('/', typeController.getAll)

module.exports = router