'use client'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'

const inter = Inter({subsets: ['latin']})


export default function Home() {

  return (
    <main className={styles.main}>
    </main>
  )
}
