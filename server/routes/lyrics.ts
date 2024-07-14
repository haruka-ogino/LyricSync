import { Router } from 'express'
import * as db from '../db/lyrics'
import checkJwt from '../auth0'

const router = Router()

router.post('/:collectionId/:songId', checkJwt, async (req, res) => {
  try {
    const songId = Number(req.params.songId)
    const lyrics = req.body

    const newLyrics = { ...lyrics, song_id: songId }

    const addedLyrics = await db.addLyrics({ ...newLyrics })

    res.status(200).json(addedLyrics)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
