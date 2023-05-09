import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/LayOut";
import Error from "../Component/ErrorPage/ErrorPage";
import LayOut from "../Layout/LayOut";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
      element: <LayOut/>,
      children: [
        {
          
        }
      ]
    },
  ]);

  export default router