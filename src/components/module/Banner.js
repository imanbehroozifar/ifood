import Link from 'next/link'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>IFOOD</h2>
                <p>Food Delivery and Takeout!</p>
                <span>
                    Ifood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link href='/menu'>See All</Link>
            </div>
            <div className={styles.right}>
                <img src="/images/banner.png" alt='img' />
                {/* https://s8.uupload.ir/files/banner_vc90.png */}
            </div>
        </div>
    )
}

export default Banner