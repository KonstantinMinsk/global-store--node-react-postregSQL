const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const brandRouter = require('./brandRoutes');
const typeRouter = require('./typeRoutes');
const deviceRoute = require('./deviceRoutes');

router.use('/user', userRouter)

router.use('/brand', brandRouter)

router.use('/type', typeRouter)

router.use('/device', deviceRoute)

module.exports = router;