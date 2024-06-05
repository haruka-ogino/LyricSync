import request from 'supertest'

import server from '../server'
import { expect, test } from 'vitest'

test('/api/v1/collections/1 returns Jung Kook', async () => {
  // Arrange
  const expected = 'Jung Kook'
  // {
  //   id: 3,
  //   title: 'Seven',
  //   artist: 'Jung Kook',
  //   collectionId: 1,
  //   collectionName: 'favorite',
  // }

  try {
    // Act
    const res = await request(server).get('/api/v1/collections/1')

    // Log the response for debugging
    console.log(res.status) // HTTP status code
    console.log(res.text) // Response body

    // Assert
    expect(res.text).toContain(expected)
  } catch (error) {
    console.error('Error in test:', error)
    throw error // Re-throw the error to fail the test if something goes wrong
  }
})

// cleintId =LzEYnHDT80PKK2dxywN5hIQ7GQqZ9Osq
// identifier = https://lyric-sync/api
