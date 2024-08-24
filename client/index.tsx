import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="harakeke-2024-moa.au.auth0.com"
    clientId="UMDAOB90Ag2adEM9fXgV5brdifeq8dbH"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://LyricSync/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>,
)
