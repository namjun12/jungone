import React from 'react'
import { Outlet } from 'react-router-dom';

// Components
import Mainbanner from '../../components/subpage/Mainbanner';

// Images
import { mainBanner05 } from '../../components/Images';

const CommunityLayout = () => {
   const bannerInfo = {
      title: "커뮤니티",
      subText: "사람이 성장하는 공간을 만들어가는 공간 리빌딩 전문기업 공간정원입니다.",
      bgImgPath: mainBanner05,
   }
   const tabInfo = [
      {
         title: "공지사항",
         path: "/community/notice",
      },
      {
         title: "자주 묻는 질문",
         path: "/community/faq",
      },
      {
         title: "SNS",
         path: "/community/sns",
      },
      {
         title: "고객후기",
         path: "/community/review",
      },
      {
         title: "문의하기",
         path: "/community/contact",
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

export default CommunityLayout;