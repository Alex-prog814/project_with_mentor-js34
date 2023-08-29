import React from "react";
import styles from "./styles/Slider.module.css";
import juice from "./images/juice.png";
import food from "./images/food.png";
import cookies from "./images/cookies.png";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__item}>
        <img src={juice} alt="error" />
        <button className={styles.slider__button}>Organic Juice</button>
      </div>
      <div className={styles.slider__item}>
        <img src={food} alt="error" />
        <button className={styles.slider__button}>Organic Food</button>
      </div>
      <div className={styles.slider__item}>
        <img src={cookies} alt="error" />
        <button className={styles.slider__button}>Nuts Cookies</button>
      </div>
    </div>
  );
};

export default Slider;
