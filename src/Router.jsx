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
// Space
import SpaceLayout from "./pages/space-organization/layout";
import Service from "./pages/space-organization/service";
// OneStop
import OneStopLayout from "./pages/one-stop/layout";
import OneStopService from "./pages/one-stop/service";
// Space Lab
import SpaceLabLayout from "./pages/space-lab/layout";

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
         },
         {
            path: 'space-organization',
            element: <SpaceLayout />,
            children: [
               {
                  path: '',
                  element: <NotFound />
               },
               {
                  path: 'service',
                  element: <Service />
               }
            ]
         },
         {
            path: 'one-stop',
            element: <OneStopLayout />,
            children: [
               {
                  path: '',
                  element: <NotFound />
               },
               {
                  path: 'service',
                  element: <OneStopService />
               },
            ],
         },
         {
            path: 'space-lab',
            element: <SpaceLabLayout />,
            children: [
               {
                  path: '',
                  element: <NotFound />
               },
               {
                  path: 'space-research',
                  element: <OneStopService />
               },
            ],
         }
      ],
      errorElement: <NotFound />
   },
])

export default router;