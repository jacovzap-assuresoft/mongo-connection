import Client from '../models/Client.js'

export const getAllClientsMongooseRepository = async () => {
    return Client.find()
}

export const createClientMongooseRepository = async (clientData) => {
    return Client.create(clientData)
}

export const updateClientMongooseRepository = async (clientId, clientData) => {
    return Client.findByIdAndUpdate(clientId, clientData)
}

export const deleteClientMongooseRepository = async (clientId, clientData) => {
    return Client.findByIdAndRemove(clientId, clientData)
}
