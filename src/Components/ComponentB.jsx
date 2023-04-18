
import React from "react";
import styles from "../Styles/ComponentB.module.css";

function ComponentB({ cendol }) {
  return (
    <div className={styles.parent_container}>
      <h1>{cendol}</h1>
      <button>Click to increase counter</button>
    </div>
  );
}

export default ComponentB;