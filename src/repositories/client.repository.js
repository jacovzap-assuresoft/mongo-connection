import Client from '../models/Client.js'

import database from '../config/db.config.js'

const clients = database.mongoClient.collection('clients')

export const getAllClientsMongooseRepository = async () => {
  return Client.find()
}

export const createClientMongooseRepository = async clientData => {
  return Client.create(clientData)
}

export const updateClientMongooseRepository = async (clientId, clientData) => {
  return Client.findByIdAndUpdate(clientId, clientData)
}

export const deleteClientMongooseRepository = async (clientId, clientData) => {
  return Client.findByIdAndRemove(clientId, clientData)
}

export const getAllClientsMongoDBRepository = async () => {
  return clients.find().toArray()
}

export const createClientMongoDBRepository = async clientData => {
  return clients.insertOne(clientData)
}

export const updateClientMongoDBRepository = async (id, clientData) => {
  return clients.updateOne({ _id: id }, { $set: clientData })
}

export const deleteClientMongoDBRepository = async id => {
  await clients.deleteOne({ _id: id })
}
