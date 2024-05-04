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

export default router
