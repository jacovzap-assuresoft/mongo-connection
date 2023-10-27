import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import userRouter from './routes/client.route.js'
import database from './config/db.config.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', userRouter)

export default app
