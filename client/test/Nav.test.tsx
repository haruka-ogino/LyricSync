import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Nav from '../components/Nav.tsx'

describe('Nav', () => {
  function setUp() {
    // Create a QueryClient instance
    const queryClient = new QueryClient()

    // Arrange
    const routes = [{ path: '/', element: <Nav /> }]
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
    const currentHeading = screen.getByRole('heading', { level: 2 })

    // Assert
    expect(currentHeading.textContent).toBe('My Collections')
  })

  it('displays the correct heading', () => {
    setUp()

    // Act
    const image = screen.getByAltText('logo') as HTMLImageElement

    // Assert
    expect(image.src).toContain('logo')
  })
})
