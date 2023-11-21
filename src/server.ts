import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'

import swaggerSpecs from '../swagger'
import './config/db.config' // Mongo connection init

import { RouterPath } from './types/types'

export default class Server {

  private app = express()

  public constructor(paths: Array<RouterPath>) {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())

    paths.forEach((routerPath) => {
      this.app.use(routerPath.path, routerPath.router)
    })
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  }

  public getApp() {
    return this.app
  }
}
