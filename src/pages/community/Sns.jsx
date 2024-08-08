import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

// Images
import { testImg } from '../../components/Images'
import { Navigation } from 'swiper/modules'

// Styles
const SnsWrap = styled.div`
   .btn-nav{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
   }
   .thumbnail{
      /* object-fit: cover; */
      width: 100%;
      height: auto;
   }
`

const Sns = () => {
   return (
      <SnsWrap className='container xl:pt-120 xl:pb-120'>
         <div className='instagram'>
            <div className='flex justify-between'>
               <h3 className='xl:text-32 montserrat font-semibold'>INSTAGRAM</h3>
               <div className='swiper-nav flex'>
                  <button className='btn-nav btn-prev'>
                     <i className='xi-angle-left xl:text-24'></i>
                  </button>
                  <button className='btn-nav btn-next'>
                     <i className='xi-angle-right xl:text-24'></i>
                  </button>
               </div>
            </div>
            <Swiper
               className='swiper-ins xl:mt-32'
               slidesPerView={4}
               spaceBetween={24}
               loop={true}
               navigation={{
                  nextEl: '.instagram .btn-next',
                  prevEl: '.instagram .btn-prev',
               }}
               modules={[Navigation]}
            >
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="인스타 썸네일" />
               </SwiperSlide>
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="인스타 썸네일" />
               </SwiperSlide>
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="인스타 썸네일" />
               </SwiperSlide>
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="인스타 썸네일" />
               </SwiperSlide>
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="인스타 썸네일" />
               </SwiperSlide>
            </Swiper>
         </div>
         <div className='youtube xl:mt-120'>
            <div className='flex justify-between'>
               <h3 className='xl:text-32 montserrat font-semibold'>YOUTUBE</h3>
               <div className='swiper-nav flex'>
                  <button className='btn-nav btn-prev'>
                     <i className='xi-angle-left xl:text-24'></i>
                  </button>
                  <button className='btn-nav btn-next'>
                     <i className='xi-angle-right xl:text-24'></i>
                  </button>
               </div>
            </div>
            <Swiper
               className='swiper-youtube xl:mt-32'
               slidesPerView={4}
               spaceBetween={24}
               loop={true}
               navigation={{
                  nextEl: '.youtube .btn-next',
                  prevEl: '.youtube .btn-prev',
               }}
               modules={[Navigation]}
            >
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="YOUTUBE 썸네일" />
                  <p className='max-line1 xl:text-18 xl:mt-24'>영상의 제목이 들어가는 자리입니다.</p>
                  <p className='leading-1em xl:text-16 xl:mt-16 text-subColor04'>2024-10-10</p>
               </SwiperSlide>
            </Swiper>
         </div>

         <div className='blog xl:mt-120'>
            <div className='flex justify-between'>
               <h3 className='xl:text-32 montserrat font-semibold'>BLOG</h3>
               <div className='swiper-nav flex'>
                  <button className='btn-nav btn-prev'>
                     <i className='xi-angle-left xl:text-24'></i>
                  </button>
                  <button className='btn-nav btn-next'>
                     <i className='xi-angle-right xl:text-24'></i>
                  </button>
               </div>
            </div>
            <Swiper
               className='swiper-blog xl:mt-32'
               slidesPerView={4}
               spaceBetween={24}
               loop={true}
               navigation={{
                  nextEl: '.blog .btn-next',
                  prevEl: '.blog .btn-prev',
               }}
               modules={[Navigation]}
            >
               <SwiperSlide className='slide'>
                  <img className='thumbnail' src={testImg} alt="blog 썸네일" />
                  <p className='max-line1 xl:text-18 xl:mt-24'>영상의 제목이 들어가는 자리입니다.</p>
                  <p className='max-line3 xl:leading-24 xl:text-16 xl:mt-24 text-subColor03'>
                     안녕하세요! 서울정리수납 전문 이정원 공간정원입니다
                     오늘은 이사 후 이루어진 정리수납컨설팅 후기를 적어보려고 합니다!포장이사는 이사 후 모든 짐들을 각자
                  </p>
                  <p className='leading-1em xl:text-16 xl:mt-32 text-subColor04'>2024-10-10</p>
               </SwiperSlide>
            </Swiper>
         </div>
      </SnsWrap>
   )
}

export default Sns;