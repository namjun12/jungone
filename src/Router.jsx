import { createBrowserRouter } from "react-router-dom"

// components
import NotFound from "./components/NotFound";
// import DetailPage from "./components/DetailPage";

// pages 
import Root from "./Root";
import Home from "./pages/Home";

// 회사소개

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: '',
            element: <Home />
         },
      ],
      errorElement: <NotFound />
   },
])

export default router;