import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { LoadingScreen, CookieConsent, BackToTop, WhatsAppButton, ChatWidget } from '../ui'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <ChatWidget />
      <CookieConsent />
    </div>
  )
}
