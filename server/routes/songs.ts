import { Router } from 'express'
import * as db from '../db/songs'
const router = Router()

// getLyrics by songId
router.get('/:collectionId/:songId', async (req, res) => {
  try {
    const collectionId = Number(req.params.collectionId)
    const songId = Number(req.params.songId)
    const lyrics = await db.getLyrics(songId)

    if (lyrics.collectionId !== collectionId) {
      return res.status(404).json({
        message: 'This collection does not contain the selected song.',
      })
    }

    res.json(lyrics)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    const { currentId, originLyrics, translatedLyrics } = data
    const newLyrics = {
      id: currentId,
      original_lyric: originLyrics,
      trans_lyric: translatedLyrics,
    }
    const id = Number(req.params.id)
    const added = await db.editLyrics(id, newLyrics)

    res.status(201).json(added)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
