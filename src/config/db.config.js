import mongodb from 'mongodb'
import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const mongoClient = new mongodb.MongoClient(process.env.MONGO_URI)
await mongoClient.connect()

const mongooseClient = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('success connect to mongoose')
})

export default { mongooseClient, mongoClient }
