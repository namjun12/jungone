import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Mainbanner from '../../components/subpage/Mainbanner'

// Images
import { mainBanner02 } from '../../components/Images'

const SpaceLayout = () => {

   const bannerInfo = {
      title: "공간정리",
      subText: "공간정원의 정리수납 서비스는 <br class='xl:hidden'/> 사람중심의 맞춤형 공간재구성 및 정리수납을 서비스합니다",
      bgImgPath: mainBanner02,
   }
   const tabInfo = [
      {
         title: "서비스소개",
         path: "/space-organization/service",
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

export default SpaceLayout