import { Router } from 'express'
import * as db from '../db/user'
import { JwtRequest } from '../auth0'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req: JwtRequest, res) => {
  const { id } = req.body
  const { auth } = req
  const existingUser = db.getUserById(id)
  if (!existingUser) {
    try {
      await db.addUser(auth?.user.sub)
      res.sendStatus(201).send('Added user')
    } catch (error) {
      console.log(error)
      console.log(auth?.user.sub)

      res.status(500).json({ message: 'Something went wrong adding user' })
    }
  }
})

export default router
