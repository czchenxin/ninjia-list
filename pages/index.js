import Head from 'next/head'
 
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

 

export default function Home() {
  return (
    < >
      <Head>
        <title>Ninja List |Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div  >
      <h1 className={styles.title}>HomePage</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem nihil expedita ullam voluptate est iste consectetur obcaecati, animi optio dolor similique! Cupiditate nihil laboriosam est animi eligendi aperiam dolor. </p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem nihil expedita ullam voluptate est iste consectetur obcaecati, animi optio dolor similique! Cupiditate nihil laboriosam est animi eligendi aperiam dolor. </p>
      <Link className={styles.btn} href="/ninjas">See Ninja listing</Link>
      </div>
    </>
  )
}
