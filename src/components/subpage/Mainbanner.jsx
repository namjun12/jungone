import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

const MainBannerWrap = styled.div`
   position: relative;
   height: 100vh;
   max-height: 1080px;
   background-size: cover;
   background-position: bottom 60px center;
   background-attachment: fixed;
   background-image: url(${props => props.bg});
   .banner{
      height: calc(100vh - 60px);
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
`

const Mainbanner = ({ bannerInfo, tabInfo }) => {
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

         if (isScrollingDown && scrollTop < winHeight / 2) {
            setIsAnimating(true);
            gsap.to(window, {
               scrollTo: { y: winHeight, autoKill: false },
               duration: duration,
               onComplete: () => setIsAnimating(false),
            });
         }
         // if (!isScrollingDown && scrollTop < winHeight / 5) {
         //    setIsAnimating(true);
         //    gsap.to(window, {
         //       scrollTo: { y: 0, autoKill: false },
         //       duration: duration,
         //       onComplete: () => setIsAnimating(false),
         //    });
         // }


         setLastScrollY(scrollTop);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScrollY, isAnimating]);

   return (
      <MainBannerWrap bg={bannerInfo.bgImgPath}>
         <div className='banner'>
            <div className='text-wrap'>
               <h2 className='text-center leading-1em xl:text-68 font-bold text-white'>{bannerInfo.title}</h2>
               <p className='text-center xl:text-20 xl:mt-40 text-white'>{bannerInfo.subText}</p>
            </div>
            <div className='scroll-down-wrap'>
               <p className='text-center leading-1em xl:text-16 font-light text-white'>Scroll Down</p>
               <div className='line-wrap flex flex-col xl:mt-16'>
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
      </MainBannerWrap>
   )
}

export default Mainbanner