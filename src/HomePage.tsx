import { FC } from 'react';
import Week from './calendar/Week';
import TaskList from './TaskList';

interface NewHabitProps {
  switchAddHabit: () => void;
} 

const HomePage: FC<NewHabitProps> = ({ switchAddHabit }) => {
  return (
    <>
      <Week />
      <TaskList />
      <button
        onClick={switchAddHabit}
      >
        Add new habit
      </button>
    </>
  );
};

export default HomePage;