import Express from 'express'
import UsersApiController from '../../controllers/api/users-controller.js'

const usersApiRouters = Express.Router()

usersApiRouters.post('/registration', (request, response) => new UsersApiController(request, response).registrationWithEmail())

export default usersApiRouters
