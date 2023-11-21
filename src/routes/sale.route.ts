import { Router } from 'express'
import SaleController from '../controller/sale.controller'
import { ModelRouter, RouterPath } from '../types/types'


export default class SaleRouter implements ModelRouter{
  private router: Router = Router()
  private controller: SaleController

  public readonly PATH = '/sales'

  public constructor(controller: SaleController) {
    this.controller = controller

    this.router.get('/', this.controller.getAllSales)
    this.router.get('/client-sum/:id', this.controller.clientSalesTotal)
    this.router.get('/:item', this.controller.salesTotalByItem)
    this.router.post('/', this.controller.createSale)
    this.router.put('/:id', this.controller.updateSale)
    this.router.delete('/:id', this.controller.deleteSale)
  }

  getRouterPath(): RouterPath {
    return { router: this.router, path: this.PATH }
  }

}

