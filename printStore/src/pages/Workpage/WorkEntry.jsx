import React, { Fragment } from "react";
import styles from "./WorkEntry.module.css"
const WorkEntry = (props) => {
  const { image, title, media } = props;
  return (
    <Fragment>
      <div className={`${styles.work_container}`}>
        <picture>
          <img src={image} alt="" />
        </picture>
        <h3 className={`${styles.title}`}>{title}</h3>
        <p className={`${styles.text}`}>{media}</p>
      </div>
    </Fragment>
  );
};

export default WorkEntry;
