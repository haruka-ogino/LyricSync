import { Router } from 'express'
import * as db from '../db/lyrics'

const router = Router()

// getLyrics by songId
router.get('/:collectionId/:songId', async (req, res) => {
  const collectionId = Number(req.params.collectionId)
  const songId = Number(req.params.songId)
  const lyrics = await db.getLyrics(songId)
  try {
    if (lyrics.collectionId !== collectionId) {
      console.log('wrong collectionId; diff from params')

      return res.status(404).json({
        message: 'This collection does not contain the selected song.',
      })
    } else {
      res.json(lyrics)
    }
  } catch (error) {
    console.log(error)
    console.log('something wrong...')

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
      originalLyric: originLyrics,
      originalLang: originLang,
      transLyric: translatedLyrics,
      transLang: transLang,
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

router.post('/:songId', async (req, res) => {
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
