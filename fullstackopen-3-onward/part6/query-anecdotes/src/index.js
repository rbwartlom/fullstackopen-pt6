import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NotificationContextWrapper } from './NotificationContext'

import App from './App'

const queryClient = new QueryClient({
  refetchOnWindowFocus: false
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationContextWrapper>
    <QueryClientProvider client={queryClient}>
      <App />
    </ QueryClientProvider>
  </NotificationContextWrapper>  
)