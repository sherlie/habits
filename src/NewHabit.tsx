import { FC } from 'react';

interface NewHabitProps {
  switchHome: () => void;
} 

const NewHabit: FC<NewHabitProps> = ({ switchHome }) => {
  return (
    <div>
        <div>
          add new habit page
        </div>
        <button onClick={switchHome}>
          Back
        </button>
    </div>
  );
};

export default NewHabit;