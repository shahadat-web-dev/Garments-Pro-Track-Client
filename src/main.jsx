import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from './routes/router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
import { ThemeProvider } from './pages/ThemeContext/ThemeContext.jsx';
import { LoadingProvider } from './context/LoadingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <LoadingProvider>
          <RouterProvider router={router} />
        </LoadingProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
