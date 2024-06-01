// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import nock from 'nock'
import Collections from '../pages/Collections'
import { screen } from '@testing-library/react'
import { renderWithRouterAndQueryClient } from './setup'

export function testData() {
  return [
    {
      id: 1,
      name: 'favorite',
      userId: 1,
    },
    {
      id: 2,
      name: 'frequently played',
      userId: 2,
    },
  ]
}

describe('Collections', () => {
  function setUp() {
    const routes = [{ path: '/', element: <Collections /> }]
    renderWithRouterAndQueryClient(routes)
  }

  it('Is visible on the home page', async () => {
    setUp()
    const scope = nock('http://localhost')
      .get('/api/v1/collections')
      .reply(200, testData())

    const link = await screen.findByRole('link', { name: /favorite/ })
    expect(link).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
