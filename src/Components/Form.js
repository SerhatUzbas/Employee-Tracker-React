import React from "react";
import ReactDOM from "react-dom";
import classes from "./Form.module.css";
import { useEffect, useState } from "react";

const Form = (props) => {
  const [buttunIsHighlighted, setButtonIsHighlighted] = useState(false);
  const btnClasses = `${classes.form} ${
    buttunIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => setButtonIsHighlighted(false), 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onClose}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <form className={btnClasses} onSubmit={props.submit}>
          <div className={classes.row}>
            <label htmlFor='username'>Name</label>
            <input
              id='username'
              type='text'
              value={props.name}
              onChange={props.nameHand}
            ></input>
          </div>
          <div className={classes.row}>
            <label htmlFor='usernumber'>Age</label>
            <input
              id='usernumber'
              type='number'
              value={props.number}
              onChange={props.numHand}
            ></input>
          </div>

          <div className={classes.row}>
            <label htmlFor='userpos'>Position</label>
            <input
              id='userpos'
              type='text'
              value={props.position}
              onChange={props.posHand}
            ></input>
          </div>
          <button className={classes.button} type='sumbit'>
            Add
          </button>
        </form>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Form;
