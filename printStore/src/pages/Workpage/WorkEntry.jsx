import React, { Fragment } from "react";
import styles from "./WorkEntry.module.css"
const WorkEntry = (props) => {
  const { image, title } = props;
  return (
    <Fragment>
      <div className={`${styles.work_container}`}>
        <picture>
          <img src={image} alt="" />
        </picture>
        <h3>{title}</h3>
      </div>
    </Fragment>
  );
};

export default WorkEntry;
