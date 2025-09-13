import { FC, useState } from "react";
import Week from "./calendar/Week";
import TaskList from "./TaskList";
import NewHabit from './NewHabit';
import { Page } from './pages';

const App: FC = () => {
  function handleOnClick() {
    setPage(Page.AddHabit);
  }

  const [page, setPage] = useState(Page.Home);

  return (
    <>
      {page === Page.Home &&
        <>
          <Week />
          <TaskList />
          <button
            onClick={handleOnClick}
          >
            Add new habit
          </button>
        </>
      }
      {page === Page.AddHabit &&
        <NewHabit />
      }
    </>
  );
};

export default App;
