import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  // const tasks = useSelector((state) => state.tasks);
  return (
    <Layout>
      <AppBar />
      <Outlet/>
      {/* <TaskForm /> */}
      {/* <TaskList /> */}
    </Layout>
  );
};