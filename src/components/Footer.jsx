import { Link } from "react-router-dom"
import styled from "styled-components"

// images
import Logo from "../images/common/logo_white.png"

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
   @media screen and (max-width:1280px){
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
            "우수조달컨설팅 소개",
            "유튜브 소개",
            "컨설턴트 소개",
            "컨설턴트 소개",
            "찾아오시는 길",
            "인증성공업체",
         ],
         link: [
            "/",
            "/",
            "/",
            "/",
            "/",
            "/",
         ]
      },
      {
         title: "인증 분야",
         category: [
            "조달인증",
            "품질인증",
            "기술인증",
            "경영인증",
         ],
         link: [
            "/",
            "/",
            "/",
            "/",
         ]
      },
      {
         title: "원스톱 서비스",
         category: [
            "서비스 내용",
            "서비스 인력",
            "세부내용",
         ],
         link: [
            "/",
            "/",
            "/",
         ]
      },
      {
         title: "고객지원",
         category: [
            "공지사항",
            "정보공유",
            "채용안내",
            "자주묻는 질문",
            "문의하기",
         ],
         link: [
            "/",
            "/",
            "/",
            "/",
            "/",
         ]
      },
   ]

   return (
      <Container id="footer" className="xl:mt-120 mt-60">
         <div className="container xl:flex block justify-between xl:pt-40 pt-24 xl:pb-40 pb-32">
            <div>
               <img className="logo xl:mb-20 mb-24" src={Logo} alt="logo" />
               <div className="contents_wrap xl:mb-24 mb-24 xl:pt-0 pt-24">
                  <div className="xl:flex">
                     <p className="xl:block inline-block leading-1em xl:text-14 text-12">
                        <strong className="xl:inline block xl:opacity-60 xl:w-auto text-white xl:pb-0 pb-8">회사명&nbsp;</strong>
                        <span className="opacity-60 border_r text-white">&#40;주&#41;우수조달컨설팅</span>
                     </p>
                     <p className="xl:block inline-block leading-1em xl:text-14 text-12 opacity-60 text-white">
                        <strong className="text-white">대표자명&nbsp;</strong>임기원
                     </p>
                  </div>
                  <div className="xl:flex xl:mt-12 mt-16">
                     <p className="border_r border_pc leading-1em xl:text-14 text-12">
                        <strong className="xl:opacity-60 xl:w-auto w-full text-white xl:pb-0 pb-8">본사&nbsp;</strong>
                        <span className="opacity-60 text-white">경기도 수원시 영통구 신원로 55 테크트리영통 지식산업센터 913~914호</span>
                     </p>
                     <p className="xl:block inline-block border_r leading-1em xl:text-14 text-12 opacity-60 text-white">TEL 031-234-2870</p>
                     <p className="xl:block inline-block xl:text-14 text-12 leading-1em opacity-60 text-white">FAX 031-224-2870</p>
                  </div>
                  <div className="xl:flex xl:mt-12 mt-16">
                     <p className="border_r border_pc xl:flex leading-1em xl:text-14 text-12">
                        <strong className="xl:opacity-60 xl:w-auto w-full text-white xl:pb-0 pb-8">부산지사&nbsp;</strong>
                        <span className="xl:block inline-block xl:text-14 text-12 leading-1em opacity-60 text-white">부산광역시 부산진구 엄광로 386번길 33</span>
                     </p>
                     <p className="xl:block inline-block border_r leading-1em xl:text-14 text-12 opacity-60 text-white">TEL 070-8801-5411 </p>
                     <p className="xl:block inline-block xl:text-14 text-12 leading-1em opacity-60 text-white">FAX 070-4179-2871</p>
                  </div>
                  <div className="xl:flex xl:mt-12 mt-16">
                     <p className="xl:flex xl:border_r leading-1em xl:text-14 text-12">
                        <strong className="xl:opacity-60 xl:w-auto w-full text-white xl:pb-0 pb-8">광주지사&nbsp;</strong>
                        <span className="xl:block inline-block border_r leading-1em xl:text-14 text-12 opacity-60 text-white">광주광역시 북구 첨단과기로 208번길 17-15, 306호&#40;오룡동&#41;3</span>
                     </p>
                     <p className="xl:block inline-block leading-1em xl:text-14 text-12 opacity-60 text-white">TEL 062-971-5688~9</p>
                  </div>
               </div>
               <small className="xl:text-14 font-light opacity-60 text-white">Copyright &#40;주&#41;우수조달컨설팅 All Right Reserved.</small>
            </div>
            <div className="xl:flex hidden xl:gap-40">
               {
                  navItems.map((navItem, index) => (
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
                  ))
               }
            </div>
         </div>
      </Container>
   )
}