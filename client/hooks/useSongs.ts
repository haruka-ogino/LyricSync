import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addLyrics,
  addSong,
  editLyrics,
  getLyrics,
  getSongsByCollection,
} from '../apis/songs.ts'
import { EditedLyrics, SongData } from '../../models/songs.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { LyricsData } from '../../models/lyrics.ts'
import { useParams } from 'react-router-dom'

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

export function useSongsByCollection(collectionId: number) {
  return useQuery({
    queryKey: ['songs'],
    queryFn: () => getSongsByCollection(collectionId),
  })
}

export function useAddSong() {
  const qc = useQueryClient()
  const { getAccessTokenSilently, user } = useAuth0()
  return useMutation({
    mutationFn: async (input: SongData) => {
      const token = await getAccessTokenSilently()
      const sub = user?.sub as string

      return addSong({ input, token, sub })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['songs'] }),
  })
}

export function useAddLyrics() {
  const qc = useQueryClient()
  const { getAccessTokenSilently, user } = useAuth0()
  const { collectionId } = useParams<{ collectionId: string }>()
  return useMutation({
    mutationFn: async (lyrics: LyricsData) => {
      const token = await getAccessTokenSilently()
      const sub = String(user?.sub)

      console.log(collectionId)

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
