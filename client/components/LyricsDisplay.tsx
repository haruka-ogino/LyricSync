import { Lyrics } from '../../models/songs'

interface Props {
  lyrics: Lyrics
  lang: string
}

function LyricsDisplay({ lyrics, lang }: Props) {
  return (
    <>
      {lang === 'original' && (
        <div>
          <h2>{lyrics.originLang} Lyrics:</h2>
          <p>{lyrics.originLyrics}</p>
        </div>
      )}
      {lang === 'translated' && (
        <div>
          <h2>{lyrics.transLang} Lyrics:</h2>
          <p>{lyrics.translatedLyrics}</p>
        </div>
      )}
    </>
  )
}

export default LyricsDisplay
