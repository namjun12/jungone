import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link, useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

gsap.registerPlugin(ScrollToPlugin);

const MainBannerWrap = styled.div`
   position: relative;
   height: 100vh;
   max-height: 1080px;
   .banner{
      height: calc(100% - 60px);
      background-size: cover;
      background-position: bottom center;
      background-image: url(${props => props.bg});
      .text-wrap{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
      .scroll-down-wrap{
         position: absolute;
         bottom: 60px;
         left: 50%;
         transform: translateX(-50%);
         .line-wrap{
            width: 1px;
            margin-left: auto;
            margin-right: auto;
            .line{
               width: 100%;
               height: 35px;
               &.type02{
                  height: 50px;
               }
            }
         }
      }
   }
   .tab{
      width: 100%;
      &.on{
         z-index: 99;
         position: fixed;
         top: 0px;
         left: 0px;
      }
      .tab-item{
         .btn-tab{
            width: 288px;
            height: 60px;
            &.on{
               font-weight: 700;
               box-shadow: inset 0px -3px 0px 0px var(--pointColor05);
            }
         }
      }
   }
   @media screen and (max-width:1500px){
      .tab{
         .tab-item{
            .btn-tab{
               width: 150px;
            }
         }
      }
   }
   @media screen and (max-width: 767px){
      .banner{
         height: calc(100% - 48px);
         background-position: bottom left 12%;
         .text-wrap{
            width: 100%;
         }
         .scroll-down-wrap{
            bottom: 48px;
         }
      }
      .tab{
         display: none;
      }
      .mo-tab-wrap{
         display: block;
         width: 100%;
         &.fix{
            z-index: 999;
            position: fixed;
            top: 0px;
            left: 0px;
         }
         .mo-tab{
            overflow: hidden;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 48px;
            border-bottom: 1px solid var(--subColor05);
            background-color: #fff;
            &.on{
               overflow: visible;
               position: fixed;
               top: 0px;
               left: 0px;
               height: auto;
               .icon{
                  transform: rotate(180deg);
               }
            }
            .list{
               .item{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                  height: 48px;
                  padding: 0px 16px;
                  .icon{
                     display: none;
                  }
               }
               &.on{
                  order: -1;
               }
               &.on .icon{
                  display: block;
               }
            }
         }
      }
   }
`

const Mainbanner = ({ bannerInfo, tabInfo }) => {
   const isMobile = window.innerWidth < 768;
   const pathname = useLocation().pathname
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   const duration = 0.7;

   useEffect(() => {
      const winHeight = window.innerHeight;
      const tabEl = document.querySelector(".tab")
      const tabHeight = tabEl.clientHeight;

      const handleScroll = () => {
         const scrollTop = document.documentElement.scrollTop
         const isScrollingDown = scrollTop > lastScrollY;

         if (scrollTop >= winHeight - tabHeight) {
            tabEl.classList.add("on")
         } else {
            tabEl.classList.remove("on")
         }

         if (isAnimating) return;

         if (!isMobile && isScrollingDown && scrollTop < winHeight / 2) {
            setIsAnimating(true);
            gsap.to(window, {
               scrollTo: { y: winHeight, autoKill: false },
               duration: duration,
               onComplete: () => setIsAnimating(false),
            });
         }
         setLastScrollY(scrollTop);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScrollY, isAnimating, isMobile]);

   useEffect(() => {
      const moTabEl = document.querySelector(".mo-tab-wrap")
      const winHeight = window.innerHeight;

      const handleScroll = () => {
         const scrollTop = document.documentElement.scrollTop
         if (isMobile && scrollTop >= winHeight - 48) {
            moTabEl.classList.add("fix")
         } else {
            moTabEl.classList.remove("fix")
         }
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [isMobile])

   useEffect(() => {
      const winHeight = window.innerHeight;
      document.getElementById("mb-wrap").style.height = `${winHeight}px`
   }, [])

   // mobile tab
   const [tabShow, setTabShow] = useState(false);
   const tabClick = () => {
      setTabShow(prev => !prev)
   }

   return (
      <MainBannerWrap id='mb-wrap' bg={bannerInfo.bgImgPath}
      >
         <div className='banner'>
            <div className='text-wrap'>
               <h2 className='text-center leading-1em xl:text-68 text-32 font-bold text-white'>{bannerInfo.title}</h2>
               <p
                  className='sub-text text-center xl:text-20 text-14 xl:mt-40 mt-24 text-white'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bannerInfo.subText) }}
               />
            </div>
            <div className='scroll-down-wrap'>
               <p className='text-center leading-1em xl:text-16 font-light text-white'>Scroll Down</p>
               <div className='line-wrap flex flex-col xl:mt-16 mt-8'>
                  <div className='line hide-text bg-white'>line1</div>
                  <div className='line hide-text type02 opacity-30 bg-white'>line2</div>
               </div>
            </div>
         </div>
         <ul className='tab flex justify-center bg-white'>
            {tabInfo.map((tabInfo, index) => (
               <li className='tab-item' key={index}>
                  <Link
                     to={tabInfo.path}
                     className={`${pathname === tabInfo.path ? "on" : ""} btn-tab flex justify-center items-center xl:text-18`}
                  >
                     {tabInfo.title}
                  </Link>
               </li>
            ))}
         </ul>
         <div className='mo-tab-wrap hidden'>
            <ul
               onClick={() => tabClick()}
               className={`${tabShow ? "on" : ""} mo-tab`}
            >
               {tabInfo.map((tabInfo, index) => (
                  <li
                     className={`${pathname === tabInfo.path ? "on" : ""} list`}
                     key={index}
                  >
                     <Link
                        className="item text-14 font-semibold text-pointColor01"
                        to={tabInfo.path}
                     >
                        <p>{tabInfo.title}</p>
                        {pathname === tabInfo.path && <i className='icon xi-caret-down-circle-o text-18 text-pointColor01'></i>}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </MainBannerWrap>
   )
}

export default Mainbanner