import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, DebugProvider } from './contexts'
import Home from './pages/home'
import './assets/styles/index.css'

//? Essential import to the correct use
import { SidebarProvider } from './components/MySidebar/contexts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DebugProvider>
      <ThemeProvider>
        <SidebarProvider>
          <Home />
        </SidebarProvider>
      </ThemeProvider>
    </DebugProvider>
  </StrictMode>
)
