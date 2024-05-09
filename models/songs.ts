export interface Lyrics {
  id: number
  songId: number
  songTitle: string
  originLang: string
  transLang: string
  originLangId: number
  transLangId: number
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

export interface EditedLyrics {
  id: number
  originLyrics: string
  originLang: number
  translatedLang: number
  translatedLyrics: string
}

export interface SongData {
  title: string
  artist: string
  collectionId: number
}
