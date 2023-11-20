import { Router } from 'express'
import {
  getAllSalesMongoose,
  createSaleMongoose,
  updateSaleMongoose,
  deleteSaleMongoose,
  clientSalesTotal,
  salesTotalByItem,
} from '../controller/sale.controller.js'

const router = Router()

router.get('/', getAllSalesMongoose)
router.get('/client-sum/:id', clientSalesTotal)
router.get('/item/:item', salesTotalByItem)
router.post('/', createSaleMongoose)
router.put('/:id', updateSaleMongoose)
router.delete('/:id', deleteSaleMongoose)

export default router
