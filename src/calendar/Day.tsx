import { FC } from "react";
import clsx from "clsx";
import { WEEKDAY_NAMES } from "./calendar";
import { dayStyle, dayState, dayTitle, date } from './Day.css.ts';

interface DayProps {
  day: Date;
  isToday: boolean;
  isFuture: boolean;
}

const Day: FC<DayProps> = ({ day, isToday, isFuture }) => {
  const weekday = WEEKDAY_NAMES[day.getDay()];
  return (
    <div
      className={clsx(
        dayStyle,
        isToday && dayState.today,
        isFuture && dayState.future
      )}
    >
      <div className={dayTitle}>{weekday}</div>
      <div className={date}>{day.getDate()}</div>
    </div>
  );
};

export default Day;
