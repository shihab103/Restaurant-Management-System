import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddDishes from "../Dashboard/Admin/AddDishes"
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Menu from "../Pages/Menu/Menu";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import ManageDishes from "../Dashboard/ManageDishes/ManageDishes";
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import Analitic from "../Dashboard/Analitic/Analitic";
import WishList from "../Component/WishList/WishList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/aboutus", Component: AboutUs },
      { path: "/wishlist", Component: WishList },
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
      { path: "manageDishes", Component: ManageDishes },
      { path: "manageUser", Component: ManageUser },
      { path: "analytic", Component: Analitic },
    ],
  },

]);
