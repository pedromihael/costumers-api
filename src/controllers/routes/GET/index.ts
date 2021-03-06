import { Router, Request, Response } from 'express'
import { ListCostumersController } from '../../GET/ListCostumersController';
import { GetCostumerByIdController } from '../../GET/GetCostumerController';

const router = Router()

router.get('/list-costumers/', async (req: Request, res: Response) => {
  const response = await ListCostumersController()
  res.status(response.status).send(response)
})

router.get('/get-costumer/', async (req: Request, res: Response) => {
  const response = await GetCostumerByIdController(req)
  res.status(response.status).send(response)
})

router.get('/get-costumer/:paramname/:param', async (req: Request, res: Response) => {
  const response = await GetCostumerByIdController(req)
  res.status(response.status).send(response)
})

router.get('/get-costumer/:paramname/', async (req: Request, res: Response) => {
  const response = await GetCostumerByIdController(req)
  res.status(response.status).send(response)
})

router.get('/health-check', (req, res) => {
  res.status(200).send("Get Costumers is ok.")
})

export default router;