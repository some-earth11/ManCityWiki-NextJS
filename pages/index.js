import Head from 'next/head'
import Image from 'next/image'
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
      <Image src="/sergio.jpg" width={2048} height={1366}></Image>
      <h1 className={styles.title}>Manchester City FC</h1>
      <p className={styles.text}>
      The 2021–22 season is the 127th season in the existence of Manchester City Football Club and the club's 20th consecutive season in the top-flight of English football. In addition to the domestic league, Manchester City is participating in this season's editions of the FA Cup and the UEFA Champions League. The club kicked off the season by losing the Community Shield to Leicester City and was later knocked out of the EFL Cup by West Ham United in the fourth round, ending their unbeaten streak in the competition that stretched to nearly five years.</p>
      <p className={styles.text}>
      City reached the FA Cup semi-finals for the fifth time in Guardiola's six season tenure, but were beaten by Liverpool, their third consecutive semi-final defeat.</p>
      <p className={styles.text}>
      The season is the club's first since 2010–11 not to feature City's all-time record goalscorer Sergio Agüero who had left the club for Barcelona at the end of the previous season, and who then went onto retire from football following cardiac problems in November 2021.
      </p>
      <Link href="/players"><a className={styles.btn}>Check out Players</a></Link>
    </div>
    </>
  )
}
