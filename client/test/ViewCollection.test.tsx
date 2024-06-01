// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import nock from 'nock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Collections from '../pages/Collections'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

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
    // Create a QueryClient instance
    const queryClient = new QueryClient()

    // Arrange
    const routes = [{ path: '/', element: <Collections /> }]
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    )
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
