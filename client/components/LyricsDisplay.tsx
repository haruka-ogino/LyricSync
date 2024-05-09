import { useState } from 'react'
import { Lyrics } from '../../models/songs'
import EditLyrics from './EditLyrics'

interface Props {
  lyrics: Lyrics
  lang: string
}

function LyricsDisplay({ lyrics, lang }: Props) {
  const [editOr, setEditOr] = useState(false)
  const [editTr, setEditTr] = useState(false)
  // to display line by line,
  // 1. find \n\n and replace it with '\nspace\n'
  // 2. make an array for each set or lyrics (or and tr)
  // where the end of each line is denoted by \n
  // 3. display the lyrics by mapping through the or array
  // using the index from the map method to to also display the tr array
  // 4. style these two lines differently
  // 5. add state where user can choose how to display the data
  // 6. implement these states

  return (
    <>
      {lang === 'original' &&
        (!editOr ? (
          <div>
            <button onClick={() => setEditOr(true)}>Edit Original</button>
            <h2>{lyrics.originLang} Lyrics:</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: lyrics.originLyrics.replace(/\n/g, '<br>'),
              }}
            />
          </div>
        ) : (
          <EditLyrics
            lyrics={lyrics}
            lang={lang}
            setEditOr={setEditOr}
            setEditTr={setEditTr}
          />
        ))}
      {lang === 'translated' &&
        (!editTr ? (
          <div>
            <button onClick={() => setEditTr(true)}>Edit Translation</button>
            <h2>{lyrics.transLang} Lyrics:</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: lyrics.translatedLyrics.replace(/\n/g, '<br>'),
              }}
            />
          </div>
        ) : (
          <EditLyrics
            lyrics={lyrics}
            lang={lang}
            setEditTr={setEditTr}
            setEditOr={setEditOr}
          />
        ))}
    </>
  )
}

export default LyricsDisplay
