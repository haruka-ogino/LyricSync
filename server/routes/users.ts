import { Router } from 'express'
import * as db from '../db/user'
import checkJwt from '../auth0'
const router = Router()

router.get('/', checkJwt, async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
