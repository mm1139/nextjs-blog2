import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'

const Theme = {
  Dark: 'dark',
  Light: 'light',
} as const

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>test!</title>
        <meta name="description" content="テスト作ってみる" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
