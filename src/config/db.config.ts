import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const mongooseClient = mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log('success connect to mongoose')
})

export default mongooseClient
