import { Breadcrumbs } from "../components/Breadcrumbs";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};
