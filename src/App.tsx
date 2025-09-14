import { FC, useState } from "react";
import NewHabit from './NewHabit';
import { Page } from './pages';
import HomePage from "./HomePage";

const App: FC = () => {
  const [page, setPage] = useState(Page.Home);

  const switchHome = () => {
    setPage(Page.Home);
  }

  const switchAddHabit = () => {
    setPage(Page.AddHabit);
  }

  return (
    <>
      {page === Page.Home &&
        <HomePage switchAddHabit={switchAddHabit} />
      }
      {page === Page.AddHabit &&
        <NewHabit switchHome={switchHome}/>
      }
    </>
  );
};

export default App;
