import { RouterPath } from './src/types/types'
import ClientController from './src/controller/client.controller'
import ClientRepository from './src/repositories/client.repository'
import ClientRouter from './src/routes/client.route'
import SaleRepository from './src/repositories/sale.repository'
import SaleController from './src/controller/sale.controller'
import SaleRouter from './src/routes/sale.route'
import Server from './src/server'

const clientRepository = new ClientRepository()
const clientController = new ClientController(clientRepository)
const clientRouter = new ClientRouter(clientController)

const saleRepository = new SaleRepository()
const saleController = new SaleController(saleRepository)
const saleRouter = new SaleRouter(saleController)

const routers: Array<RouterPath> = []
routers.push(clientRouter.getRouterPath())
routers.push(saleRouter.getRouterPath())

const server = new Server(routers) // WIP: server factory because of complex building? :(

server.getApp().listen(3000, () => {
  console.log('Mongo server is listening on port 3000')
})
