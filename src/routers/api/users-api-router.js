import Express from 'express'
import UsersApiController from '../../controllers/api/users-controller'

const usersApiRouters = Express.Router()

usersApiRouters.post('/registration', (request, response) => new UsersApiController(request, response).registrationWithEmail())
usersApiRouters.post('/login', (request,  response) => new UsersApiController(request, response).loginWithEmail())

export default usersApiRouters
