import { Router } from 'express'
import * as db from '../db/collections'
import checkJwt, { JwtRequest } from '../auth0'
import { StatusCodes } from 'http-status-codes'
const router = Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const authId = String(req.auth?.sub)
    const collections = await db.getCollections(authId)
    res.json(collections)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const data = req.body
    const authId = String(req.auth?.sub)
    const newCollection = { name: data.name, user_id: authId }

    await db.addCollection(newCollection)
    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (error) {
    res.status(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteCollection(id)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
