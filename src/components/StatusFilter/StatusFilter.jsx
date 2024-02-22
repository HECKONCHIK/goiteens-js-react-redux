import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/tasks/constants";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersStatus } from "../../redux/tasks/selector";
import { setStatusFilter } from "../../redux/tasks/slice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltersStatus);

  const handleToggle = (value) => {
   dispatch(setStatusFilter(value))
 }

  return (
    <div className={css.wrapper}>
      <Button selected={filter===statusFilters.all} onClick={()=>handleToggle(statusFilters.all)}>All</Button>
      <Button selected={filter===statusFilters.active} onClick={()=>handleToggle(statusFilters.active)}>Active</Button>
      <Button selected={filter===statusFilters.completed} onClick={()=>handleToggle(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
