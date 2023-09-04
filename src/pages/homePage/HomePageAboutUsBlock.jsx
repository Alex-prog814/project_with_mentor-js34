import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles/homepageAboutUsBlock.module.css";
import aboutUSImg from "./images/aboutus__img.svg";
import aboutUsIconFirst from "./images/aboutus-icon1.svg";
import aboutUsIconSecond from "./images/aboutus-icon2.svg";
import aboutUsBtnIcon from "./images/aboutus-btn-arrow.svg";

const HomePageAboutUsBlock = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.homepage__aboutus__block}>
            <div className={styles.container}>
              <div className={styles.img__wrapper}>
                  <div>
                      <img
                          src={aboutUSImg}
                          alt="error"
                          className={styles.aboutus__left__block}
                      />
                  </div>
              </div>
                <div className={styles.aboutus__right__block}>
                    <h2 className={styles.aboutus__right__block__header}>
                        About Us
                    </h2>
                    <h2 className={styles.aboutus__right__block__subheader}>
                        We Believe in Working Accredited Farmers
                    </h2>
                    <p className={styles.aboutus__right__block__descr}>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem had ceased to been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley.
                    </p>
                    <div className={styles.aboutus__right__block__items}>
                        <div className={styles.aboutus__right__block__item}>
                            <div
                                className={
                                    styles.aboutus__right__block__item__img
                                }
                            >
                                <img src={aboutUsIconFirst} alt="error" />
                            </div>
                            <div
                                className={
                                    styles.aboutus__right__block__item__title
                                }
                            >
                                <h2
                                    className={
                                        styles.aboutus__right__block__item__header
                                    }
                                >
                                    Organic Foods Only
                                </h2>
                                <p
                                    className={
                                        styles.aboutus__right__block__item__descr
                                    }
                                >
                                    Simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </p>
                            </div>
                        </div>
                        <div className={styles.aboutus__right__block__item}>
                            <div
                                className={
                                    styles.aboutus__right__block__item__img
                                }
                            >
                                <img src={aboutUsIconSecond} alt="error" />
                            </div>
                            <div
                                className={
                                    styles.aboutus__right__block__item__title
                                }
                            >
                                <h2
                                    className={
                                        styles.aboutus__right__block__item__header
                                    }
                                >
                                    Quality Standards
                                </h2>
                                <p
                                    className={
                                        styles.aboutus__right__block__item__descr
                                    }
                                >
                                    Simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className={styles.aboutus__right__block__button}
                        onClick={() => navigate("/products")}
                    >
                        <h2
                            className={
                                styles.aboutus__right__block__button__title
                            }
                        >
                            Shop Now
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePageAboutUsBlock;
