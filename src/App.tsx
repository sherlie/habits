import { FC } from "react";
import Week from "./week/Week";
import TaskList from "./TaskList";

const App: FC = () => {
  return (
    <>
      <Week />
      <TaskList />
    </>
  );
};

export default App;
