import express from 'express'
import * as Path from 'node:path'

import collections from './routes/collections.ts'
import songs from './routes/songs.ts'
import users from './routes/users.ts'
import lyrics from './routes/lyrics.ts'
import languages from './routes/languages.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/users', users)
server.use('/api/v1/collections', collections)
server.use('/api/v1/collections', songs)
server.use('/api/v1/collections', lyrics)
server.use('/api/v1/languages', languages)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
