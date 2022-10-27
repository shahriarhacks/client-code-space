import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Categories from "../pages/categories/Categories";
import Course from "../pages/courses/Course";
import Courses from "../pages/courses/Courses";
import About from "../pages/others/About";
import Blog from "../pages/others/Blog";
import FAQ from "../pages/others/FAQ";
import Checkout from "../pages/shared/checkout/Checkout";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Home from "../pages/shared/Home";
import Login from "../pages/shared/loginRegister/Login";
import Register from "../pages/shared/loginRegister/Register";
import Profile from "../pages/shared/profile/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Categories />,
        loader: ({ params }) =>
          fetch(` https://server-side-10.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch(" https://server-side-10.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` https://server-side-10.vercel.app/courses/${params.id}`),
      },
      {
        path: "/pay-now",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/blog",
    element: <Blog />,
    loader: () => fetch(" https://server-side-10.vercel.app/questions"),
  },
  {
    path: "/faq",
    element: <FAQ />,
    loader: () => fetch(" https://server-side-10.vercel.app/faq"),
  },
]);

export default router;
