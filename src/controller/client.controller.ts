import { Request, Response } from 'express'
import {
  getAllClientsMongooseRepository,
  createClientMongooseRepository,
  updateClientMongooseRepository,
  deleteClientMongooseRepository
} from '../repositories/client.repository'

export const getAllClientsMongoose = async (req: Request, res: Response) => {
  try {
    const clients = await getAllClientsMongooseRepository()
    return res.status(200).json(clients)
  } catch (err: any) {
    res.status(500).json({ message: err.message, stack: err.stack })
  }
}

export const createClientMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await createClientMongooseRepository(req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateClientMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateClientMongooseRepository(
      req.params.id,
      req.body
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteClientMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await deleteClientMongooseRepository(
      req.params.id
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
