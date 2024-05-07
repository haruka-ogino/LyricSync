import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { editLyrics, getLyrics } from '../apis/songs.ts'
import { EditedLyrics } from '../../models/songs.ts'

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
