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
import GardeningResearch from "./pages/space-lab/GardeningResearch";
import LifeResearch from "./pages/space-lab/LifeResearch";
import EduPlanning from "./pages/space-lab/EduPlanning";
import GardenerAcademy from "./pages/space-lab/GardenerAcademy"
// Community
import CommunityLayout from "./pages/community/Layout";
import Notice from "./pages/community/Notice";
import Faq from "./pages/community/Faq";
import Sns from "./pages/community/Sns";
import Review from "./pages/community/Review";
import Contact from "./pages/community/Contact";


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
                  path: 'gardening',
                  element: <GardeningResearch />
               },
               {
                  path: 'life',
                  element: <LifeResearch />
               },
               {
                  path: 'edu',
                  element: <EduPlanning />
               },
               {
                  path: 'academy',
                  element: <GardenerAcademy />
               },
            ],
         },
         {
            path: 'community',
            element: <CommunityLayout />,
            children: [
               {
                  path: '',
                  element: <NotFound />
               },
               {
                  path: 'notice',
                  element: <Notice/>,
               },
               {
                  path: 'faq',
                  element: <Faq/>,
               },
               {
                  path: 'sns',
                  element: <Sns/>,
               },
               {
                  path: 'review',
                  element: <Review/>,
               },
               {
                  path: 'contact',
                  element: <Contact/>,
               },
            ]
         }
      ],
      errorElement: <NotFound />
   },
])

export default router;