import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import Collections from '../pages/Collections'

describe('Collections', () => {
  function setUp() {
    const routes = [{ path: '/', element: <Collections /> }]
    renderWithRouterAndQueryClient(routes)
  }

  it.skip('displays the correct heading', async () => {
    setUp()

    // Act
    const currentHeading = screen.getByRole('heading', { level: 1 })
    // Assert
    expect(currentHeading.textContent).toBe('Collections')
  })
})
