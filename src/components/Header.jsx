import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// images
import logo from "../images/common/logo.png"
import logoWhite from "../images/common/logo_white.png"
import { useEffect, useState } from "react";

// styled
const Container = styled.header`
   z-index: 9980;
   position: absolute;
   top: 0px;
   left: 0px;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   width: 100%;
   height: 80px;
   border-bottom: 1px solid rgba(255,255,255,0.3);
   & *{
      color: #fff;
   }
   &.mouseover{
      height: auto;
      padding-bottom: 12px;
      background-color: #fff;
      & .logo_normal{
         display: block;
      }
      & .logo_white{
         display: none;
      }
      & .item_dep02_wrap{
         display: block;
      }
      & .tel_wrap{
         border-color: var(--pointColor01);
         background-color: var(--pointColor01);
      }
   }
   &.mouseover *,
   &.open *,
   &.on *{
      color: var(--subColor01);
   }
   &.on{
      border-bottom: 1px solid var(--subColor05);
      background-color: #fff;
   }
   &.on .btn_menu_wrap{
      & .btn_menu{
         color: var(--subColor01);
      }
   }
   & .logo_normal{
      display: none;
   }
   & .logo_white{
      display: block;
   }
   &.on .logo_normal,
   &.open .logo_normal{
      display: block;
   }
   &.on .logo_white,
   &.open .logo_white{
      display: none;
   }
   & .tel_wrap{
      line-height: 1em;
      border: 1px solid #fff;
      border-radius: 9999px;
      padding: 12px 24px;
      color: #fff;
      & *{
         color: #fff;
      }
   }
   &.on .tel_wrap{
      border-color: var(--pointColor01);
      background-color: var(--pointColor01);
   }
   & .right_item_wrap{
      height: 80px;
   }
   @media screen and (max-width:1500px){
      *{
         font-size: 15px;
      }
      .category_dep01,
      .category_dep02{
         width: 150px;
      }
      .tel_wrap {
         white-space: nowrap;
      }
   }
   @media screen and (max-width:1279px){
      height: 58px;
      .btn_menu_wrap {
         .btn_menu{
            font-size: 26px;
         }
      }
      &.open{
         /* height: auto; */
         background-color: #fff;
      }
      &.open .category_wrap{
         overflow: scroll;
         display: block;
         position: absolute;
         top: 58px;
         left: 0px;
         width: 100%;
         height: calc(100vh - 50px);
         padding-top: 24px;
         background-color: #fff;
         .category_dep01, .category_dep02{
            justify-content: flex-start;
            width: 100%;
            height: 45px;
            text-align: left;
            padding: 0px 16px;
         }
         .category_dep01{
            font-weight: 600;
            &.on+.item_dep02_wrap{
               display: block;
            }
            &.on>.icon_arrow{
               transform: rotate(180deg);
            }
         }
         .category_dep02{
            height: 40px;
            padding-left: 24px;
            font-size: 13px;
         }
      }
      .right_item_wrap{
         height: 50px;
         .btn_menu_wrap {
            width: 58px;
            height: 58px;
         }
      }
   }
`;
const CategoryWrap = styled.ul` 
   display: flex;
   & .item_dep02_wrap{
      display: none;
   }
   @media screen and (max-width:1279px){
      display: none;
   }
`;
const Logo = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: auto;
   height: 80px;
   &>img{
      height: 48px;
   }
   @media screen and (max-width:1279px){
      height: 100%;
      &>img{
         height: 26px;
      }
   }
`
const CategoryItemDep01 = styled.p`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 80px;
`;
const CategoryItemDep02 = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 50px;
`;
const MenuIcon = styled.button`
   width: 80px;
   height: 80px;
`

export default function Header() {

   const pathname = useLocation().pathname;
   const [headerActive, setHeaderActive] = useState(0);
   const [categoryIndex, setCategoryIndex] = useState(null);
   const isMobile = document.documentElement.clientWidth < 1280 ? true : false;

   const headerIndex = () => {
      setHeaderActive((prev => prev === 0 ? 1 : 0))
   }

   useEffect(() => {
      const header = document.getElementById("header")
      if (!isMobile) {
         header?.addEventListener("mouseover", () => {
            header.classList.add("mouseover")
         })
         header?.addEventListener("mouseout", () => {
            header.classList.remove("mouseover")
         })
      }

      const btnMenu = document.querySelector(".btn_menu_wrap")
      if (btnMenu) {
         btnMenu.addEventListener("click", () => {
            header?.classList.add("on", "mouseover")
         })
      }

      const categoryDep01 = document.querySelectorAll(".category_dep01");
      if (categoryDep01) {
         categoryDep01.forEach((element, index) => {
            element.addEventListener("click", () => {
               setCategoryIndex((prev) => prev === index ? null : index)
            })
         })
      }
   }, [isMobile])

   useEffect(() => {
      window.scrollTo(0, 0);
      document.getElementById("header")?.classList.remove("mouseover", "open")
      setHeaderActive(0)

   }, [pathname]);

   const categoryData = [
      {
         title: "회사소개",
         subCategory: [
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
            },
         ]
      },
      {
         title: "공간정리",
         subCategory: [
            {
               title: "서비스소개",
               path: "/space-organization/service",
            },
         ]
      },
      {
         title: "원스톱 토탈서비스",
         subCategory: [
            {
               title: "서비스소개",
               path: "/one-stop/service",
            },
         ]
      },
      {
         title: "공간정원 연구소",
         subCategory: [
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
      },
      {
         title: "커뮤니티",
         subCategory: [
            {
               title: "공지사항",
               path: "/community/notice",
            },
            {
               title: "자주묻는 질문",
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
      },
   ]

   return (
      <Container id="header" className={`${headerActive === 1 ? "open" : "close"}`}>
         <Logo className="xl:ml-40 ml-16" to="/">
            <img className="xl:h-48 h-34 logo_normal" src={logo} alt="logo" />
            <img className="xl:h-48 h-34 logo_white" src={logoWhite} alt="logo" />
         </Logo>
         <CategoryWrap className="category_wrap">
            {categoryData.map((info, index) => (
               <li key={index}>
                  <CategoryItemDep01
                     className={`${categoryIndex === index ? "on" : ""} category_dep01 xl:text-18`}
                  >
                     {info.title}
                     <i className="icon_arrow xl:hidden inline ml-auto text-15 xi-angle-down-min"></i>
                  </CategoryItemDep01>
                  <ul className="item_dep02_wrap">
                     {info.subCategory.map((subInfo, index) => (
                        <li key={index}>
                           <CategoryItemDep02 className="category_dep02" to={subInfo.path}>{subInfo.title}</CategoryItemDep02>
                        </li>
                     ))}
                  </ul>
               </li>
            ))}
         </CategoryWrap>
         <div className="right_item_wrap flex justify-center items-center xl:gap-20 xl:pr-40">
            <a className="tel_wrap xl:flex hidden items-center xl:gap-8 xl:text-16" href="#" onClick={() => alert("준비 중입니다")}>
               공간정원 창업
            </a>
            <MenuIcon onClick={() => headerIndex()} className="btn_menu_wrap xl:hidden flex justify-center items-center">
               <i className="btn_menu xi-apps text-white xl:text-30 text-26"></i>
            </MenuIcon>
         </div>
      </Container>
   )
}