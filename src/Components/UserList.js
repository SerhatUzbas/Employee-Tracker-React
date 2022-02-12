import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <table className={classes.table}>
      <tbody className={classes.tabfirst}>
        <td className={classes.tabtit}>Name</td>
        <td className={classes.tabtit}>Age</td>
        <td className={classes.tabtit}>Position</td>
        <td className={classes.tabtit}>Action</td>
      </tbody>
      {props.emps.map((emp) => (
        <tbody className='employee' key={emp.key}>
          <td className='name'>{emp.name}</td>
          <td className='number'>{emp.number}</td>
          <td className='position'>{emp.position}</td>
          <td className='id' style={{ display: "none" }}>
            {emp.key}
          </td>
          <td>
            <button onClick={props.onClick}>Edit</button>
            <button onClick={props.onDelete}>Remove</button>
          </td>
        </tbody>
      ))}
    </table>
  );
};

export default UserList;
