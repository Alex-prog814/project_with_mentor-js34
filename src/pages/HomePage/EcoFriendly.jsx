import React from 'react'
import photo from './images/ecofriendly-photo.svg'
import style from './styles/ecofriendly.module.css'

const EcoFriendly = () => {
  return (
    <div className={style.ecofriendly_main}>
        <div className={style.ecofriendly_block}>
            <div className={style.ecofriendly_photo}>
                <img src={photo} alt="photo" />
            </div>
                <div className={style.ecofriendly_list}>
                    <ul className={style.ecofriendly_text}>
                        <li className={style.ecofriendly_text_1}>
                            Eco Friendly
                        </li>
                        <li className={style.ecofriendly_text_2}>
                            Econis is a Friendly Organic Store
                        </li>
                        <li className={style.ecofriendly_text_3}>
                            Start with Our Company First
                        </li>
                        <li className={style.ecofriendly_text_4}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

                        </li>
                        <li className={style.ecofriendly_text_5}>
                            Learn How to Grow Yourself
                        </li>
                        <li className={style.ecofriendly_text_6}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                        </li>
                        <li className={style.ecofriendly_text_7}>
                            Farming Strategies of Today
                        </li>
                        <li className={style.ecofriendly_text_8}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                        </li>
                    </ul>

                </div>

        </div>
    </div>
  )
}

export default EcoFriendly