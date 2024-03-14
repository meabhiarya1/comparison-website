import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.childDiv}>
        <div>
          <input
            type="text"
            name="text"
            className={styles.input}
            placeholder="Type here..."
            autoComplete="true"
          ></input>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
      <div className={styles.paraGraph}>
        <h2 className={styles.first}>
          Lorem{" "}
          <span className={styles.second}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            sapiente recusandae, est nisi, sed veniam earum magni nihil sit quae
            consectetur eaque et? Voluptas, corporis.
          </span>
          aspernatur iusto esse saepe quis{" "}
          <span className={styles.second}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            sapiente recusandae, est nisi, sed
          </span>
          veniam earum magni nihil sit quae consectetur eaque et? Voluptas,
          corporis.
        </h2>
      </div>
    </div>
  );
};

export default Home;
