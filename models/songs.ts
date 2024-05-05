export interface Fruit {
  id: number
  name: string
}

export interface FruitData {
  name: string
}

export interface Lyrics {
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
