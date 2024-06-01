import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Collections from '../pages/Collections'

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

  it('displays the correct heading', () => {
    setUp()

    // Act
    const currentHeading = screen.getByRole('heading', { level: 1 })
    // Assert
    expect(currentHeading.textContent).toBe('Collections')
  })
})
