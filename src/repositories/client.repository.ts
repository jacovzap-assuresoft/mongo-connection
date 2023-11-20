import ClientSchema from '../models/Client'
import { Client } from '../types/types'

export const getAllClientsRepository = async () => {
  return ClientSchema.find()
}

export const createClientRepository = async (clientData: Client) => {
  return ClientSchema.create(clientData)
}

export const updateClientRepository = async (clientId: string, clientData: Client) => {
  return ClientSchema.findByIdAndUpdate(clientId, clientData)
}

export const deleteClientRepository = async (clientId: string) => {
  return ClientSchema.findByIdAndRemove(clientId)
}
