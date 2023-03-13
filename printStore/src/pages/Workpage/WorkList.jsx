import React, { Fragment } from "react";
import WorkEntry from "./WorkEntry";
import styles from "./WorkList.module.css"
const WorkList = (props) => {
  const { items } = props;
  return (
    <Fragment>
      <div className={`${styles.horiz_list}`}>
        {items.map((item) => (
          <WorkEntry key={item.id} image={item.image} title={item.title} media={item.media} price={item.price} />
        ))}
      </div>
    </Fragment>
  );
};

export default WorkList;
