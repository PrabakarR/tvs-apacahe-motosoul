import Head from 'next/head'
import { DM_Sans } from 'next/font/google'

import Header from './components/header/Header'
import Herobanner from './components/Herobanner'
import Gallery from './components/Gallery'

const dmsans = DM_Sans({   weight: '400',  weight: '600',  weight: '700',subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={dmsans.className}>
        <Header />
        <Herobanner />
        <Gallery />
      </main>

    </>
  )
}
