import { useQuery } from '@tanstack/react-query'
import { getLanguage } from '../apis/language'

export function useLanguage() {
  return useQuery({
    queryKey: ['language'],
    queryFn: getLanguage,
  })
}
