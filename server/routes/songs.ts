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

router.patch('/update/origin/:id', async (req, res) => {
  try {
    const data = req.body
    const { currentId, originLyrics, originLang } = data
    const newLyrics = {
      id: currentId,
      original_lyric: originLyrics,
      original_lang: originLang,
    }
    const id = Number(req.params.id)
    const edited = await db.editLyrics(id, newLyrics)

    res.status(200).json(edited)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/update/origin/:id', async (req, res) => {
  try {
    const data = req.body
    const { currentId, translatedLyrics, transLang } = data
    const newLyrics = {
      id: currentId,
      trans_lyric: translatedLyrics,
      trans_lang: transLang,
    }
    const id = Number(req.params.id)
    const edited = await db.editLyrics(id, newLyrics)

    res.status(200).json(edited)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
