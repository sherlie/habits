import { FC } from "react";
import "./TaskList.css";

/* TODO: remove mock data */
const mockTasks = [
  { id: 0, name: "Drink 8 glasses of water" },
  { id: 1, name: "Read 50 pages" },
  { id: 2, name: "Take a 5km run" },
];

const TaskList: FC = () => {
  return (
    <div>
      {mockTasks.map(({ id, name }) => (
        <div key={id} className="task">
          {name}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
