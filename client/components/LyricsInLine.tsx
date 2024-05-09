import { Lyrics } from '../../models/songs'

interface Props {
  lyrics: Lyrics
}
export default function LyricsInLine({ lyrics }: Props) {
  const newTraLyrics = lyrics.translatedLyrics.replace(/\n\n/g, '\n \n')
  const newOriLyrics = lyrics.originLyrics.replace(/\n\n/g, '\n \n')

  const translatedArr = newTraLyrics.split('\n')
  const originalArr = newOriLyrics.split('\n')

  return (
    <>
      <h1>In-line lyrics</h1>
      {originalArr.map((line, index) =>
        line !== ' ' ? (
          <>
            <p style={{ margin: '0px' }}>{line}</p>
            <p style={{ fontStyle: 'italic', margin: '5px 0px 10px 15px' }}>
              {translatedArr[index]}
            </p>
          </>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <br />
        ),
      )}
    </>
  )
}
