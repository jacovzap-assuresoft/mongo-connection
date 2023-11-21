import { Request, Response } from 'express'
import SaleRepository from '../repositories/sale.repository'

export default class SaleController {
  private repository: SaleRepository

  public constructor(repository: SaleRepository) {
    this.repository = repository

    this.getAllSales = this.getAllSales.bind(this)
    this.createSale = this.createSale.bind(this)
    this.updateSale = this.updateSale.bind(this)
    this.deleteSale = this.deleteSale.bind(this)
    this.clientSalesTotal = this.clientSalesTotal.bind(this)
    this.salesTotalByItem = this.salesTotalByItem.bind(this)
  }

  async getAllSales(req: Request, res: Response) {
    try {
      const sales = await this.repository.getAllSales()
      res.status(200).json(sales)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async createSale(req: Request, res: Response) {
    try {
      const dbResponse = await this.repository.createSale(req.body)
      return res.json(dbResponse)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async updateSale(req: Request, res: Response) {
    try {
      const dbResponse = await this.repository.updateSale(
        req.params.id,
        req.body
      )
      return res.json(dbResponse)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async deleteSale(req: Request, res: Response) {
    try {
      const dbResponse = await this.repository.deleteSale(
        req.params.id
      )
      return res.json(dbResponse)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async clientSalesTotal(req: Request, res: Response) {
    try {
      const { id } = req.params
      const dbResponse = await this.repository.clientSalesTotal(id)

      const response = {
        clientId: id,
        total: dbResponse
      }

      return res.json(response)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }

  async salesTotalByItem(req: Request, res: Response) {
    try {
      const { item } = req.params
      const dbResponse = await this.repository.salesTotalByItem(item)

      const response = {
        item: item,
        total: dbResponse
      }

      return res.json(response)
    } catch {
      res.status(500).json({ message: 'Something went wrong' })
    }
  }
}
