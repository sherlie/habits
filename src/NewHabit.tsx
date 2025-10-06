import { FC } from 'react';
import { useNavigate } from 'react-router';

const NewHabit: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div>
          add new habit page
        </div>
        <button onClick={() => navigate("/")}>
          Back
        </button>
    </div>
  );
};

export default NewHabit;