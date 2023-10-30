import mongodb from 'mongodb'
import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

const client = new mongodb.MongoClient(process.env.MONGO_URI)
await client.connect()
const mongoClient = client.db('STORE')

const mongooseClient = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('success connect to mongoose')
})

export default { mongooseClient, mongoClient }
