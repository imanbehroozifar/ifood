import Choice from "../icons/Choice"
import Clock from "../icons/Clock"
import Fast from "../icons/Fast"
import Food from "../icons/Food"
import styles from './Attributes.module.css'
const Attributes = () => {
  return (
      <div className={styles.container}>
          <h3>Why us?</h3>
          <div className={styles.subContainer}>
              <div>
                  <Fast />
                  <p>Fast</p>
              </div>
              <div>
                  <Food />
                  <p>Food</p>
              </div>
              <div>
                  <Choice />
                  <p>Choice</p>
              </div>
              <div>
                  <Clock />
                  <p>Clock</p>
              </div>
          </div>
    </div>
  )
}

export default Attributes