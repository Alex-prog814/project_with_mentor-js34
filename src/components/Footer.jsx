import React from "react";
// import style from '../styles/footer.module.css'
import Logo from "../icons/Logo.svg";
import instagram from "../icons/instagram-icon-footer.svg";
import facebook from "../icons/facebook-icon-footer.svg";
import twitter from "../icons/twitter-icon-footer.svg";
import pinterest from "../icons/pinterest-icon-footer.svg";
import style from "../styles/index.module.css";

const Footer = () => {
    return (
        <footer>
            <div className="contactUs__footer"></div>
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
        </footer>
    );
};

export default Footer;
