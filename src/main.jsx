import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from './routes/router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { LoadingProvider } from './context/LoadingContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient} >
        <AuthProvider>
          <LoadingProvider>
            <RouterProvider router={router} />
          </LoadingProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
