import React, { Fragment } from "react";
import styles from "./WorkEntry.module.css";
const WorkEntry = (props) => {
  const { image, title, media, price } = props;
  return (
    <Fragment>
      <div className={`${styles.work_container}`}>
        <picture>
          <img src={image} alt="" />
        </picture>
        <div className={`${styles.info}`}>
          <div>
            <h3 className={`${styles.title}`}>{title}</h3>
            <p className={`${styles.text}`}>{media}</p>
            <p>{`£${price}`}</p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkEntry;
