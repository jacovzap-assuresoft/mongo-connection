import SaleSchema from '../models/Sale'
import { Sale } from '../types/types'

export default class SaleRepository {

  async getAllSales() {
    return SaleSchema.find().populate('clientId')
  }

  async createSale(saleData: Sale) {
    return SaleSchema.create(saleData)
  }

  async updateSale(saleId: string, saleData: Sale) {
    return SaleSchema.findByIdAndUpdate(saleId, saleData)
  }

  async deleteSale(saleId: string) {
    return SaleSchema.findByIdAndRemove(saleId)
  }

  async clientSalesTotal(clientId: string) {
    return (await SaleSchema.find({ clientId: clientId })).reduce(((sum, sale) => sum + sale.price), 0)
  }

  async salesTotalByItem(item: string) {
    return (await SaleSchema.find({ item: item })).reduce(((sum, sale) => sum + sale.price), 0)
  }
}
