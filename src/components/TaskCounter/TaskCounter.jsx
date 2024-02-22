import { getTasks } from "../../redux/tasks/selector";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce((acc, task) => {
    if (task.competed) {
      acc.completed += 1
    } else {
      acc.active += 1
    }
    return acc
  },
    { active: 0, completed: 0, });
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
