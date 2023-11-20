import ClientSchema from '../models/Client'
import { Client } from '../types/types'

export const getAllClientsMongooseRepository = async () => {
  return ClientSchema.find()
}

export const createClientMongooseRepository = async (clientData: Client) => {
  return ClientSchema.create(clientData)
}

export const updateClientMongooseRepository = async (clientId: string, clientData: Client) => {
  return ClientSchema.findByIdAndUpdate(clientId, clientData)
}

export const deleteClientMongooseRepository = async (clientId: string) => {
  return ClientSchema.findByIdAndRemove(clientId)
}
