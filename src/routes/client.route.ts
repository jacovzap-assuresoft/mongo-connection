import { Router } from 'express'
import {
  getAllClients,
  createClient,
  updateClient,
  deleteClient
} from '../controller/client.controller'

const router = Router()

router.get('/:id?', getAllClients)
router.post('/', createClient)
router.put('/:id', updateClient)
router.delete('/:id', deleteClient)

export default router
