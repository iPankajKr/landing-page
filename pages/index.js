import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Choices from '../components/Choices'
import Traffic from '../components/Traffic'
import USP from '../components/USP'
import CTA from '../components/CTA'
import Investment from '../components/Investment'
import Information from '../components/Information'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Data Processing Company</title>
        <meta name="description" content="Data processing company landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-12 min-h-screen bg-gradient-to-tr from-[#040D3E] to-[#3B1D60]">
        <Header />
        <Hero />
        <Choices />
      </div>

      <main className='px-8 md:container'>
        <Traffic />
        <USP />
        <CTA />
        <Investment />
        <Information />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
