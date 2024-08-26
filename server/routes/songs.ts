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

router.get('/:collectionId/:songId', async (req, res) => {
  const collectionId = Number(req.params.collectionId)
  const songId = Number(req.params.songId)
  try {
    const song = await db.getSong(collectionId, songId)
    res.json(song)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.delete('/:collectionId/:songId', checkJwt, async (req, res) => {
//   try {
//     const collectionId = Number(req.params.collectionId)
//     const songId = Number(req.params.songId)

//     await db.deleteSong(collectionId, songId)
//     res.sendStatus(StatusCodes.NO_CONTENT)
//   } catch (error) {
//     console.error('Error deleting song:', error)
//     res.status(500).json({ message: 'Deleting song was failed' })
//   }
// })

// router.post('/:collectionId', checkJwt, async (req, res) => {
//   try {
//     const input = req.body.data
//     await db.addSong(input)
//     console.log(req.baseUrl)

//     res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
//   } catch (error) {
//     console.log(error)
//     res.status(500)
//   }
// })

//try w.o jwt temporarily

router.delete('/:collectionId/:songId', async (req, res) => {
  try {
    const collectionId = Number(req.params.collectionId)
    const songId = Number(req.params.songId)

    await db.deleteSong(collectionId, songId)
    res.sendStatus(StatusCodes.NO_CONTENT)
  } catch (error) {
    console.error('Error deleting song:', error)
    res.status(500).json({ message: 'Deleting song was failed' })
  }
})

router.post('/:collectionId', async (req, res) => {
  try {
    const input = req.body
    await db.addSong(input)
    console.log(req.baseUrl)

    res.setHeader('Location', req.baseUrl).sendStatus(StatusCodes.CREATED)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

export default router
