import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import css from "./AppBar.module.css";
import { AppNav } from "components/AppNav";
import { UserMenu } from "components/UserMenu";
import { AuthMenu } from "components/AuthMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selector";

export const AppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <header className={css.wrapper}>
      <AppNav />
      {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
      <UserMenu />


      <AuthMenu />
      

      
      {/* <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section> */}
    </header>
  );
};