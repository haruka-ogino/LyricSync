import { Lyrics } from '../../models/songs'

interface Props {
  lyrics: Lyrics
}
export default function LyricsInLine({ lyrics }: Props) {
  // to display line by line,
  // 1. find \n\n and replace it with '\nspace\n'
  // console.log(lyrics.translatedLyrics)
  // console.log(lyrics.originLyrics)

  const newTraLyrics = lyrics.translatedLyrics.replace(/\n\n/g, '\nspace\n')
  // console.log(newTraLyrics)

  const newOriLyrics = lyrics.originLyrics.replace(/\n\n/g, '\nspace\n')
  // console.log(newOriLyrics)

  // 2. make an array for each set or lyrics (or and tr)
  // where the end of each line is denoted by \n

  const translatedArr = newTraLyrics.split('\n')
  // console.log(translatedArr)

  const originalArr = newOriLyrics.split('\n')
  // console.log(originalArr)

  // 3. display the lyrics by mapping through the or array
  // using the index from the map method to to also display the tr array
  // 4. style these two lines differently
  // 5. add state where user can choose how to display the data
  // 6. implement these states

  return (
    <>
      <h1>In-line lyrics</h1>
      {originalArr.map((line, index) =>
        line !== 'space' ? (
          <>
            <p>{line}</p>
            <p>{translatedArr[index]}</p>
          </>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <br />
        ),
      )}
    </>
  )
}
