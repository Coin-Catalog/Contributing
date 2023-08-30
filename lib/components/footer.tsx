import Link from 'next/link'
import styles from '../../css/footer.module.css'

export default function Footer() {
  return (
    <>
      <br />
      <hr />
      <br />
      <footer>
        <p>
          <a className={styles.footer} href="coincatalog.org">Home</a>|<Link className={styles.footer} href="/">Contribute</Link>|<a className={styles.footer} href='https://github.com/Coin-Catalog'>Github</a>
        </p>
      </footer>
    </>
  )
}