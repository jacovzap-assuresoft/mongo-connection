import Client from '../models/Client.js'

export const getAllClientsMongooseRepository = async () => {
    return Client.find()
}