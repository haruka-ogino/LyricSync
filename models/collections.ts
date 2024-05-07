export interface CollectionData {
  name: string
  user_id: number
}

export interface Collection extends CollectionData {
  id: number
}

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
}
