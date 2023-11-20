import { Request, Response } from 'express'
import {
  getAllSalesMongooseRepository,
  createSaleMongooseRepository,
  updateSaleMongooseRepository,
  deleteSaleMongooseRepository,
  clientSalesTotalRepository,
  salesTotalByItemRepository
} from '../repositories/sale.repository'

export const getAllSalesMongoose = async (req: Request, res: Response) => {
  try {
    const sales = await getAllSalesMongooseRepository()
    res.status(200).json(sales)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createSaleMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await createSaleMongooseRepository(req.body)
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateSaleMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateSaleMongooseRepository(
      req.params.id,
      req.body
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteSaleMongoose = async (req: Request, res: Response) => {
  try {
    const dbResponse = await deleteSaleMongooseRepository(
      req.params.id
    )
    return res.json(dbResponse)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const clientSalesTotal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const dbResponse = await clientSalesTotalRepository(id)

    const response = {
      clientId: id,
      total: dbResponse
    }

    return res.json(response)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const salesTotalByItem = async (req: Request, res: Response) => {
  try {
    const { item } = req.params
    const dbResponse = await salesTotalByItemRepository(item)

    const response = {
      item: item,
      total: dbResponse
    }

    return res.json(response)
  } catch {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
