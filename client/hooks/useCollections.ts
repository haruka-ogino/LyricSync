import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/collections'
import { CollectionData } from '../../models/collections'
import { useAuth0 } from '@auth0/auth0-react'

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: api.getCollections,
  })
}

export function useAddCollection() {
  const qc = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  return useMutation({
    mutationFn: async (data: CollectionData) => {
      const token = await getAccessTokenSilently()
      console.log(token.sub)

      return api.addCollection({ data, token })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newCollection'] }),
  })
}

export function useDeleteCollection() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => api.deleteCollection(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['deleteCollection'] }),
  })
}
