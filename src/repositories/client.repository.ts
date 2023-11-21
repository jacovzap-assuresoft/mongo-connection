import ClientSchema from '../models/Client'
import { Client } from '../types/types'

export default class ClientRepository {

  async getAllClients() {
    return ClientSchema.find()
  }

  async createClient(clientData: Client) {
    return ClientSchema.create(clientData)
  }

  async updateClient(clientId: string, clientData: Client) {
    return ClientSchema.findByIdAndUpdate(clientId, clientData)
  }

  async deleteClient(clientId: string) {
    return ClientSchema.findByIdAndRemove(clientId)
  }
}
