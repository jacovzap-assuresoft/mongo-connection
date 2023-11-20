import { Router } from 'express'
import {
  getAllClientsMongoose,
  createClientMongoose,
  updateClientMongoose,
  deleteClientMongoose
} from '../controller/client.controller'

const router = Router()

router.get('/:id?', getAllClientsMongoose)
router.post('/', createClientMongoose)
router.put('/:id', updateClientMongoose)
router.delete('/:id', deleteClientMongoose)

export default router
