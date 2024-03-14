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
    </div>
  );
};

export default Home;
