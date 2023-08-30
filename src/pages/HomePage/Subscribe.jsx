import React from 'react'
import photo from './images/subscribe_photo.svg'
import styles from './styles/subscribe.module.css'

const Subscribe = () => {
  return (
    <div>
        <div className={styles.subscribe_main}>
            <div className={styles.subscribe_block}>

                <img className={styles.subscribe_block_img} src={ photo } alt="photo" />

                <div className={styles.subscribe_overlay}>

                <p className={styles.subscribe_block_text}>Subscribe to <br />
our Newsletter
</p>
<button className={styles.subscribe_block_btn}>Subscribe</button>
</div>

            </div>
        </div>
    </div>
  )
}

export default Subscribe