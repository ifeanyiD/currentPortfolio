import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Layout from "../pages/layout";


const router = createBrowserRouter([
    {
      path: "/", element : <Layout/>,
      children : [
        {
          index : true, element : <Home/>
        },
        {
          path : "portfolio", element : <Portfolio/>
        },
        {
          path : "contact", element : <Contact/>
        }
      ]
    }
])  


export default router;
