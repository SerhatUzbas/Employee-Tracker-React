import { useState } from "react";
import Form from "./Form";
const ModalEditUser = (props) => {
  const [name, setName] = useState(props.name);
  const [number, setNumber] = useState(props.number);
  const [position, setPosition] = useState(props.position);

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
  //   const updatedEmployee = { name, number, position, id };
  const sumbitHandler = (e) => {
    e.preventDefault();

    props.editEmp(name, number, position);
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
export default ModalEditUser;
