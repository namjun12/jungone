import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Components
import { Title01, StrokeTitle, BtnLink, BtnLink02, BtnViewmore } from '../components/StyledCommon'
import Popup from '../components/Popup'

// Images
import { simbol, pattern01, image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, icon01, icon02, icon03, icon04, icon05, icon06, icon07, icon08, icon09, icon10, icon11 } from '../components/Images'
import axios from 'axios'

// Styled
const circleRotate = keyframes`
   0%{
      transform: rotate(0deg);
   }
   100%{
      transform: rotate(360deg);
   }
`
const circleSacle = keyframes`
   0%{
      opacity: 1;
      transform: translate(-50%, -50%) scale(100%);
   }
   80%{
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(600%);
   }
   100%{
      opacity: 0;
      transform: translate(-50%, -50%) scale(600%);
   }
`
const Container = styled.div`
   overflow-x: hidden;
   .has-simbol{ 
      position: relative;
      &::after{
         content: '';
         display: block;
         clear: both;
         position: absolute;
         top: 0px;
         right: 0px;
         transform: translate(100%, -50%);
         width: 34px;
         height: 34px;
         background-image: url(${simbol});
         background-size: cover;
      }
   }
   .main-banner {
      height: 100vh;
      max-height: 1080px;
      .mb-swiper{
         height: 100%;
         &,
         & .swiper-wrapper,
         & .swiper-slide{
            height: 100%;
         }
         .contents-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            *{
               text-align: center;
               color: #fff;
            }
         }
         .mb-img {
            z-index: -9;
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
         .pagination{
            z-index: 9;
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: fit-content;
            .swiper-pagination-bullet{
               opacity: 0.4;
               width: 4px;
               height: 24px;
               border-radius: 0px;
               margin: 0px 8px;
               background-color: #fff;
            }
            .swiper-pagination-bullet-active{
               opacity: 1;
            }
         }
         .navigation{
            z-index: 9;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: space-between;
            width: 100%;
            .btn {
               cursor: pointer;
               .line-wrap{
                  display: flex;
                  align-items: center;
                  .line{
                     height: 1px;
                     background-color: #fff;
                     &.short{
                        opacity: 1;
                        width: 72px;
                     }
                     &.long{
                        opacity: 0.5;
                        width: 128px;
                     }
                  }
               }
            }
         }
      }
   }
   .guard{
      gap: 35px;
      .main-image{
         width: 100%;
         max-width: 950px;
         margin-left: -240px;
      }
      .text-wrap{
         width: 100%;
         max-width: 690px;
      }
      .line{
         width: 100%;
         height: 1px;
         margin-left: -100px;
         background-color: var(--pointColor01);
      }
   }
   .ceo{
      .text-wrap{
         width: 100%;
         max-width: 655px;
         .title-stroke{
            margin-left: -240px;
            margin-bottom: -22px;
         }
      }
      .img-wrap{
         width: 100%;
         max-width: 1024px;
         height: 785px;
         margin-right: -240px;
         .ceo-photo-wrap{
            .ceo-photo{
               z-index: 9;
               top: 0px;
               left: 95px;
               width: 720px;
               height: auto;
            }
            .circle{
               animation: ${circleRotate} 20s 0s linear infinite;
               top: -10px;
               left: 70px;
               width: 670px;
               height: auto;
            }
         }
         .bg-pattern{
            z-index: -9;
            bottom: 0px;
            right: 0px;
            width: 100%;
            height: auto;
         }
      }
   }
   .world{
      .text-wrap{
         width: 100%;
         max-width: 420px;
      }
      .map-wrap{
         width: 960px;
         .spot-wrap{
            position: absolute;
            .text-box{
               opacity: 0.7;
               position: absolute;
               left: 50%;
               transform: translateX(-50%);
               white-space: nowrap;
               display: flex;
               justify-content: center;
               align-items: center;
               width: 200px;
               height: 85px;
            }
            &.item01{
               top: 38%;
               left: 26.5%;
               .text-box{
                  top: 35px;
               }
            }
            &.item02{    
               top: 34%;
               left: 48%;
               .text-box{
                  top: -35px;
                  transform: translate(-50%, -100%);
               }
            }
            &.item03{    
               top: 43%;
               right: 17.5%;
               .text-box{
                  top: 35px;
               }
            }
            .circle{
               width: 8px;
               height: 8px;
               &::before,
               &::after{
                  animation: ${circleSacle} 3s infinite;
                  opacity: 0.4;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background-color: #926B6B;
                  content: '';
                  display: block;
                  clear: both;
               }
               &::after{
                  animation-delay: 1.5s;
               }
               .fix-circle{
                  z-index: 9;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  background-color: red;
               }
            }
         }
      }
   }
   .with{
      .items-wrap{
         grid-template-columns: repeat(3, 1fr);
         .item{
            height: 500px;
            transition: 0.3s;
            border-radius: 24px;
            background-size: auto 100%;
            background-position: center center;
            .icon{
               width: auto;
               height: 45px;
            }
         }
         .item:hover{
            background-size: auto 110%;
         }
      }
   }
   .consulting{
      .num-wrap{
         .item{
            width: 256px;
            flex-direction: column;
            .num{
               display: flex;
               justify-content: center;
               align-items: center;
               width: 40px;
               height: 40px;
               border-radius: 50%;
            }
         }
         .line{
            width: 190px;
            height: 1px;
            height: 1px;
            margin-left: -75px;
            margin-right: -75px;
            background: linear-gradient(to right, #aeaeae 50%, rgba(255, 255, 255, 0) 0%);
            background-size: 8px 1px;
         }
      }
      .contents-wrap{
         .item{
            width: 256px;
            .box{
               height: 200px;
               border-radius: 16px;
               .icon{
                  width: auto;
                  height: 60px;
               }
            }
         }
      }
   }
   .professional{
      .pro-swiper{
         max-width: 1024px;
         margin-right: -240px;
         .swiper-slide{
            width: 550px;
            height: 640px;
            .slide-img{
               width: 100%;
               height: 100%;
               box-shadow: 0 3px 36px 0 rgba(0, 0, 0, 0.16);
               border-radius: 999px 999px 0px 0px;
            }
         }
      }
      .line{
         z-index: 9;
         position: relative;
         width: 745px;
         height: 1px;
         margin-top: 48px;
         margin-right: -100px;
         background-color: var(--subColor04);
      }
      .pro-swiper-text{
         .swiper-slide{
            overflow: hidden;
         }
      }
      .sub-title{
         position: relative;
         width: fit-content;
         .num{
            opacity: 0.6;
            z-index: -9;
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translate(100%, -50%);
            font-size: 80px;
            font-weight: 700;
            color: var(--pointColor04);
         }
      }
   }
   .people{
      background-image: url(${image11});
      background-size: cover;
      .line{
         z-index: 9;
         position: relative;
         width: 840px;
         height: 1px;
         margin-right: -150px;
         background-color: var(--subColor04);
      }
      .icon-wrap{
         width: 98px;
         height: 98px;
         max-height: 98px;
         border-radius: 50%;
         .icon{
            width: auto;
            height: 50px;
         }
      }
      .main-img{
         width: 100%;
         max-width: 992px;
         height: auto;
         margin-right: -240px;
         margin-bottom: -160px;
      }
   }
   .youtube{
      .thumbnail{
         border-radius: 16px;
      }
   }
   .review{
      .review-swiper{
         .swiper-slide{
            overflow: hidden;
            border-radius: 16px;
            background-color: #fff;
            .thumbnail-wrap{
               width: 100%;
               height: 325px;
            }
            .text-wrap{
               padding: 32px 24px;
               .category:first-of-type {
                  border-right: 2px solid var(--subColor04);
                  padding-right: 16px;
                  margin-right: 16px;
               }
            }
         }
      }
   }
   @media screen and (max-width:1919px){
      .ceo {
         .text-wrap .title-stroke{
            margin-left: 0px;
         }
      }
   }
   @media screen and (max-width: 1500px){
      .guard {
         align-items: flex-start;
         .main-image{
            width: 40%;
            margin-left: 0px;
         }
      }
      .ceo{
         .text-wrap{
            max-width: 550px;
         }
      }
      .people {
         .main-img{
            max-width: 750px;
            margin-right: 0px;
            margin-bottom: 0px;
         }
      }
   }
   @media screen and (max-width:1279px){
      .has-simbol::after{
         width: 15px;
         height: 15px;
      }
      .main-banner{
         .mb-swiper{
            .navigation,
            .pagination{
               display: none;
            }
         }
      }
      .guard{
         align-items: center;
         .main-image{
            width: 50%;
            max-width: 100%;
         }
      }
      .ceo{
         .text-wrap{
            width: 60%;
            padding-right: 32px;
            .title-stroke{
               margin-bottom: -13px;
            }
         }
         .img-wrap{
            height: 38vw;
            .ceo-photo-wrap{
               .ceo-photo{
                  width: 50%;
               }
               .circle{
                  width: 50%;
               }
            }
         }
      }
      .world{
         *{
            text-align: center;
         }
         .text-wrap{
            max-width: 100%;
         }
         .map-wrap{
            width: 100%;
            .spot-wrap{
               .text-box{
                  width: auto;
                  height: auto;
                  padding: 4px 12px;
               }
               &.item01>.text-box{
                  top: 15px;
               }
               &.item02>.text-box{
                  top: -15px;
               }
               &.item03>.text-box{
                  top: 15px;
               }
               .circle{
                  width: 4px;
                  height: 4px;
                  &::before,
                  &::after{
                     width: 4px;
                     height: 4px;
                  }
               }
            }
         }
      }
      .with {
         .items-wrap {
            .item{
               background-size: cover;
               &:hover{
                  background-size: cover;
               }
            }
         }
      }
      .consulting{
         .contents-wrap {
            flex-wrap: wrap;
            gap: 16px;
            .item{
               .num-wrap{
                  position: relative;
                  .num{
                     position: relative;
                     top: 0px;
                     left: 50%;
                     transform: translateX(-50%);
                     width: 30px;
                     height: 30px;
                     border-radius: 50%;
                  }
               }
               &:not(:last-of-type){
                  .num-wrap::after{
                     content: '';
                     display: block;
                     clear: both;
                     z-index: -9;
                     position: absolute;
                     top: 15px;
                     left: calc(30px + 12px);
                     transform: translateX(50%);
                     width: calc(100% - 32px);
                     height: 1px;
                     background: linear-gradient(to right, #aeaeae 50%, rgba(255, 255, 255, 0) 0%);
                     background-size: 8px 1px;
                  }
               }
            }
         }
      }
      .professional{
         *{
            text-align: center;
         }
         .pro-swiper{
            margin-left: auto;
            margin-right: auto;
            .swiper-slide{
               height: auto;
               box-sizing: border-box;
               .slide-img{
                  max-width: 400px;
                  margin-left: auto;
                  margin-right: auto;
               }
            }
         }
         .line{
            width: 100%;
         }
         .sub-title{
            margin-top: 12px;
            .num{
               right: 6px;
               font-size: 40px;
            }
         }
      }
      .people{
         .contents-wrap{
            width: 45%;
            padding-right: 24px;
            .icon-wrap{
               width: 70px;
               min-width: 70px;
               height: 70px;
               .icon{
                  height: 40px;
               }
            }
            .line{
               width: 90%;
            }
         }
         .main-img{
            width: 50%;
         }
      }
   }
   @media screen and (min-width:1121px) and (max-width: 1279px){
      .consulting {
         .contents-wrap .item:nth-of-type(4){
            .num-wrap::after{
               content: none;
            }
         }
      }
   }
   @media screen and (min-width:849px) and (max-width: 1120px){
      .consulting {
         .contents-wrap .item:nth-of-type(3){
            .num-wrap::after{
               content: none;
            }
         }
      }
   }
   @media screen and (max-width: 848px){
      .consulting {
         .contents-wrap{
            .item{
               width: calc(50% - 8px);
               .box{
                  width: 100%;
                  height: auto;
                  min-height: 140px;
                  .icon{
                     height: 40px;
                  }
               }
               &:nth-of-type(2),
               &:nth-of-type(4){
                  .num-wrap::after{
                     content: none;
                  }
               }
            }
         }
      }
   }
   @media screen and (max-width: 767px){
      .main-banner{
         .mb-swiper{
            .contents-wrap{
               width: 100%;
               padding: 0px 36px;
            }
         }
      }
      .guard {
         display: block;
         .main-image{
            width: 100%;
         }
      }
      .ceo{
         flex-direction: column;
         .text-wrap{
            order: 1;
            width: 100%;
         }
         .img-wrap{
            order: 0;
            height: 350px;
            margin-right: 0px;
            .ceo-photo-wrap{
               height: 100%;
               .ceo-photo{
                  top: auto;
                  bottom: 20px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: auto;
                  height: calc(100% - 20px);
               }
            }
         }
      }
      .with{
         .items-wrap{
            display: block;
            .item{
               height: 240px;
               &:not(:last-of-type){
                  margin-bottom: 16px;
               }
            }
         }
      }
      .professional {
         margin-bottom: 50%;
      }
      .people{
         .container{
            flex-direction: column;
            *{
               width: 100%;
            }
            .main-img{
               order: 0;
               margin-top: -50%;
            }
            .contents-wrap{
               order: 1;
            }
         }
      }
      .youtube,
      .review{
         .container{
            padding-left: 0px;
            padding-right: 0px;
            .swiper-slide .thumbnail-wrap{
               height: 240px;
            }
         }
      }
   }
`

const Home = () => {

   const isMobile = window.innerWidth < 1280

   // Data
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/main`)
         try {
            setData(response.data.data)
         } catch (error) {
            console.log(error)
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, [])

   const consultingInfo = [
      {
         title: "상담문의",
         image: icon07,
         desc: "전화상담 <br/>1522-5482",
      },
      {
         title: "방문상담 컨설팅",
         image: icon08,
         desc: "방문을 통해 <br/>정리 진단서비스를 진행합니다.",
      },
      {
         title: "컨설팅 일정 협의",
         image: icon09,
         desc: "고객님과 일정 조율 후 <br/>계약을 진행합니다.",
      },
      {
         title: "컨설팅 서비스",
         image: icon10,
         desc: "사용자별 <br/>맞춤 컨설팅 서비스를 제공합니다.",
      },
      {
         title: "해피콜서비스",
         image: icon11,
         desc: "해피콜을 통해 서비스 품질과 고객 만족도를 향상 시킵니다",
      },
   ]
   const withInfo = [
      {
         icon: icon04,
         text: "공간정리",
         bg: image06,
      },
      {
         icon: icon05,
         text: "원스톱 토탈서비스",
         bg: image07,
      },
      {
         icon: icon06,
         text: "공간스타일링",
         bg: image08,
      }
   ]
   const peopleInfo = [
      {
         title: "전문성을 갖춘 인재",
         desc: "자신의 분야에서 최고가 되기 위해 <br class='xl:block hidden' />끊임없이 학습하고 역량을 키우는 인재",
         icon: icon01,
      },
      {
         title: "소통하고 협력하는 인재",
         desc: "구성원의 배려와 신뢰를 바탕으로 <br class='xl:block hidden' />서로를 존중하고 협력하는 인재",
         icon: icon02,
      },
      {
         title: "열정적으로 도전하는 인재",
         desc: "창의적 사고로 변화와 도전을 <br class='xl:block hidden' />두려워하지 않는 열정적인 인재",
         icon: icon03,
      },
   ]

   useEffect(() => {
      const winHeight = window.innerHeight;
      document.querySelector(".main-banner").style.height = `${winHeight}px`
   }, [])

   return (
      <Container>
         <Popup />
         <section className='main-banner'>
            <Swiper
               className="mb-swiper"
               slidesPerView={1}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  el: '.pagination',
               }}
               navigation={{
                  nextEl: '.mb-btn-next',
                  prevEl: '.mb-btn-prev',
               }}
               loop={true}
               modules={[Autoplay, Pagination, Navigation]}
            >
               {loading ? (
                  <SwiperSlide className='hide-text bg-subColor11'>Loading ...</SwiperSlide>
               ) : (
                  data && data.banner ? (
                     data.banner.map((bannerInfo, index) => (
                        <SwiperSlide key={index}>
                           <div className='contents-wrap'>
                              <h2 className='xl:leading-80 leading-44 xl:text-64 text-32 font-bold' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bannerInfo.title) }}></h2>
                              <p className='xl:leading-28 leading-20 xl:text-17 text-14 font-light xl:mt-50 mt-32' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bannerInfo.subTitle) }}></p>
                              {bannerInfo.link &&
                                 <BtnLink className='xl:mt-48 mt-36' to={bannerInfo.link}>
                                    더 알아보기
                                 </BtnLink>}
                           </div>
                           {isMobile ? (
                              <>
                                 {bannerInfo.mobile_image_type === 0 ? (
                                    <img className='mb-img' src={bannerInfo.mobile_image} alt="" />
                                 ) : (
                                    <video className='mb-img' muted autoPlay loop playsInline preload="auto">
                                       <source src={bannerInfo.mobile_image} />
                                    </video>
                                 )}
                              </>
                           ) : (
                              <>
                                 {bannerInfo.image_type === 0 ? (
                                    <img className='mb-img' src={bannerInfo.image} alt="배너 이미지" />
                                 ) : (
                                    <video 
                                    className='mb-img' 
                                    muted loop playsInline preload="auto" 
                                    autoPlay={false}
                                    onCanPlayThrough={(e) => e.currentTarget.play()}
                                    >
                                       <source src={bannerInfo.image} />
                                    </video>
                                 )}
                              </>
                           )}
                        </SwiperSlide>
                     ))
                  ) : (
                     <SwiperSlide className='hide-text'>배너가 존재하지 않습니다.</SwiperSlide>
                  )
               )}
               <div className='pagination' />
               <div className='navigation'>
                  <div className="mb-btn-prev btn">
                     <div className='line-wrap xl:pb-8'>
                        <div className='line long hide-text'>line1</div>
                        <div className='line short hide-text'>line2</div>
                     </div>
                     <p className='text text-right xl:text-16 xl:pr-16 text-white'>Prev</p>
                  </div>
                  <div className="mb-btn-next btn">
                     <div className='line-wrap xl:pb-8'>
                        <div className='line short hide-text'>line1</div>
                        <div className='line long hide-text'>line2</div>
                     </div>
                     <p className='text text-left xl:text-16 xl:pl-16 text-white'>Next</p>
                  </div>
               </div>
            </Swiper>
         </section>
         <section className='container guard flex items-end xl:mt-120 mt-80'>
            <img className='main-image' src={image01} alt="가드닝" />
            <div className='text-wrap xl:mt-0 mt-40'>
               <Title01 className='w-fit has-simbol'>
                  지금 당신의 공간을 <strong>가드닝</strong>하세요
               </Title01>
               <div className='hide-text xl:block hidden line xl:mt-24 xl:mb-32'>line</div>
               <p className='xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-0 mt-24'>
                  만약 우리가 생활하는 모든 공간이 정원이라면,<br className='xl:block hidden' />
                  잡초가 자라고 화초가 시들어가는 모습을 그냥 두거나 방치하지 않을겁니다.<br className='xl:block hidden' />
                  화초에 물을 주고 사랑을 주며 가꾸는것처럼 우리의 생활공간도 가드닝 해주셔야 됩니다.<br />
                  <br />
                  공간정원은 소비자 개개인의 공간과 라이프스타일을 분석하여<br className='xl:block hidden' />
                  1:1 맞춤 정리서비스를 제공합니다.<br className='xl:block hidden' />
                  전문가의 제안을 통해 사용목적에 맞는 공간재구성과 공간의 효율을 높여드립니다.<br />
                  <br />
                  공간정원은 “공간정원 연구소”를 설립하여 정리수납 방법의 연구를 시작으로<br className='xl:block hidden' />
                  공간 스타일링,생활용품 및 가구의 제작까지 연구가 확대되고 있습니다.<br className='xl:block hidden' />
                  이를 바탕으로 국내 시장을 선도하고 나아가 세계시장으로의 진출을 기대하고 있습니다.<br className='xl:block hidden' />
                  <br className='xl:block hidden' />
                  공간정원은 “토탈홈케어”를 통하여 고객의 편의성을 고려한 맞춤 컨설팅을 진행합니다.<br className='xl:block hidden' />
                  정리 뿐만이 아니라 엄선된 협력업체들과 협업하여<br className='xl:block hidden' />
                  이사,정리,청소,전문시공을 원스톱 서비스로 받아볼수 있습니다.<br className='xl:block hidden' />
               </p>
            </div>
         </section>
         <section className='container ceo flex items-center xl:mt-180 mt-80'>
            <div className='text-wrap'>
               <div>
                  <StrokeTitle className='title-stroke whitespace-nowrap xl:mt-0 mt-24'>CEO GREETING</StrokeTitle>
                  <Title01>
                     안녕하세요, <strong>공간정원 대표</strong><br />
                     이정원입니다
                  </Title01>
               </div>
               <p className='xl:leading-36 leading-18 xl:text-20 text-13 xl:mt-40 mt-24'>
                  공간정원은 단순히 서비스의 차원을 넘어 사람을 위한 공간,<br className='xl:block hidden' />
                  사람이 성장하는 공간을 만들어가는 공간 리빌딩 전문기업입니다.<br className='xl:block hidden' />
                  편리하고 필요한 공간을 재구성하는 공간정리에서부터<br className='xl:block hidden' />
                  공간이 돋보일수 있는 홈스타일링과 인테리어 컨설팅까지<br className='xl:block hidden' />
                  “사람”이 중심이되는 맞춤 서비스를 연구하고 개발하여 서비스합니다.<br className='xl:block hidden' />
                  나아가 우리의 미래인 꿈나무들을 위한 성장환경과<br className='xl:block hidden' />
                  시니어를 위한 주거 환경의 개선에 이바지하고 국내를 넘어<br className='xl:block hidden' />
                  세계의 각 문화와 생활환경에 맞는 모든 사람들의<br className='xl:block hidden' />
                  더 나은 생활을 선도해 가겠습니다.
               </p>
               <BtnViewmore className='xl:mt-40 mt-32' to="/company/ceo">
                  <p className="txt">View More</p>
                  <i className="xi-long-arrow-right"></i>
               </BtnViewmore>
            </div>
            <div className='img-wrap relative'>
               <div className='ceo-photo-wrap relative'>
                  <img className='ceo-photo absolute' src={image02} alt="ceo" />
                  <img className='circle absolute' src={image03} alt="원 " />
               </div>
               <img className='bg-pattern absolute' src={pattern01} alt="배경 패턴" />
            </div>
         </section>
         <section className='bg-pointColor04'>
            <div className='container world xl:flex items-center xl:mt-160 mt-80 xl:pt-80 pt-40 xl:pb-80 pb-40'>
               <div className='text-wrap'>
                  <Title01>
                     <strong>세계로 뻗어나가는 </strong><br />
                     공간정원
                  </Title01>
                  <p className='xl:leading-36 leading-18 xl:text-20 text-13 xl:mt-40 mt-24'>
                     공간정원은 국내를 시작으로 다양한 문화권의 생활과 정리기법들을 연구 개발하여 세계인들의 생활과
                     삶의 질 향상에 기여하겠습니다
                  </p>
               </div>
               <div className='map-wrap relative xl:mt-0 mt-32'>
                  <img className='w-full' src={image05} alt="map" />
                  <div className='spot-wrap item01 absolute'>
                     <div className='circle hide-text'>
                        <div className='fix-circle'></div>
                     </div>
                     <p className='xl:leading-26 xl:text-18 text-12 text-box text-white bg-pointColor01'>
                        미국 진출<br />
                        &#40;~2029&#41;
                     </p>
                  </div>
                  <div className='spot-wrap item02 absolute'>
                     <div className='circle hide-text'>
                        <div className='fix-circle'></div>
                     </div>
                     <p className='xl:leading-26 xl:text-18 text-12 text-box text-white bg-pointColor01'>
                        유럽진출<br />
                        &#40;~2030&#41;
                     </p>
                  </div>
                  <div className='spot-wrap item03 absolute'>
                     <div className='circle hide-text'>
                        <div className='fix-circle'></div>
                     </div>
                     <p className='xl:leading-26 xl:text-18 text-12 text-box text-white bg-pointColor01'>
                        국내 15개 지사<br />
                        설립예정 &#40;~2026&#41;
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className='container with xl:mt-160 mt-80'>
            <div>
               <Title01 className='text-center'>
                  <strong>공간정원과&nbsp;</strong>함께하세요
               </Title01>
               <p className='text-center xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-32 mt-24'>
                  깔끔함에 국한된 기존 정리수납에서 벗어나 깔끔함과 더불어 편리함은 물론, 각 사용자 성향을 반영하여 집 전체의 리빌딩을 서비스합니다.
               </p>
            </div>
            <ul className='items-wrap grid gap-24 xl:mt-48 mt-40'>
               {withInfo.map((withInfo, index) => (
                  <li
                     style={{ backgroundImage: `url(${withInfo.bg})` }}
                     className='item flex justify-center items-center'
                     key={index}
                  >
                     <div className='flex flex-col justify-center items-center'>
                        <img className='icon' src={withInfo.icon} alt="아이콘" />
                        <p className='leading-1em xl:text-22 text-18 mt-16 text-white'>{withInfo.text}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </section>
         <section className='consulting container xl:mt-160 mt-80'>
            <div>
               <Title01 className='text-center'>
                  <strong>공간정원의 컨설팅</strong>이 궁금하신가요?
               </Title01>
               <p className='text-center xl:leading-36 xl:text-20 xl:mt-32 mt-24'>사용자별 맞춤 공간컨설팅 상담을 공간정원에서 받아보세요.</p>
               <div className='xl:mt-56 mt-40'>
                  <div className='xl:flex hidden num-wrap justify-center items-center'>
                     <div className='item flex justify-center items-center'>
                        <p className='num xl:text-18 font-bold text-white bg-pointColor01'>01</p>
                     </div>
                     <div className='line hide-text'>line</div>
                     <div className='item flex justify-center items-center'>
                        <p className='num xl:text-18 font-bold text-white bg-pointColor01'>02</p>
                     </div>
                     <div className='line hide-text'>line</div>
                     <div className='item flex justify-center items-center'>
                        <p className='num xl:text-18 font-bold text-white bg-pointColor01'>03</p>
                     </div>
                     <div className='line hide-text'>line</div>
                     <div className='item flex justify-center items-center'>
                        <p className='num xl:text-18 font-bold text-white bg-pointColor01'>04</p>
                     </div>
                     <div className='line hide-text'>line</div>
                     <div className='item flex justify-center items-center'>
                        <p className='num xl:text-18 font-bold text-white bg-pointColor01'>05</p>
                     </div>
                  </div>
                  <ul className='contents-wrap flex justify-center xl:gap-40'>
                     {consultingInfo.map((consultingInfo, index) => (
                        <li className='item' key={index}>
                           <div className='num-wrap'>
                              <p className='num text-13 xl:hidden flex justify-center items-center bg-pointColor01 font-bold text-white'>0{index + 1}</p>
                           </div>
                           <h4 className='text-center xl:text-22 font-bold xl:mt-16 mt-8'>{consultingInfo.title}</h4>
                           <div className='box flex flex-col justify-center items-center xl:gap-20 gap-16 xl:mt-24 mt-16 bg-subColor07'>
                              <img className='icon' src={consultingInfo.image} alt="아이콘" />
                              <p
                                 className='text-center xl:leading-22 leading-18 xl:text-14 text-13'
                                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(consultingInfo.desc) }}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <BtnLink02 className='xl:mt-80 mt-40' to="/community/contact">컨설팅 문의하기</BtnLink02>
         </section>
         <section className='professional container xl:flex justify-center items-center xl:mt-160 mt-80'>
            <Swiper
               className='pro-swiper-text'
               allowTouchMove={false}
               loop={true}
               navigation={{
                  prevEl: ".pro-btn-prev",
                  nextEl: ".pro-btn-next",
               }}
               modules={[Navigation]}
            >
               <SwiperSlide>
                  <div>
                     <Title01>
                        당신의 도전을 응원합니다<br />
                        <strong>공간정원 전문교육</strong>으로<br />
                        <strong>전문가</strong>가 될 수 있습니다
                     </Title01>
                     <h4 className='sub-title xl:block hidden leading-1em xl:text-28 font-bold xl:mt-48'>
                        가드너즈 아카데미
                        <span className='num'>01</span>
                     </h4>
                     <p className='xl:block hidden xl:leading-32 xl:text-20 xl:mt-48'>
                        가드너즈 아카데미에서는<br className='xl:block hidden' />
                        공간정원과 함께할 정리전문가를 양성합니다.
                     </p>
                     <BtnViewmore to="/space-lab/academy" className='pc-only xl:mt-40'>
                        <p className="txt">자세히 보기</p>
                        <i className="xi-long-arrow-right"></i>
                     </BtnViewmore>
                  </div>
                  <div className='xl:block hidden line hide-text'>line</div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <Title01>
                        당신의 도전을 응원합니다<br />
                        <strong>공간정원 전문교육</strong>으로<br />
                        <strong>전문가</strong>가 될 수 있습니다
                     </Title01>
                     <h4 className='sub-title xl:block hidden leading-1em xl:text-28 font-bold xl:mt-48'>
                        공간정원 연구소
                        <span className='num'>02</span>
                     </h4>
                     <p className='xl:block hidden xl:leading-32 xl:text-20 xl:mt-48'>
                        공간정원 연구소에서는 <br className='xl:block hidden' />
                        우리의 생활을 깊이있게 연구하고 있습니다.
                     </p>
                     <BtnViewmore to="/space-lab/gardening" className='pc-only xl:mt-40'>
                        <p className="txt">자세히 보기</p>
                        <i className="xi-long-arrow-right"></i>
                     </BtnViewmore>
                  </div>
                  <div className='xl:block hidden line hide-text'>line</div>
               </SwiperSlide>
               <div className='xl:flex hidden navigation xl:gap-24 xl:pt-48'>
                  <button className="pro-btn-prev">
                     <i className='xl:text-42 font-light xi-angle-left-thin'></i>
                  </button>
                  <button className="pro-btn-next">
                     <i className='xl:text-42 xi-angle-right-thin'></i>
                  </button>
               </div>
            </Swiper>
            <Swiper
               className='pro-swiper'
               allowTouchMove={false}
               loop={true}
               navigation={{
                  prevEl: ".pro-btn-prev",
                  nextEl: ".pro-btn-next",
               }}
               modules={[Navigation]}
               breakpoints={{
                  1280: { // 1280px 이상
                     slidesPerView: "auto",
                  },
                  768: { // 768px 이하
                     slidesPerView: 1,
                  },
               }}
            >
               <SwiperSlide className='box-content p-32'>
                  <img className='slide-img' src={image09} alt="슬라이드 이미지" />
               </SwiperSlide>
               <SwiperSlide className='box-content p-32'>
                  <img className='slide-img' src={image10} alt="슬라이드 이미지" />
               </SwiperSlide>
               <SwiperSlide className='box-content p-32'>
                  <img className='slide-img' src={image09} alt="슬라이드 이미지" />
               </SwiperSlide>
               <SwiperSlide className='box-content p-32'>
                  <img className='slide-img' src={image10} alt="슬라이드 이미지" />
               </SwiperSlide>
            </Swiper>
            <Swiper
               className='xl:hidden'
               allowTouchMove={false}
               loop={true}
               navigation={{
                  prevEl: ".pro-btn-prev",
                  nextEl: ".pro-btn-next",
               }}
               modules={[Navigation]}
            >
               <SwiperSlide>
                  <h4 className='sub-title leading-1em xl:text-28 text-20 font-bold ml-auto mr-auto'>
                     가드너즈 아카데미
                     <span className='num'>01</span>
                  </h4>
                  <p className='xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-48 mt-24'>
                     가드너즈 아카데미에서는<br />
                     공간정원과 함께할 정리전문가를 양성합니다.
                  </p>
                  <BtnViewmore to="/space-lab/academy" className='xl:mt-40 mt-24 ml-auto mr-auto'>
                     <p className="txt">자세히 보기</p>
                     <i className="xi-long-arrow-right"></i>
                  </BtnViewmore>
                  <div className='line hide-text'>line</div>
               </SwiperSlide>
               <SwiperSlide>
                  <h4 className='sub-title leading-1em xl:text-28 text-20 font-bold ml-auto mr-auto'>
                     공간정원 연구소
                     <span className='num'>02</span>
                  </h4>
                  <p className='xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-48 mt-24'>
                     공간정원 연구소에서는 <br />
                     우리의 생활을 깊이있게 연구하고 있습니다.
                  </p>
                  <BtnViewmore to="/space-lab/gardening" className='xl:mt-40 mt-24 ml-auto mr-auto'>
                     <p className="txt">자세히 보기</p>
                     <i className="xi-long-arrow-right"></i>
                  </BtnViewmore>
                  <div className='line hide-text'>line</div>
               </SwiperSlide>
               <div className='flex navigation justify-center xl:gap-24 gap-16 xl:pt-48 pt-24'>
                  <button className="pro-btn-prev">
                     <i className='xl:text-42 text-21 font-light xi-angle-left-thin'></i>
                  </button>
                  <button className="pro-btn-next">
                     <i className='xl:text-42 text-21 xi-angle-right-thin'></i>
                  </button>
               </div>
            </Swiper>
         </section>
         <section className='people xl:pt-80 pt-60 xl:pb-80 pb-60 mt-80'>
            <div className='container flex justify-between items-center'>
               <div className='contents-wrap'>
                  <div className='xl:mt-0 mt-40'>
                     <Title01>
                        공간정원은<br />
                        <strong className='inline'>이러한 인재</strong>와 함께합니다
                     </Title01>
                  </div>
                  <div className='line hide-text mt-24'>line</div>
                  <ul>
                     {peopleInfo.map((peopleInfo, index) => (
                        <li className='flex items-center xl:gap-24 gap-16 xl:mt-32 mt-18' key={index}>
                           <div className='icon-wrap flex justify-center items-center bg-pointColor01'>
                              <img className='icon' src={peopleInfo.icon} alt="아이콘" />
                           </div>
                           <div>
                              <h4 className='leading-1em xl:text-22 text-18 font-bold'>{peopleInfo.title}</h4>
                              <p
                                 className='xl:leading-26 leading-18 xl:text-18 text-13 xl:mt-12 mt-8'
                                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(peopleInfo.desc) }}
                              />
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <img className='main-img' src={image04} alt="사람들" />
            </div>
         </section>
         <section className='youtube container xl:mt-235 mt-80'>
            <div>
               <Title01 className='text-center'>
                  영상으로 만나는 <strong>공간정원</strong>
               </Title01>
               <p className='text-center xl:leading-28 leading-18 xl:text-18 text-13 xl:mt-32 mt-24'>공간정리를 통해 정리시스템을 구축하고 사용자별 라이프스타일을 반영하여 공간 전체의 리빌딩을 서비스합니다</p>
            </div>
            <Swiper
               className='xl:mt-48 mt-40'
               spaceBetween={24}
               breakpoints={{
                  1280: {
                     slidesPerView: 3,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  0: {
                     centeredSlides: true,
                     slidesPerView: 1.1,
                     spaceBetween: 8
                  }
               }}
            >
               {data && data.youtube ? (
                  data.youtube.map((youtube, index) => (
                     <SwiperSlide key={index}>
                        <Link
                           to={`https://www.youtube.com/watch?v=${youtube.video_id}`}
                           target='_blank'
                           rel='norefererr'
                        >
                           <img className='thumbnail w-full h-auto' src={`https://img.youtube.com/vi/${youtube.video_id}/hqdefault.jpg`} alt="썸네일" />
                           <h4 className='max-line1 leading-1em xl:text-20 text-16 font-bold xl:mt-32 mt-24'>{youtube.title}</h4>
                           <p className='leading-1em xl:text-14 text-12 mt-16 text-subColor04'>{youtube.created_at_formatted}</p>
                        </Link>
                     </SwiperSlide>
                  ))
               ) : (
                  <SwiperSlide>게시글이 없습니다</SwiperSlide>
               )}
               <div className="navigation">
                  <div className="youtube-btn-prev"></div>
                  <div className="youtube-btn-next"></div>
               </div>
               <div className="pagination" />
            </Swiper>
         </section>
         <section className='review mt-80 bg-pointColor04'>
            <div className='container xl:pt-120 pt-40 xl:pb-120 pb-80'>
               <Title01 className='text-center'>공간정원을 경험해본, <br className='xl:hidden' /><strong>고객님 후기</strong></Title01>
               <Swiper
                  className='review-swiper xl:mt-48 mt-40'
                  spaceBetween={24}
                  breakpoints={{
                     1280: {
                        slidesPerView: 3
                     },
                     768: {
                        slidesPerView: 3
                     },
                     0: {
                        centeredSlides: true,
                        slidesPerView: 1.1,
                        spaceBetween: 8
                     }
                  }}
               >
                  {data && data.reviews ? (
                     data.reviews.map((reviews, index) => (
                        <SwiperSlide key={index}>
                           <div className='thumbnail-wrap'>
                              <img className='w-full h-full object-cover thumbnail' src={reviews.image} alt="" />
                           </div>
                           <div className='text-wrap'>
                              <h4 className='max-line1 leading-1em xl:text-24 text-16 font-semibold'>{reviews.title}</h4>
                              <p
                                 className='max-line5 xl:leading-26 leading-18 xl:text-16 text-13 xl:mt-24 mt-16'
                                 dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(reviews.content, {
                                       ALLOWED_TAGS: ['p', 'div', 'a', 'span', 'b', 'i', 'u', 'br', 'strong', 'em'],
                                       ALLOWED_ATTR: []
                                    })
                                 }}
                              />
                              <div className='category-wrap flex xl:mt-32 mt-16'>
                                 <p className='category leading-1em xl:text-16 text-12 font-medium text-subColor04'>부분 정리수납</p>
                                 <p className='category leading-1em xl:text-16 text-12 font-medium text-subColor04'>30평대</p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))
                  ) : (
                     <SwiperSlide className='p-32'>게시글이 없습니다</SwiperSlide>
                  )}
                  <div className="navigation">
                     <div className="btn-prev"></div>
                     <div className="btn-next"></div>
                  </div>
                  <div className="pagination" />
               </Swiper>
               <BtnLink02 to="/community/review" className='xl:mt-80 mt-40'>후기 더 보러가기</BtnLink02>
            </div>
         </section>
      </Container>
   )
}

export default Home;