import { getAllClientsMongooseRepository } from '../repositories/client.repository.js'

export const getAllClientsMongoose = async (req, res) => {
  try {
    const clients = await getAllClientsMongooseRepository()
    res.status(200).json(clients)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createClientMongoose = async (req, res) => {}

export const updateClientMongoose = async (req, res) => {}

export const deleteClientMongoose = async (req, res) => {}

export const createClientMongoDB = async (req, res) => {}

export const updateClientMongoDB = async (req, res) => {}

export const deleteClientMongoDB = async (req, res) => {}
