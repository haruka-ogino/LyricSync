import { Router } from 'express'
import * as db from '../db/songs'
const router = Router()

// getLyrics by songId
router.get('/:collectionId/:songId', async (req, res) => {
  try {
    const collectionId = Number(req.params.collectionId)
    const songId = Number(req.params.songId)
    const lyrics = await db.getLyrics(songId)
    if (lyrics.collectionId === collectionId) {
      res.json(lyrics)
    } else {
      res.json({
        message: 'This collection does not contain the selected song.',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
