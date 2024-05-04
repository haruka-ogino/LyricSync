import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/collections'
import { CollectionData } from '../../models/collections'

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: api.getCollections,
  })
}

export function useAddCollection() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: CollectionData) => api.addCollection(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newCollection'] }),
  })
}
