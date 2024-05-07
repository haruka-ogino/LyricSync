export interface Lyrics {
  id: number
  songId: number
  songTitle: string
  originLang: string
  transLang: string
  originLyrics: string
  translatedLyrics: string
  romanisation: string
  romanisedLyrics: string
  collectionId: number
}

export interface Message {
  message: string
}

export interface EditedOrLyrics {
  id: number
  originLyrics: string
  originLang: string
}

export interface EditedTrLyrics {
  id: number
  translatedLang: string
  translatedLyrics: string
}
