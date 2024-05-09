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

  return (
    <>
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
      </>
      <>
        {' '}
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
    </>
  )
}

export default LyricsDisplay
