import React from "react";
import range from "lodash.range";
import styles from "./style.module.css";
function Flag({ numOfColumns = 10, staggeredDelay = 60 }) {
  return (
    <div className={styles.flag}>
      {range(numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            animationDelay: columnIndex * staggeredDelay + "ms",
          }}
        />
      ))}
    </div>
  );
}

export default Flag;
