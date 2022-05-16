import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Processing Company</title>
        <meta name="description" content="Data processing company landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-500 min-h-screen">
        
      </main>

      <footer className={styles.footer}>
        <p>© Copyrights 2021</p>
        <p>Privacy policy</p>
        <p>Terms of service</p>
      </footer>
    </div>
  )
}
