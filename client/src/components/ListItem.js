import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";
const ListItem = ({ task }) => {
  return (
    <li className="listItem">
      <div className="infoContainer">
        <TickIcon />
        <p className="taskTitle">{task.title}</p>
        <ProgressBar />
      </div>
      <div className="buttonsContainer">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </li>
  );
};

export default ListItem;
