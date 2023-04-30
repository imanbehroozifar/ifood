
import Banner from '@/components/module/Banner'
import styles from './HomePage.module.css'
import Attributes from '@/components/module/Attributes'
import Definition from '@/components/module/Definition'
import Companies from '@/components/module/Companies'
import Instruction from '@/components/module/Instruction'
import Guide from '@/components/module/Guide'
import Restrictions from '@/components/module/Restrictions'
const HomePage = () => {
  return (
      <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions/>
      </div>
  )
}

export default HomePage