import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addSong,
  editLyrics,
  getLyrics,
  getSongsByCollection,
} from '../apis/songs.ts'
import { AddSong, EditedLyrics, SongData } from '../../models/songs.ts'

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
  return useMutation({
    mutationFn: (input: SongData) => addSong(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newSong'] }),
  })
}
