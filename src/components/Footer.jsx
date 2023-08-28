import React from "react";
import style from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className="contactUs__footer"></div>
            <div className="middle__footer"></div>
            <div className={style.container}>
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
        </footer>
    );
};

export default Footer;
