import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/collections'
import { CollectionDataFE } from '../../models/collections'
import { useAuth0 } from '@auth0/auth0-react'

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: api.getCollections,
  })
}

export function useAddCollection() {
  const qc = useQueryClient()
  const { getAccessTokenSilently, user } = useAuth0()

  return useMutation({
    mutationFn: async (data: CollectionDataFE) => {
      const token = await getAccessTokenSilently()
      const userId = user?.sub as string
      const name = data.name

      return api.addCollection({ name, userId, token })
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
