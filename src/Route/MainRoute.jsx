import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorAnimation from "../Components/ErrorAnimation";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefRecipie from "../Pages/Recipie/ChefRecipie";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorAnimation></ErrorAnimation>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://chef-server-eight-beta.vercel.app/chefData`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/Register", element: <Register></Register> },
      {
        path: "/recipie/:id",
        element: (
          <Privateroute>
            <ChefRecipie></ChefRecipie>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-server-eight-beta.vercel.app/chefData/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
