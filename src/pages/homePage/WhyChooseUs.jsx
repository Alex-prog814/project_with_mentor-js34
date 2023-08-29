import React from 'react'
import style from './styles/WhyChooseUs.module.css'
import icon from './images/cicrcle_icon.svg'
import rightPhoto from './images/green_image.svg'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'

const WhyChooseUs = () => {
  return (
    <>
      <div className={style.info}>
        <div className={style.container}>

          <div className={style.info__block}>
            <div className={style.info__block_left}>
              <h5 className={style.block__name}>
                Why choose us ?
              </h5>
              <h4 className={style.block__title}>
              We do not buy from the
              open market & traders.
              </h4>
              <p className={style.block__subtitle}>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
              </p>

                  <div className={style.point__item}>
                    <img src={ icon } alt="" />
                    <p className={style.point__item_name}>
                      100% Natural Product
                    </p>
                  </div>
                  <p className={style.point__desc}>
                    Simply dummy text of the printing and typesetting industry Lorem Ipsum
                  </p>

                  <div className={style.point__item}>
                    <img src={ icon } alt="" />
                    <p className={style.point__item_name}>
                      Increases resistance
                    </p>
                  </div>
                  <p className={style.point__desc}>
                  Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                  </p>
              
            </div>

            <div className={style.info__block_right}>
              <img className={style.img__wrapper} src={ rightPhoto } alt="" />
            </div>

          </div>

          <div className={style.info__cards}>

            <div className={style.card__item}>
              <div className={style.card__logo}>
                <img className={style.card__img} src={ icon1 } alt="" />
              </div>
              <h3 className={style.card__title}>
                Return Policy
              </h3>
              <p className={style.card__text}>
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

            <div className={style.card__item}>
              <div className={style.card__logo}>
                <img className={style.card__img} src={ icon2 } alt="" />
              </div>
              <h3 className={style.card__title}>
                Return Policy
              </h3>
              <p className={style.card__text}>
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

            <div className={style.card__item}>
              <div className={style.card__logo}>
                <img className={style.card__img} src={ icon3 } alt="" />
              </div>
              <h3 className={style.card__title}>
                Return Policy
              </h3>
              <p className={style.card__text}>
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

            <div className={style.card__item}>
              <div className={style.card__logo}>
                <img className={style.card__img} src={ icon4 } alt="" />
              </div>
              <h3 className={style.card__title}>
                Return Policy
              </h3>
              <p className={style.card__text}>
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs