import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const userEmail = "martyna@test.com";
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  // Sort tasks by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="App">
      <ListHeader listName={"Fall trip to dos"} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
