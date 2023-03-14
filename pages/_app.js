import '@/styles/globals.css'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({   weight: ['400','500', '700'],  style: ['normal', 'italic'],subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={dmsans.className}>
      <Component {...pageProps} />
    </main>
  )
}
