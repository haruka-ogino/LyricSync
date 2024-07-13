import { useAuth0 } from '@auth0/auth0-react'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { LyricsData } from '../../models/lyrics'
import { addLyrics, editLyrics, getLyrics } from '../apis/lyrics'
import { EditedLyrics } from '../../models/songs'

export function useLyrics(songId: number, collectionId: number) {
  return useQuery({
    queryKey: ['lyrics', songId, collectionId],
    queryFn: () => getLyrics(songId, collectionId),
  })
}

export function useEditLyrics() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (lyrics: EditedLyrics) => editLyrics(lyrics),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['lyrics'] }),
  })
}

export function useAddLyrics() {
  const qc = useQueryClient()
  const { getAccessTokenSilently, user } = useAuth0()
  const { collectionId } = useParams<{ collectionId: string }>()
  const { songId } = useParams<{ songId: string }>()
  return useMutation({
    mutationFn: async (lyrics: LyricsData) => {
      const token = await getAccessTokenSilently()
      const sub = String(user?.sub)

      return addLyrics({
        lyrics,
        collectionId: Number(collectionId),
        songId: Number(songId),
        token,
        sub,
      })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['lyrics'] }),
  })
}
