import { Router } from 'express'
import * as db from '../db/user'
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

router.get('/:id', async (req, res) => {
  const id = String(req.params.id)
  try {
    const user = await db.getUserById(id)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const { id, nickname } = req.body
  const existingUser = await db.getUserById(id)

  if (!existingUser) {
    try {
      await db.addUser({ id, nickname })
      res.sendStatus(201).send('Added user')
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something went wrong adding user' })
    }
  }
})

export default router
