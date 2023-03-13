import { Fragment } from "react";
import heroImage from "../assets/pictures/heroImage.png";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <picture>
          <img
            src={heroImage}
            className={`${styles.image}`}
            alt="black and white image of injuried soldier"
          />
        </picture>
        <div className={`${styles.heroText}`}>
          <h2 className="proof">A/P</h2>
          <h1 className={`${styles.name}`}>
            <Link to="/about">Adam Smith</Link>
          </h1>
        </div>
        <div>
          <h2>Artist/Screen-Printer/Etcher/</h2>

        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
