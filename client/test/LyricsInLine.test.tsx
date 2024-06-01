import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import LyricsInLine from '../components/LyricsInLine.tsx'
import { renderWithRouterAndQueryClient } from './setup.tsx'

describe('Nav', () => {
  function setUp() {
    const routes = [{ path: '/', element: <LyricsInLine lyrics={lyrics} /> }]
    renderWithRouterAndQueryClient(routes)
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

  it('displays the correct translated lyrics', () => {
    setUp()

    // Act
    const lyrics = screen.getByTestId('translated-1')
    // Assert
    expect(lyrics.textContent).toContain('my days without you.')
  })
})
