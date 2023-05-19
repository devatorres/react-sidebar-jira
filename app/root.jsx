import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { DICTIONARY, PALETTE } from '@/constants'
import { ThemeProvider } from '@/contexts'
import globalStyles from '@/styles/global.css'
import homeStyles from '@/styles/home.css'

//? It's necessary for the global state and style config
import { SidebarProvider } from './components/MySidebar/contexts'
import mySidebarStyles from '@/styles/mySidebar.css'

export const meta = () => {
  return [{ title: DICTIONARY.META_TITLE }]
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: globalStyles },
    { rel: 'stylesheet', href: mySidebarStyles },
    { rel: 'stylesheet', href: homeStyles },
  ]
}

const App = () => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content={PALETTE.APP} />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <Outlet />
          </SidebarProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
