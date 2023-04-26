import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeadSection from '@/sections/HeadSection'
import InfoSection from '@/sections/InfoSection'
import Statistique from '@/sections/Statistique'
import Benifit from '@/sections/Benifit'
import Reviews from '@/sections/Reviews'
import Pricing from '@/sections/Pricing'
import Blog from '@/sections/Blog'
import Contact from '@/sections/Contact'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensome</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadSection/>
      <InfoSection/>
      <Statistique/>
      <Benifit/>
      <Reviews/>
      <Pricing/>
      <Blog/>
      <Contact/>
    </>
  )
}
