import { Link } from "react-router-dom"
import styled from "styled-components"

// images
import Logo from "../images/common/logo_white.png"
import sns01 from "../images/common/icon/sns01.png"
import sns02 from "../images/common/icon/sns02.png"
import sns03 from "../images/common/icon/sns03.png"
import sns04 from "../images/common/icon/sns04.png"

const Container = styled.footer`
   background-color: var(--subColor02);
   &.on{
      margin-top: 0px;;
   }
   & .container{
      max-width: 1600px;
      & .logo{
         width: 195px;
         height: auto;
      }
      & .border_r{
         border-right: 1px solid rgba(255,255,255,0.6);
         padding-right: 16px;
         margin-right: 16px;
      }
      & .navitems_wrap{
         width: 128px;
         & .category_title{
            border-bottom: 1px solid #fff;
         }
      }
   }
   .sns-wrap{
      .icon{
         width: 38px;
         height: auto;
      }
   }
   @media screen and (max-width:1279px){
      .logo{
         width: 166px;
      }
      .contents_wrap{
         border-top: 1px solid #fff;
      }
      .border_r.border_pc{
         border: 0px none;
         padding-right: 0px;
         margin-right: 0px;
      }
   }
`

export default function Footer() {

   const navItems = [
      {
         title: "회사소개",
         category: [
            "대표소개",
            "슬로건 및 비전",
            "인재상",
         ],
         link: [
            "/company/ceo",
            "/company/slogan-vision",
            "/company/people",
         ]
      },
      {
         title: "공간정리",
         category: [
            "서비스소개",
         ],
         link: [
            "/space-organization/service",
         ]
      },
      {
         title: "토탈홈케어",
         category: [
            "서비스소개",
         ],
         link: [
            "/one-stop/service",
         ]
      },
      {
         title: "공간정원 연구소",
         category: [
            "공간 가드닝 연구",
            "라이프오브제 연구",
            "교육 기획",
            "가드너즈 아카데미",
         ],
         link: [
            "/space-lab/gardening",
            "/space-lab/life",
            "/space-lab/edu",
            "/space-lab/academy",
         ]
      },
      {
         title: "커뮤니티",
         category: [
            "공지사항",
            "자주묻는질문",
            "문의하기",
            "SNS",
            "고객후기",
         ],
         link: [
            "/community/notice",
            "/community/faq",
            "/community/sns",
            "/community/review",
            "/community/contact",
         ]
      },
   ]

   return (
      <Container id="footer">
         <div className="container xl:flex block justify-between xl:pt-40 pt-24 xl:pb-40 pb-32">
            <div>
               <img className="logo xl:mb-20 mb-24" src={Logo} alt="logo" />
               <div className="contents_wrap xl:mb-24 mb-24 xl:pt-0 pt-24">
                  <div className="xl:flex">
                     <p className="xl:block inline-block border_r leading-1em xl:text-14 text-12 text-subColor05">
                        대표자&nbsp;:&nbsp;이정원
                     </p>
                     <p className="xl:block inline-block leading-1em xl:text-14 text-12 text-subColor05">
                        주소&nbsp;:&nbsp;경기도 하남시 신우실로 100 현대테라타워 705호
                     </p>
                  </div>
                  <div className="xl:flex xl:mt-12 mt-16">
                     <p className="border_r border_pc leading-1em xl:text-14 text-12 text-subColor05">
                        대표번호&nbsp;:&nbsp;
                        <span className="text-subColor05">1522-5482</span>
                     </p>
                     <p className="xl:block inline-block leading-1em xl:text-14 text-12 text-subColor05">이메일&nbsp;:&nbsp;</p>
                     <p className="xl:block inline-block xl:text-14 text-12 leading-1em text-subColor05">niceout86@naver.com</p>
                  </div>
                  <div className="xl:flex xl:mt-12 mt-16">
                     <p className="xl:flex leading-1em xl:text-14 text-12 text-subColor05">
                        사업자등록번호&nbsp;:&nbsp;472-50-00383
                     </p>
                  </div>
               </div>
               <div className="sns-wrap flex xl:gap-6">
                  <Link to="">
                     <img className="icon" src={sns01} alt="instagram" />
                  </Link>
                  <Link to="">
                     <img className="icon" src={sns02} alt="blog" />
                  </Link>
                  <Link to="">
                     <img className="icon" src={sns03} alt="youtube" />
                  </Link>
                  <Link to="">
                     <img className="icon" src={sns04} alt="kakao" />
                  </Link>
               </div>
               <small className="block xl:text-14 font-light xl:pt-16 text-subColor05">Copyright 2024 공간정원 All rights reserved.</small>
            </div>
            <div className="xl:flex hidden xl:gap-40">
               {navItems.map((navItem, index) => (
                  <div key={index} className="navitems_wrap">
                     <h5 className="category_title xl:text-14 font-medium xl:pb-16 xl:mb-16 text-white">{navItem.title}</h5>
                     <ul>
                        <li>
                           {navItem.category.map((category, categoryIndex) => (
                              <Link to={navItem.link[index]} className="xl:text-12 font-light xl:mb-12 text-white" key={categoryIndex}>{category}</Link>
                           ))}
                        </li>
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </Container>
   )
}