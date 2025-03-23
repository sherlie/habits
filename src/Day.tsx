import { FC } from "react";
import { WEEKDAY_NAMES } from "./calendar";
import "./Day.css";

interface DayProps {
  day: Date;
  isToday: boolean;
}

const Day: FC<DayProps> = ({ day, isToday }) => {
  const weekday = WEEKDAY_NAMES[day.getDay()];
  return (
    <div className={"day" + (isToday ? " today" : "")}>
      <div className="dayTitle">{weekday}</div>
      <div className="date">{day.getDate()}</div>
      <div className="dayChart"></div>
    </div>
  );
};

export default Day;
