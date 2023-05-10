import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/LayOut";
import Error from "../Component/ErrorPage/ErrorPage";
import LayOut from "../Layout/LayOut";
import Hero from "../Component/Hero/Hero";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
      element: <LayOut/>,
      children: [
        {
          path: '/',
          element: <Hero/>
        }
      ]
    },
  ]);

  export default router