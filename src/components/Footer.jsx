import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="contactUs__footer">
        <h3 className={styles.contact__title}>Contact Us</h3>
        <div className={styles.contact__item}>
          <h4 className={styles.contact__item__title}>Email</h4>
          <p className={styles.contact__item__desc}>needhelp@Organia.com</p>
        </div>
        <div className={styles.contact__item}>
          <h4 className={styles.contact__item__title}>Phone</h4>
          <p className={styles.contact__item__desc}>0995 995 089</p>
        </div>
        <div className={styles.contact__item}>
          <h4 className={styles.contact__item__title}>Address</h4>
          <p className={styles.contact__item__desc}>Tabyshalieva, 29</p>
        </div>
      </div>
      <div className="middle__footer"></div>
      <div className="utility__footer"></div>
    </footer>
  );
};

export default Footer;
