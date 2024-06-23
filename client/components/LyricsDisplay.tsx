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
      <div>
        {lang === 'original' &&
          (!editOr ? (
            <>
              <button onClick={() => setEditOr(true)}>Edit Original</button>
              <h2>{lyrics.originLang} Lyrics:</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: lyrics.originLyrics.replace(/\n/g, '<br>'),
                }}
              />
            </>
          ) : (
            <EditLyrics
              lyrics={lyrics}
              lang={lang}
              setEditOr={setEditOr}
              setEditTr={setEditTr}
            />
          ))}
      </div>
      <div style={{ paddingRight: '50px' }}>
        {' '}
        {lang === 'translated' &&
          (!editTr ? (
            <>
              <button onClick={() => setEditTr(true)}>Edit Translation</button>
              <h2>{lyrics.transLang} Lyrics:</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: lyrics.translatedLyrics.replace(/\n/g, '<br>'),
                }}
              />
            </>
          ) : (
            <EditLyrics
              lyrics={lyrics}
              lang={lang}
              setEditTr={setEditTr}
              setEditOr={setEditOr}
            />
          ))}
      </div>
    </>
  )
}

export default LyricsDisplay
