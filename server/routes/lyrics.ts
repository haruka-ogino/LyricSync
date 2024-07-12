import { Router } from 'express'
const router = Router()
import * as db from '../db/lyrics'

router.post('/:collectionId/:songId', async (req, res) => {
  try {
    // table.increments('id').primary() will auto increment

    // table.integer('original_lang').references('languages.id')
    // table.integer('trans_lang').references('languages.id')
    // table.string('original_lyric')
    // table.string('trans_lyric')
    // table.boolean('romanisation')
    // table.string('romanised_text')

    // table.integer('song_id').references('songs.id') will be sent via api link

    const songId = Number(req.params.songId)
    // const lyrics = `${id} -lyrics`
    const lyrics = req.body
    console.log(lyrics)

    // const authId = req.body.sub
    // console.log(authId)
    const newLyrics = { ...lyrics, song_id: songId }

    console.log(lyrics)
    res.json(lyrics)

    const addedLyrics = await db.addLyrics({ ...newLyrics })

    res.status(200).json(addedLyrics)

    // router.post('/:collectionId/:songId', async (req, res) => {
    //   try {
    //     const lyrics = req.body.lyrics
    //     const authId = req.body.sub
    //     console.log(authId)
    //     console.log(lyrics)

    //     // const originalLyrics = lyrics.original_lyric
    //     // const transLyrics = lyrics.trans_lyric
    //   } catch (error) {
    //     console.log(error)
    //     res.status(500)
    //   }

    //   // try {
    //   //   const input = req.body.data
    //   //   await db.addSong(input)
    //   //   console.log(req.baseUrl)

    //   //   res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
    //   // } catch (error) {
    //   //   console.log(error)
    //   //   res.status(500)
    //   // }
    // })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
