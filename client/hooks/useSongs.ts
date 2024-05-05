import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getLyrics } from '../apis/songs.ts'

export function useLyrics(songId: number, collectionId: number) {
  return useQuery({
    queryKey: ['lyrics', songId, collectionId],
    queryFn: () => getLyrics(songId, collectionId),
  })
}

export function useFruitsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })

  return mutation
}
