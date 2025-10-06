import { FC } from 'react';
import Week from './calendar/Week';
import TaskList from './TaskList';
import { useNavigate } from 'react-router';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Week />
      <TaskList />
      <button
        onClick={() => navigate("/addhabit")}
      >
        Add new habit
      </button>
    </>
  );
};

export default HomePage;