import React from 'react'
import { Outlet } from 'react-router-dom';

// Components
import Mainbanner from '../../components/subpage/Mainbanner';

// Images
import { mainBanner01 } from '../../components/Images'

const CompanyLayout = () => {

   const bannerInfo = {
      title: "회사소개",
      subText: "사람이 성장하는 공간을 만들어가는 <br class='xl:hidden' />공간 리빌딩 전문기업 공간정원입니다.",
      bgImgPath: mainBanner01,
   }
   const tabInfo = [
      {
         title: "대표소개",
         path: "/company/ceo",
      },
      {
         title: "슬로건 및 비전",
         path: "/company/slogan-vision",
      },
      {
         title: "인재상",
         path: "/company/people",
      }
   ]

   return (
      <div>
         <Mainbanner
            bannerInfo={bannerInfo}
            tabInfo={tabInfo}
         />
         <Outlet />
      </div>
   )
}

export default CompanyLayout;