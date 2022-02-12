import classes from "./Header.module.css";

const Header = (props) => {
  // const butHandler

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Employee Tracker</h1>
      <button className={classes.button} onClick={props.onClick}>
        Add an Employee
      </button>
    </header>
  );
};

export default Header;
