import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import userRouter from './routes/client.route.js'
import saleRouter from './routes/sale.route.js'
import _ from './config/db.config.js' // Mongo connection init

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/sales', saleRouter)
app.use('/clients', userRouter)

export default app
