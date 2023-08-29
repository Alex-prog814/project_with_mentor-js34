import React from "react";
import style from "./styles/banner.module.css";
import natural from "./images/natural.jpg";
import otter from "./images/otter.jpg";

const BannerComp = () => {
    return (
      <div className={style.banner}>
        <div className={style.container}>
            <div className={style.card}>
                <p className={style.natural}>Natural!!</p>
                <h2 className={style.h2}>
                    Get Garden <br />
                    Fresh Fruits
                </h2>
                <img className={style.banner_img} src={natural} alt="" />
            </div>
            <div className={style.card}>
                <p className={style.natural} style={{ color: "#7EB693" }}>
                    Otter!!
                </p>
                <h2 className={style.h2} style={{ color: "#274C5B" }}>
                    Get 10% off <br />
                    on Vegetables
                </h2>
                <img className={style.banner_img} src={otter} alt="" />
            </div>
        </div>
      </div>
    );
};

export default BannerComp;
