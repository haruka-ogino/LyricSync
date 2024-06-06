import { Router } from 'express'
import * as db from '../db/collections'
import { useParams } from 'react-router-dom'
import checkJwt from '../auth0'
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

router.post('/', checkJwt, async (req, res) => {
  try {
    const { data, sub } = req.body

    const newCollection = { name: data.name, user_id: sub }
    console.log(newCollection)

    await db.addCollection(newCollection)
    res.status(201)
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
