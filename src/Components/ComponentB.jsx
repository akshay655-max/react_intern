import React from "react";
import styles from "../Styles/ComponentB.module.css";

function ComponentB(props) {
  const { cendol, setCendol } = props;
  return (
    <div className={styles.parent_container}>
      <h1>{cendol}</h1>
      <button onClick={() => setCendol(cendol + 10)}>
        Click to increase counter
      </button>
    </div>
  );
}

export default ComponentB;