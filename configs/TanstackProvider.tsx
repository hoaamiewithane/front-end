'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

export function TanstackProvider({ children }: Readonly<PropsWithChildren>) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
