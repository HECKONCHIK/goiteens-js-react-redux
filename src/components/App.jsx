import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useSelector } from "react-redux";

export const App = () => {
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