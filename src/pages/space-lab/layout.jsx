import React from 'react'
import { Outlet } from 'react-router-dom';

// Components
import Mainbanner from '../../components/subpage/Mainbanner';

// Images
import { mainBanner04 } from '../../components/Images';

const SpaceLabLayout = () => {

   const bannerInfo = {
      title: "공간정원 연구소",
      subText: "공간정원은 우리의 생활을 깊이있게 연구하고 있습니다",
      bgImgPath: mainBanner04,
   }
   const tabInfo = [
      {
         title: "공간 가드닝 연구",
         path: "/space-lab/gardening",
      },
      {
         title: "라이프 오브제 연구",
         path: "/space-lab/life",
      },
      {
         title: "교육 기획",
         path: "/space-lab/edu",
      },
      {
         title: "가드너즈 아카데미",
         path: "/space-lab/academy",
      },
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

export default SpaceLabLayout;