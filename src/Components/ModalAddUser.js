import React, { useState } from "react";
import Form from "./Form";
// import classes from "./ModalAddUser.module.css";

const ModalAddUser = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const positionHandler = (e) => {
    e.preventDefault();
    setPosition(e.target.value);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    props.addEmp(name, number, position);
    setName("");
    setNumber("");
    setPosition("");
  };

  return (
    <Form
      name={name}
      number={number}
      position={position}
      submit={sumbitHandler}
      posHand={positionHandler}
      numHand={numberHandler}
      nameHand={nameHandler}
      onClose={props.onClose}
    />
  );
};

export default ModalAddUser;
