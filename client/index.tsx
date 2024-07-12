import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

// if (!import.meta.env.REACT_APP_DOMAIN) {
//   throw new Error('AUTH0_DOMAIN is not defined')
// }

// if (!import.meta.env.REACT_APP_ID) {
//   throw new Error('AUTH0_ID is not defined')
// }

// const domain = process.env.REACT_APP_DOMAIN as string
// const clientId = process.env.REACT_APP_ID as string
// const auth0Domain: string = import.meta.env.REACT_APP_DOMAIN
// const auth0ID: string = import.meta.env.REACT_APP_ID

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    // domain={domain}
    // clientId={clientId}
    domain="harakeke24-haruka.au.auth0.com"
    clientId="LzEYnHDT80PKK2dxywN5hIQ7GQqZ9Osq"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://lyric-sync/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>,
)
