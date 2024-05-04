import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/collections'
import { Collection } from '../../models/collections'

// export async function useCollections() {
//   return useQuery({
//     queryKey: ['collections'],
//     queryFn: () => api.getCollections(),
//   })
// }

export function useCollections() {
  const query = useQuery({ queryKey: ['fruits'], queryFn: api.getCollections })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}
