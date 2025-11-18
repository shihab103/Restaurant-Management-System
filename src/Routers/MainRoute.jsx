import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddDishes from "../Dashboard/Admin/AddDishes"
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/aboutus", Component: AboutUs },
      {
        path: "/menu",
        Component: Menu
      }
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { path: "addDishes", Component: AddDishes },
      { path: "myProfile", Component: MyProfile },
    ],
  },

]);
