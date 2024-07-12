import { Router } from 'express'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const lyrics = 'hello'
    res.json(lyrics)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
