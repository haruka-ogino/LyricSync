import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/collections'

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: api.getCollections,
  })
}
