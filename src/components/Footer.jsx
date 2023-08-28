import React from "react";
import style from "../styles/footer.module.css";
import Logo from "../icons/Logo.svg";
import instagram from "../icons/instagram-icon-footer.svg";
import facebook from "../icons/facebook-icon-footer.svg";
import twitter from "../icons/twitter-icon-footer.svg";
import pinterest from "../icons/pinterest-icon-footer.svg";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.contactUs__footer}>
                <h2 className={style.contact__title}>Contact Us</h2>
                <div className={style.contact__item}>
                    <h4 className={style.contact__item__title}>Email:</h4>
                    <p className={style.contact__item__desc}>
                        needhelp@Organia.com
                    </p>
                </div>
                <div className={style.contact__item}>
                    <h4 className={style.contact__item__title}>Phone:</h4>
                    <p className={style.contact__item__desc}>0995 995 089</p>
                </div>
                <div className={style.contact__item}>
                    <h4 className={style.contact__item__title}>Address:</h4>
                    <p className={style.contact__item__desc}>
                        Tabyshalieva, 29
                    </p>
                </div>
            </div>

            <div className={style.middle__footer}>
                <div className={style.middle__footer__title}>
                    <img
                        className={style.middle__footer__title__logo}
                        src={Logo}
                        alt="error"
                    />
                    <h2 className={style.middle__footer__title__text}>
                        Organick
                    </h2>
                </div>
                <div className={style.middle__footer__text}>
                    <p>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum simply dummy text of the printing{" "}
                    </p>
                </div>
                <ul className={style.middle__footer__icons}>
                    <li>
                        <img src={instagram} alt="error" />
                    </li>
                    <li>
                        <img src={facebook} alt="error" />
                    </li>
                    <li>
                        <img src={twitter} alt="error" />
                    </li>
                    <li>
                        <img src={pinterest} alt="error" />
                    </li>
                </ul>
            </div>

            <div className={style.utility__footer}>
                <h2 className={style.utility__h2}>Utility Pages</h2>
                <ul className={style.utility__list}>
                    <li>Style Guide</li>
                    <li>Password Protected</li>
                    <li>Licences</li>
                    <li>Changelog</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
