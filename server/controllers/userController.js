const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        { id, email, role }, 
        process.env.SECRET_KEY,
        { expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Email or password is not correct'))
        }
        const isUserExist = await User.findOne({ where: { email }});
        if (isUserExist) {
            return next(ApiError.badRequest('User already exist'))
        }
        const hasPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, password: hasPassword, role })
        const basket = await Basket.create({ userId: user.id })
        const token  = generateJWT(user.id, email, role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email }});
        if (!user) {
            return next(ApiError.internal('User with that name not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Password is not correct'));
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({ token })
    }

    async checkAuth(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({ token })

        // For testing during development
        // const { id } = req.query;
        // if (!id) {
        //     return next(ApiError.badRequest('ID is not found'))
        // }
        // res.status(200).json({ id: id })
    }
}

module.exports = new UserController()