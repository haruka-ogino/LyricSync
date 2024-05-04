import express from 'express'
import * as Path from 'node:path'

import collections from './routes/collections.ts'
import songs from './routes/songs.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/collections', collections)
server.use('/api/v1/collections', songs)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
