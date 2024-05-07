import { Lyrics } from '../../models/songs'

interface Props {
  lyrics: Lyrics
}

function LyricsDisplay({ lyrics }: Props) {
  return (
    <>
      <div>
        <h2>{lyrics.originLang} Lyrics:</h2>
        <p>{lyrics.originLyrics}</p>
      </div>
      <div>
        <h2>{lyrics.transLang} Lyrics:</h2>
        <p>{lyrics.translatedLyrics}</p>
      </div>
    </>
  )
}

export default LyricsDisplay
