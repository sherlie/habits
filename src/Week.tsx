import { FC } from "react";
import { DAY_IN_MS } from "./calendar";
import Day from "./Day";
import "./Week.css";

const Week: FC = () => {
  const weekdays = [];
  for (let i = -5; i <= 1; i++) {
    const day = new Date(Date.now() + i * DAY_IN_MS);
    weekdays.push({ i, day });
  }

  return (
    <div className="week">
      {weekdays.map(({ i, day }) => (
        <Day day={day} isToday={i === 0} isFuture={i > 0} />
      ))}
    </div>
  );
};

export default Week;
