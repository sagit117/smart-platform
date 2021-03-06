import Express, {response} from 'express'
import UsersApiController from '../../controllers/api/users-controller'

const usersApiRouters = Express.Router()

usersApiRouters.post('/registration', (request, response) => new UsersApiController(request, response).registrationWithEmail())
usersApiRouters.post('/login', (request,  response) => new UsersApiController(request, response).loginWithEmail())
usersApiRouters.get('/restore-password/:email', (request, response) => new UsersApiController(request, response).sendEmailForRestorePath())
usersApiRouters.post('/change-password', (request, response) => new UsersApiController(request, response).changePassWithHash())

export default usersApiRouters
