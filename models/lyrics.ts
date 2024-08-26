export interface LyricsData {
  original_lang: number
  trans_lang: number
  original_lyric: string
  trans_lyric: string
  romanisation: boolean
  romanised_text: string
  song_id: number
}

export interface AddLyrics {
  originalLang: number
  transLang: number
  originalLyric: string
  transLyric: string
  romanisation: boolean
  romanisedText: string
  songId: number
}
export interface Lyrics extends LyricsData {
  id: number
}
export interface LyricsInfo extends Lyrics {
  songTitle: string
  collectionId: number
}
