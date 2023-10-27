import {
  getAllClientsMongooseRepository,
  createClientMongooseRepository,
  getAllClientsMongoDBRepository,
  createClientMongoDBRepository,
  updateClientMongoDBRepository,
  deleteClientMongoDBRepository
} from '../repositories/client.repository.js'

export const getAllClientsMongoose = async (req, res) => {
  try {
    const clients = await getAllClientsMongooseRepository()
    res.status(200).json(clients)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createClientMongoose = async (req, res) => {
  try {
    const dbResponse = await createClientMongooseRepository(req.body)
    return dbResponse
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
export const updateClientMongoose = async (req, res) => {}
export const deleteClientMongoose = async (req, res) => {}

export const getAllClientsMongoDB = async (req, res) => {
  try {
    const clients = await getAllClientsMongoDBRepository()
    res.status(200).json(clients)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
export const createClientMongoDB = async (req, res) => {
  try {
    const client = await createClientMongoDBRepository(req.body)
    res.status(200).json(client)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
export const updateClientMongoDB = async (req, res) => {
  try {
    const client = updateClientMongoDBRepository(req.params.id, req.body)
    res.status(200).json(client)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
export const deleteClientMongoDB = async (req, res) => {
  try {
    const { id } = req.params
    await deleteClientMongoDBRepository(id)
    res.status(200).json({ message: 'Client deleted' })
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
