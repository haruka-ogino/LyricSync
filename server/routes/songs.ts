import { Router } from 'express'
import * as db from '../db/songs'
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

router.patch('/update/lyrics/:id', async (req, res) => {
  try {
    const data = req.body

    const id = Number(req.params.id)
    const { originLyrics, originLang, translatedLyrics, transLang } = data

    const newLyrics = {
      id,
      original_lyric: originLyrics,
      original_lang: originLang,
      trans_lyric: translatedLyrics,
      trans_lang: transLang,
    }

    if (!newLyrics) {
      return res.status(404).json({
        message: 'Unable to edit lyrics',
      })
    }

    const edited = await db.editLyrics(id, newLyrics)

    res.status(200).json(edited)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:collectionId', (req, res) => {
  try {
    const song = req.body
    res.json(song)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
