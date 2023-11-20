import { Request, Response } from 'express'
import {
  getAllClientsRepository,
  createClientRepository,
  updateClientRepository,
  deleteClientRepository
} from '../repositories/client.repository'

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await getAllClientsRepository()
    return res.status(200).json(clients)
  } catch (err: any) {
    res.status(500).json({ message: err.message, stack: err.stack })
  }
}

export const createClient = async (req: Request, res: Response) => {
  try {
    const dbResponse = await createClientRepository(req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateClient = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateClientRepository(
      req.params.id,
      req.body
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const dbResponse = await deleteClientRepository(
      req.params.id
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
