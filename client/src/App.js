import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Authorization from "./components/Authorization";
import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const userEmail = "martyna@test.com";
  const [tasks, setTasks] = useState(null);

  const authToken = false;

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
    if (authToken) getData();
  }, []);

  console.log(tasks);

  // Sort tasks by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="App">
      {!authToken && <Authorization />}
      {authToken && (
        <div>
          <ListHeader listName={"Fall trip to dos"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
