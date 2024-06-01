import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

beforeEach(cleanup)
expect.extend(matchers)

export function renderWithRouterAndQueryClient(
  routes: {
    path: string
    element: JSX.Element
  }[],
  initialEntries = ['/'],
) {
  // Create a QueryClient instance
  const queryClient = new QueryClient()

  // Create a memory router
  const router = createMemoryRouter(routes, {
    initialEntries,
  })

  // Render the component with QueryClientProvider and RouterProvider
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
}
