import { Lyrics } from '../../models/songs'

interface Props {
  lyrics: Lyrics
}
export default function LyricsInLine({ lyrics }: Props) {
  return (
    <>
      <h1>In-line lyrics</h1>
    </>
  )
}
