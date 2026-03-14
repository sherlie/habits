import { FC } from 'react';
import Week from '../entities/calendar/Week';
import { useNavigate } from 'react-router';
import TaskList from '../entities/tasklist/TaskList';

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