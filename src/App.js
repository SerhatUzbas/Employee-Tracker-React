import React, { useState } from "react";
import Header from "./Components/Header";
import ModalAddUser from "./Components/ModalAddUser";
import ModalEditUser from "./Components/ModalEditUser";
import UserList from "./Components/UserList";

const App = () => {
  const [state, setState] = useState(false);

  const stateHandler = (e) => {
    e.preventDefault();
    setState(true);
  };
  const [employees, setEmployees] = useState([]);

  const addEmployeeHandler = (name, number, position) => {
    setEmployees((prevEmps) => {
      return [
        ...prevEmps,
        {
          name: name,
          number: number,
          position: position,
          key: Math.random().toString(),
        },
      ];
    });
    setState(false);
  };

  const [editState, setEditState] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");

  const editForm = (event) => {
    setEditState(true);
    let editEmp = event.target.closest(".employee");
    setName(editEmp.querySelector(".name").textContent);
    setNumber(editEmp.querySelector(".number").textContent);
    setPosition(editEmp.querySelector(".position").textContent);
    setId(editEmp.querySelector(".id").textContent);
    console.log(name);
  };

  const editHandler = (name, number, position) => {
    setEditState(false);
    employees.map((employee) => {
      if (employee.key === id) {
        employee.name = name;
        employee.number = number;
        employee.position = position;
        employee.key = id;
        return employee;
      }
      return employee;
    });
  };

  const deleteHandler = (event) => {
    let editEmpa = event.target.closest(".employee");

    setId(editEmpa.querySelector(".id").textContent);
    console.log(id);

    setEmployees(employees.filter((employee) => employee.key !== id));
  };

  const onCloseHandler = () => {
    setState(false);
    setEditState(false);
  };

  return (
    <div>
      {state && (
        <ModalAddUser addEmp={addEmployeeHandler} onClose={onCloseHandler} />
      )}
      {editState && (
        <ModalEditUser
          name={name}
          number={number}
          position={position}
          editEmp={editHandler}
          onClose={onCloseHandler}
        />
      )}
      <Header onClick={stateHandler} />
      <UserList emps={employees} onClick={editForm} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
