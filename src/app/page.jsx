
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.boxEnter}>
      <h2>
        <span className={styles.firstName}>Samuel</span>
        <span className={styles.lastName}>Rosário</span>
      </h2>
      
      <h4 className={styles.job}>Programador Web</h4>
      <Link className={styles.view} href="/aboutme">Sobre mim</Link>
    </div>
  )
}
