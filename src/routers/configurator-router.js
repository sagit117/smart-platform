import Express from 'express'
import ConfiguratorController from '../controllers/configurator-controller.js'

const configuratorRouter = Express.Router()

configuratorRouter.get('/', (request, response) => new ConfiguratorController(request, response).render())

export default configuratorRouter
