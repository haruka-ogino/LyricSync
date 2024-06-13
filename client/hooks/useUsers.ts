import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import * as api from '../apis/users'
import { User } from '../../models/users'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: api.getUsers,
  })
}

export function useAddUser(): UseMutationResult<void, Error, User, unknown> {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (user: User) => {
      const existingUser = await api.getUserById(user.id)
      console.log(user.id)
      console.log('existing? ', typeof existingUser)

      if (!existingUser) {
        console.log('added user ' + user.id)

        await api.addUser(user)
      }
    },
    onSuccess: () => client.invalidateQueries({ queryKey: ['users'] }),
  })
}
