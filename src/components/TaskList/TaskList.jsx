import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getFiltersStatus, getTasks } from "../../redux/selector";
import { fetchTasks } from "../../redux/operations";
import { useEffect } from "react";

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const filterStatus = useSelector(getFiltersStatus);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  const visibleTasks = tasks.filter((task) => {
    switch (filterStatus) {

      case statusFilters.active:
        return !task.completed;
      
      case statusFilters.completed:
        return task.completed;
      
      default:
        return task;
    }
  })
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};