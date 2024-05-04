import { Router } from 'express'
import * as db from '../db/collections'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const collections = await db.getCollections()
    res.json(collections)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addCollection(data)
    res.status(201)
  } catch (error) {
    res.status(500)
  }
})

export default router
