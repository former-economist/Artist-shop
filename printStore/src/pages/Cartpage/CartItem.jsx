import React, { Fragment } from "react";
import styles from "./CartItem.module.css";
const CartItem = (props) => {
  const { image, title, media, price } = props;

  return (
    <Fragment>
      <div className={`${styles.work_container}`}>
        <div className={`${styles.flex_container}`}>
          <picture className={`${styles.thumbnail}`}>
            <img  src={image} alt="" />
          </picture>
          <div className={`${styles.info}`}>
            <h3 className={`${styles.title}`}>{title}</h3>
            <p className={`${styles.text}`}>{media}</p>
            <p>{`£${price}`}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
