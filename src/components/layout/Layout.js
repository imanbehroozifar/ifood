import Link from 'next/link'
import styles from './Layout.module.css'
const Layout = ({children}) => {
  return (
      <>
          <header className={styles.header}>
              <div className={styles.left}>
                  <Link href='/'>IFOOD</Link>
              </div>
              <div className={styles.right}>
                  <Link href='/menu'>menu</Link>
                  <Link href='/categories'>categories</Link>
              </div>
          </header>
          <div className={styles.container}>{children}</div>
          <footer className={styles.footer}>IFOOD | &copy; </footer>
      </>
  )
}

export default Layout