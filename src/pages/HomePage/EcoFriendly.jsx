import React from 'react'
import photo from './images/ecofriendly-photo.svg'
import style from './styles/ecofriendly.module.css'

const EcoFriendly = () => {
  return (
    <div className={style.ecofriendly__block}>

      <div className={style.img__block}>
        <img src={ photo } alt="" />
      </div>

      <div className={style.info__block}>
        <h5 className={style.info__name}>
          Eco Friendly
        </h5>
        <h3 className={style.info__title}>
        Econis is a Friendly
        Organic Store
        </h3>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>
            Start with Our Company First
          </h4>
          <p className={style.info__subtitle_text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>
            Learn How to Grow Yourself
          </h4>
          <p className={style.info__subtitle_text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>
            Farming Strategies of Today
          </h4>
          <p className={style.info__subtitle_text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>


      </div>
    </div>
  )
}

export default EcoFriendly