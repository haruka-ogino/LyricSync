import { useAuth0 } from '@auth0/auth0-react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { LyricsData } from '../../models/lyrics'
import { addLyrics } from '../apis/lyrics'

export function useAddLyrics() {
  const qc = useQueryClient()
  const { getAccessTokenSilently, user } = useAuth0()
  const { collectionId } = useParams<{ collectionId: string }>()
  return useMutation({
    mutationFn: async (lyrics: LyricsData) => {
      const token = await getAccessTokenSilently()
      const sub = String(user?.sub)

      return addLyrics({
        lyrics,
        collectionId: Number(collectionId),
        token,
        sub,
      })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newLyrics'] }),
  })
}
