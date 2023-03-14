import Head from 'next/head'

import Header from './components/header/Header'
import Herobanner from './components/Herobanner'
import Gallery from './components/Gallery'
import Footer from './components/footer/Footer'
import Contact from './components/Contact'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Header />
        <Herobanner />
        <Gallery />
        <Contact />
        <Footer />
   

    </>
  )
}
