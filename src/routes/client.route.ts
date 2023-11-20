import { Router } from 'express'
import ClientController from '../controller/client.controller'
import { ModelRouter } from '../types/types'

export default class ClientRouter implements ModelRouter {

  private router: Router = Router()
  private controller: ClientController

  public readonly PATH = '/clients'

  public constructor(controller: ClientController) {
    this.controller = controller

    /**
    * @swagger
    * /clients/{id}:
    *   get:
    *     description: Get all clients data
    *     parameters:
    *       - name: id
    *         in: path
    *         required: false
    *         description: ID of the client
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Success
    *       500:
    *         description: Server error
    */
    this.router.get('/:id?', this.controller.getAllClients)
    /**
    * @swagger
    * /clients:
    *   post:
    *     description: Creates a client
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               name:
    *                 type: string
    *               lastName:
    *                 type: string
    *               phone:
    *                 type: string
    *               address:
    *                 type: object
    *                 properties:
    *                   city:
    *                     type: string
    *                   zone:
    *                     type: string
    *                   street:
    *                     type: string
    *             required:
    *               - name
    *               - lastName
    *               - phone
    *               - address
    *     responses:
    *       201:
    *         description: Success
    *       500:
    *         description: Server error
    */
    this.router.post('/', this.controller.createClient)
    /**
    * @swagger
    * /clients/{id}:
    *   put:
    *     description: Edit the information of a client
    *     parameters:
    *       - name: id
    *         in: path
    *         required: true
    *         description: ID of the client
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Success
    *       500:
    *         description: Server error
    */
    this.router.put('/:id', this.controller.updateClient)
    /**
    * @swagger
    * /clients/{id}:
    *   delete:
    *     description: Delete a client
    *     parameters:
    *       - name: id
    *         in: path
    *         required: true
    *         description: ID of the client
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Success
    *       500:
    *         description: Server error
    */
    this.router.delete('/:id', this.controller.deleteClient)
  }

  public getRouterPath() {
    return { router: this.router, path: this.PATH }
  }

}
