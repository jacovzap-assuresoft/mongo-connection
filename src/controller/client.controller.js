import { getAllClientsMongooseRepository, createClientMongooseRepository, updateClientMongooseRepository, deleteClientMongooseRepository } from '../repositories/client.repository.js'

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
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateClientMongoose = async (req, res) => {
  try {
    const dbResponse = await updateClientMongooseRepository(req.params.id, req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteClientMongoose = async (req, res) => {
  try {
    const dbResponse = await deleteClientMongooseRepository(req.params.id, req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createClientMongoDB = async (req, res) => {}

export const updateClientMongoDB = async (req, res) => {}

export const deleteClientMongoDB = async (req, res) => {}
