import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/LayOut";
import Error from "../Component/ErrorPage/ErrorPage";
import LayOut from "../Layout/LayOut";
import Hero from "../Component/Hero/Hero";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
      element: <LayOut/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
  ]);

  export default router