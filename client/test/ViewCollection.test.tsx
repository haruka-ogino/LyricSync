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

  it.skip('displays the correct heading', async () => {
    setUp()

    // Act
    const currentHeading = screen.getByRole('heading', { level: 1 })
    // Assert
    expect(currentHeading.textContent).toBe('Collections')
  })
})
