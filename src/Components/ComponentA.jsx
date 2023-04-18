import React, { useState } from "react";
import ComponentB from "./ComponentB";
import styles from "../Styles/ComponentA.module.css";

function ComponentA() {
  const [isTrue, setIsTrue] = useState(true);
  const [cendol, setCendol] = useState(2);

  function handleChange() {
    setIsTrue(!isTrue);
    setCendol(cendol + 10);
  }

  return (
    <div className={styles.parent_container}>
      <div className={styles.box_container}>
        <div className={styles.circle}>
          <ComponentB cendol={cendol} />
        </div>
      </div>
      <button
        id={styles.color_change_btn}
        className={isTrue ? styles.green : styles.yellow}
        onClick={handleChange}
      >
        Change Color
      </button>
    </div>
  );
}

export default ComponentA;