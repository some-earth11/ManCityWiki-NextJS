import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>ManCity Wiki - Home</title>
      <meta keywords="lel" content="lol"></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Manchester City FC</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, accusantium.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iste a quos assumenda recusandae cum voluptatum. Perferendis sunt omnis eius.</p>
      <Link href="/players"><a className={styles.btn}>See all Players</a></Link>
    </div>
    </>
  )
}
