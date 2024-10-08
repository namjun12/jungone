import { useEffect, useState } from "react";
import styled from 'styled-components';

// Images
import fixedClose from "../images/common/icon/fixed-btn/close.png"
import sns01 from "../images/common/icon/fixed-btn/tel.png"
import sns02 from "../images/common/icon/fixed-btn/kakao.png"
import sns03 from "../images/common/icon/fixed-btn/youtube.png"
import sns04 from "../images/common/icon/fixed-btn/blog.png"
import sns05 from "../images/common/icon/fixed-btn/instagram.png"

// Top Btn
const ToTopWrap = styled.div`
   .Top_Scroll_btn {
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: .3s;
   }

   .Top_Scroll_btn.active {
      opacity: 1;
   }

   .Top_Scroll_btn i {
      z-index: 2;
      font-size: 24px;
      color: #fff;
   }

   .Top_Scroll_btn .progress_bar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
   }

   .Top_Scroll_btn .progress_bar::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      background-color: var(--pointColor01);
      border-radius: 100%;
   }
`

const TopBtn = () => {

   useEffect(() => {

      const topScrollBtn = document.querySelector('.Top_Scroll_btn');;

      if (topScrollBtn) {
         topScrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
         });

         document.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 88) {
               topScrollBtn.classList.add('active');
            } else {
               topScrollBtn.classList.remove('active');
            }

            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const color = getColorFromPercentage(scrollPercent);

            const progressBar = topScrollBtn.querySelector('.progress_bar');;
            if (progressBar) {
               progressBar.style.background = `conic-gradient(${color} 0% ${scrollPercent}%, #79926B ${scrollPercent}% 100%)`;
            }
         });
      }

      function getColorFromPercentage(percentage) {
         const startColor = [121, 146, 107]; // RGB 값으로 작성해야함!
         const endColor = [121, 146, 107];

         const color = startColor.map((start, i) => {
            return Math.round(start + (endColor[i] - start) * (percentage / 100));
         });

         return `rgb(${color.join(',')})`;
      }
   }, [])

   return (
      <ToTopWrap className="top_btn_wrap">
         <button className="Top_Scroll_btn">
            <i className="xi-arrow-up"></i>
            <div className="progress_bar"></div>
         </button>
      </ToTopWrap>
   )
}
// Top Btn

// Contact Btn
const ContactWrap = styled.div`
   .handle{
      display: none;
      border-radius: 50%;
   }
   .handle.on{
      display: block;
   }
`
const Contact = () => {

   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <ContactWrap className="xl:mb-16 mb-8">
         <button
            onClick={() => setActiveIndex(1)}
            className={`handle btn xl:mb-16 mb-8 bg-pointColor02 ${activeIndex === 0 ? "on" : ""}`}
         >
            <i className="xl:text-24 text-16 font-medium text-white xi-drag-handle" />
         </button>
         {activeIndex === 1 &&
            <div className="flex flex-col xl:gap-16 gap-8">
               <button
                  onClick={() => setActiveIndex(0)}
                  className={`handle btn ${activeIndex === 1 ? "on" : ""}`}
               >
                  <img src={fixedClose} alt="" />
               </button>
               <a className="btn" href="tel:1522-5482">
                  <img src={sns01} alt="전화 아이콘" />
               </a>
               <a
                  className="btn" 
                  href="http://pf.kakao.com/_xkCagG/chat"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={sns02} alt="카톡 아이콘" />
               </a>
               <a className="btn" href="https://www.instagram.com/junglee_lab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
                  <img src={sns05} alt="인스타 아이콘" />
               </a>
               <a className="btn" href="https://www.youtube.com/@tv2381" target="_blank" rel="noreferrer">
                  <img src={sns03} alt="유튜브 아이콘" />
               </a>
               <a className="btn" href="https://blog.naver.com/niceout86" target="_blank" rel="noreferrer">
                  <img src={sns04} alt="블로그 아이콘" />
               </a>
            </div>}
      </ContactWrap>
   )
}
// Contact Btn
const FixedBtnWrap = styled.div`
   z-index: 9990;
   position: fixed;
   bottom: 20px;
   right: 20px;
   & .btn{
      width: 48px;
      height: 48px;
      & img{
         width: 100%;
         height: 100%;
      }
   }
`
const FixedBtn = () => {
   return (
      <FixedBtnWrap className="fiex_btn_wrap">
         <Contact />
         <TopBtn />
      </FixedBtnWrap>
   )
}

export default FixedBtn