import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas, next, next js, ninja list, Rishabh, Rishabh Singh, thefrontendrish"/>
    </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore, cum natus beatae odit culpa provident molestias! Qui placeat impedit perferendis reprehenderit rerum quidem facere, asperiores inventore voluptatibus eveniet omnis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis modi quos aspernatur magni hic blanditiis? Sed odio a vel debitis! Quis eius in tenetur eaque et, ducimus obcaecati quos modi!</p>
        <Link href="/ninjas"><a className={styles.btn}>See Nija Listing</a></Link>
      </div></>
  )
}
