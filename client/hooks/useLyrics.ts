import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AddLyrics } from '../../models/lyrics'
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
  return useMutation({
    mutationFn: async (lyrics: AddLyrics) => addLyrics(lyrics),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['lyrics'] }),
  })
}
