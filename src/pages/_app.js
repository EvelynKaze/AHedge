import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { SidebarProvider } from "../context/SidebarContext";
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </SessionContextProvider>
  )
}
export default appWithTranslation(MyApp)