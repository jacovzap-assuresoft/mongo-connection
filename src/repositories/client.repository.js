import Client from '../models/Client.js'

export const getAllClientsMongooseRepository = async () => {
    return Client.find()
}

export const createClientMongooseRepository = async (clientData) => {
    return Client.create(clientData)
}
