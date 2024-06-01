import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('display the correct logo', () => {
    setUp()

    // Act
    const image = screen.getByAltText('logo') as HTMLImageElement
    // Assert
    expect(image.src).toContain('logo')
  })

  it('Button click displays the list', async () => {
    setUp()
    const button = screen.getByRole('button', { name: '▼' })
    const user = userEvent.setup()

    // Act
    await user.click(button)
    const collection = screen.getByTestId('0')

    // ASSERT
    expect(collection.textContent).toBe('favorite')
  })
})
