import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    );
  }, []);
  return (
    <>
      <Head>
        <title>Employees List | Home</title>
        <meta name="keywords" content="employees, next, next js, employee list, Rishabh, Rishabh Singh, thefrontendrish" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore, cum natus beatae odit culpa provident molestias! Qui placeat impedit perferendis reprehenderit rerum quidem facere, asperiores inventore voluptatibus eveniet omnis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis modi quos aspernatur magni hic blanditiis? Sed odio a vel debitis! Quis eius in tenetur eaque et, ducimus obcaecati quos modi!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae dolores minus consectetur blanditiis atque animi saepe voluptatum, eaque alias quas earum perspiciatis nobis cupiditate distinctio recusandae nemo ut, non est.</p>
        <Link href="/employees"><a className={styles.btn}>See Employee Listing</a></Link>
      </div></>
  )
}
