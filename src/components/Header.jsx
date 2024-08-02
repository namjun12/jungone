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
   &.mouseover *{
      color: var(--subColor01);
   }
   &.on{
      border-bottom: 1px solid var(--subColor05);
      background-color: #fff;
   }
   &.on *{
      color: var(--subColor01);
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
   &.on .logo_normal{
      display: block;
   }
   &.on .logo_white{
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
   @media screen and (max-width:1280px){
      height: 50px;
      .btn_menu_wrap {
         .btn_menu{
            font-size: 26px;
         }
      }
      &.open{
         height: auto;
      }
      &.open .category_wrap{
         overflow: scroll;
         display: block;
         position: absolute;
         top: 50px;
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
            width: 50px;
            height: 50px;
         }
      }
   }
`;
const CategoryWrap = styled.ul` 
   display: flex;
   & .item_dep02_wrap{
      display: none;
   }
   @media screen and (max-width:1280px){
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
   @media screen and (max-width:1280px){
      height: 50px;
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
               path: "/",
            },
            {
               title: "인재상",
               path: "/",
            },
            {
               title: "부분컨설팅",
               path: "/",
            },
         ]
      },
      {
         title: "공간정리",
         subCategory: [
            {
               title: "부분컨설팅",
               path: "/",
            },
            {
               title: "전체컨설팅",
               path: "/",
            },
            {
               title: "가구재배치",
               path: "/",
            },
            {
               title: "사업공간",
               path: "/",
            },
         ]
      },
      {
         title: "토탈홈케어",
         subCategory: [
            {
               title: "토탈홈케어 서비스",
               path: "/",
            },
         ]
      },
      {
         title: "공간정원연구소",
         subCategory: [
            {
               title: "공간 가드닝 연구",
               path: "/",
            },
            {
               title: "생활가구, 수납도구 개발",
               path: "/",
            },
            {
               title: "교육 기획",
               path: "/",
            },
            {
               title: "연구소",
               path: "/",
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
         <div className="right_item_wrap flex items-center xl:gap-20 xl:pr-40">
            <a className="tel_wrap xl:flex hidden items-center xl:gap-8 xl:text-16" href="#" onClick={() => alert("준비 중입니다")}>
               공간정원 창업
            </a>
            <MenuIcon onClick={() => headerIndex()} className="btn_menu_wrap xl:hidden block">
               <i className="btn_menu xi-align-right text-white xl:text-30 text-26"></i>
            </MenuIcon>
         </div>
      </Container>
   )
}