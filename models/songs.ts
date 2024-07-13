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

export interface Song extends SongData {
  id: number
}

export interface AddSong {
  title: string
  artist: string
}
