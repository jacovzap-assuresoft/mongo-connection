import { Router } from 'express'
import {
  getAllClientsMongoose,
  createClientMongoDB,
  updateClientMongoDB,
  deleteClientMongoDB,
  getAllClientsMongoDB,
  createClientMongoose,
  updateClientMongoose,
  deleteClientMongoose
} from '../controller/client.controller.js'

const router = Router()

router.get('/get-all-clients-mongoose', getAllClientsMongoose)
router.post('/create-client-mongoose', createClientMongoose)
router.put('/update-client-mongoose', updateClientMongoose)
router.delete('/delete-client-mongoose', deleteClientMongoose)

router.get('/get-all-clients-mongodb', getAllClientsMongoDB)
router.post('/create-client-mongodb', createClientMongoDB)
router.put('/update-client-mongodb/:id', updateClientMongoDB)
router.delete('/delete-client-mongodb/:id', deleteClientMongoDB)

export default router
