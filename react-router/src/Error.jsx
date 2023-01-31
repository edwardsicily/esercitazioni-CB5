import React from "react";
import styles from "./styles.module.scss";

function Error() {
  return (
    <div className={styles.error}>
      <h3>An error occurred</h3>
      <h4>please try again</h4>
    </div>
  );
}

export default Error;
