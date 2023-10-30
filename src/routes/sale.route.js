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

router.get('/get-all-sales-mongoose', getAllSalesMongoose)
router.get('/client-sales-total/:id', clientSalesTotal)
router.get('/item-sales-total/:item', salesTotalByItem)
router.post('/create-sale-mongoose', createSaleMongoose)
router.put('/update-sale-mongoose/:id', updateSaleMongoose)
router.delete('/delete-sale-mongoose/:id', deleteSaleMongoose)

export default router
