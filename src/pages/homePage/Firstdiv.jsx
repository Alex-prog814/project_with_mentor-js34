import React from "react";
import first_div_image from "./images/first_div.png";
import style from "./styles/first__div.module.css";

const Firstdiv = () => {
    return (
        <>
        <div className={style.header}>
          <div className={style.container}>
              <div className={style.first__div}>
                  <div className={style.left__block}>
                      <p className={style.natural_100}>100% Natural Food</p>
                      <h1 className={style.first__div_h1}>
                          Choose the best healthier way of life
                      </h1>
                      <div className={style.div__button}>
                          <p className={style.button_text}>Explore Now</p>
                      </div>
                  </div>
                  <div className={style.right__block_img}>
                      <img
                          className={style.first_div_image}
                          src={first_div_image}
                          alt="error"
                      />
                  </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default Firstdiv;
