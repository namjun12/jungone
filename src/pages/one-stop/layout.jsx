import React from 'react'
import { Outlet } from 'react-router-dom';

// Components
import Mainbanner from '../../components/subpage/Mainbanner';

// Images
import { mainBanner03 } from '../../components/Images'

const OneStopLayout = () => {

   const bannerInfo = {
      title: "원스톱 토탈서비스",
      subText: "국내 최초, 국내 유일! 공간정원만의 특별한 원스톱 토탈서비스! 고객에게 사랑받는 이유가 있습니다",
      bgImgPath: mainBanner03,
   }
   const tabInfo = [
      {
         title: "서비스소개",
         path: "/one-stop/service",
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

export default OneStopLayout;