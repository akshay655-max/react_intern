import styles from "./Styles/App.module.css";
import ComponentA from "./Components/ComponentA";
import { useState } from "react";
function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <div className={styles.parent_container}>
      <div className={styles.box_container}>
        <div
          id={styles.circle}
          className={isTrue ? styles.yellow : styles.green}
        >
          <ComponentA />
        </div>
      </div>
      <button
        id={styles.color_change_btn}
        className={isTrue ? styles.green : styles.yellow}
        onClick={() => setIsTrue(!isTrue)}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;