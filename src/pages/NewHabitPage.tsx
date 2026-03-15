import { FC } from 'react';
import { useNavigate } from 'react-router';

const NewHabitPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h3>
          add new habit page
        </h3>
        <button onClick={() => navigate("/")}>
          Back
        </button>
    </div>
  );
};

export default NewHabitPage;