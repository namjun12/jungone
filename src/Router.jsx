import { createBrowserRouter } from "react-router-dom"

// components
import NotFound from "./components/NotFound";
// import DetailPage from "./components/DetailPage";

// Pages 
import Root from "./Root";
import Home from "./pages/Home";
// Company
import CompanyLayout from "./pages/company/layout";
import Ceo from "./pages/company/Ceo";
import SloganVision from "./pages/company/SloganVision";
import People from "./pages/company/People";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: '',
            element: <Home />
         },
         {
            path: 'company',
            element: <CompanyLayout />,
            children: [
               {
                  path: '',
                  element: <NotFound />,
               },
               {
                  path: 'ceo',
                  element: <Ceo />
               },
               {
                  path: 'slogan-vision',
                  element: <SloganVision />
               },
               {
                  path: 'people',
                  element: <People />
               },
            ]
         }
      ],
      errorElement: <NotFound />
   },
])

export default router;