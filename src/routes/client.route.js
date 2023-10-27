import { Router } from 'express'
import {
  getAllClientsMongoose,
  createClientMongoDB,
  updateClientMongoDB,
  deleteClientMongoDB,
  createClientMongoose,
  updateClientMongoose,
  deleteClientMongoose
} from '../controller/client.controller.js'

const router = Router()

router.get('/get-all-clients-mongoose', getAllClientsMongoose)
router.post('/create-client-mongoose', createClientMongoose)
router.put('/update-client-mongoose', updateClientMongoose)
router.delete('/delete-client-mongoose', deleteClientMongoose)

router.post('/create-client-mongodb', createClientMongoDB)
router.put('/update-client-mongoose', updateClientMongoDB)
router.delete('/delete-client-mongodb', deleteClientMongoDB)

export default router