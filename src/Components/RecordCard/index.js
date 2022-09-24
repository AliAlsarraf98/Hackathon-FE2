import React from "react";
import classes from "./style.module.scss";

const RecordCard = () => {
  return (
    <div className={classes["card-container"]}>
      <h1 className={classes.info}>Year</h1>
      <h1 className={classes.info}>Month</h1>
      <h1 className={classes.info}>KWD</h1>
    </div>
  );
};

export default RecordCard;
