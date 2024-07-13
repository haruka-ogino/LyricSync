import { useQuery } from '@tanstack/react-query'
import { getLanguages } from '../apis/language'

export function useLanguage() {
  return useQuery({
    queryKey: ['language'],
    queryFn: getLanguages,
  })
}
