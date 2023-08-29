import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorAnimation from "../Components/ErrorAnimation";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefRecipie from "../Pages/Recipie/ChefRecipie";
import Privateroute from "./Privateroute";
import Favourite from "../Pages/FavouriteRecipie/Favourite";

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
        errorElement: <ErrorAnimation></ErrorAnimation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorAnimation></ErrorAnimation>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
        errorElement: <ErrorAnimation></ErrorAnimation>,
      },
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
        errorElement: <ErrorAnimation></ErrorAnimation>,
      },
      {
        path: "/Favourite",
        element: <Favourite></Favourite>,
        errorElement: <ErrorAnimation></ErrorAnimation>,
      },
    ],
  },
]);

export default router;
