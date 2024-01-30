import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersStatus } from "../redux/selector";

export const StatusFilter = () => {
  const filter = useSelector(getFiltersStatus);
  const dispatch = useDispatch();

  const handleToggle = (value) => {
   dispatch(changeFilter(value))
 }

  return (
    <div className={css.wrapper}>
      <Button selected={filter===statusFilters.all} onClick={()=>handleToggle(statusFilters.all)}>All</Button>
      <Button selected={filter===statusFilters.active} onClick={()=>handleToggle(statusFilters.active)}>Active</Button>
      <Button selected={filter===statusFilters.completed} onClick={()=>handleToggle(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
