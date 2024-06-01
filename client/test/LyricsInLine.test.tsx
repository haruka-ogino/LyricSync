import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Nav from '../components/Nav.tsx'
import LyricsInLine from '../components/LyricsInLine.tsx'

describe('Nav', () => {
  function setUp() {
    // Create a QueryClient instance
    const queryClient = new QueryClient()

    // Arrange
    const routes = [{ path: '/', element: <LyricsInLine lyrics={lyrics} /> }]
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    )
  }

  const lyrics = {
    id: 2,
    songId: 4,
    songTitle: 'Moscas en la casa',
    originLang: 'Spanish',
    transLang: 'English',
    originLangId: 2,
    transLangId: 1,
    originLyrics:
      'Mis días sin ti son tan oscuros\nTan largos, tan grises, mis días sin ti.',

    translatedLyrics:
      'My days without you are so dark,\nSo long, so grey, my days without you.',
    romanisation: false,
    romanisedLyrics: '',
    collectionId: 1,
  }

  it('displays the correct heading', () => {
    setUp()

    // Act
    const currentHeading = screen.getByRole('heading', { level: 1 })
    // Assert
    expect(currentHeading.textContent).toContain('lyrics')
  })

  it('displays the correct original lyrics', () => {
    setUp()

    // Act
    const lyrics = screen.getByTestId('0')
    // Assert
    expect(lyrics.textContent).toContain('Mis días sin ti son tan oscuros')
  })
})
