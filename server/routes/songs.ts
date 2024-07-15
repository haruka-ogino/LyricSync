import { Router } from 'express'
import * as db from '../db/songs'
import checkJwt from '../auth0'
import { StatusCodes } from 'http-status-codes'
const router = Router()

router.get('/:collectionId', async (req, res) => {
  const collectionId = Number(req.params.collectionId)
  try {
    const collections = await db.getSongsByCollection(collectionId)
    res.json(collections)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:collectionId', checkJwt, async (req, res) => {
  try {
    const input = req.body.data
    await db.addSong(input)
    console.log(req.baseUrl)

    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

export default router
