import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

// Images
import { testImg } from '../../components/Images'
import { Navigation } from 'swiper/modules'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

// Styles
const SnsWrap = styled.div`
   .btn-nav{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
   }
   .img-wrap{
      width: 100%;
      height: 340px;
      .thumbnail{
         object-fit: cover;
         width: 100%;
         max-width: 340px;
         height: 100%;
      }
   }
`

const Sns = () => {

   const [data, setData] = useState();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/sns`)
            setData(response.data.data)
            console.log(response.data.data)
            if (response.data.success === false) {
               alert(response.data.message)
            }
         } catch (error) {
            console.log(error)
         }
      }
      fetchData();
   }, [])

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
            {data &&
               <Swiper
                  className='swiper-ins xl:mt-32'
                  slidesPerView={4}
                  spaceBetween={24}
                  navigation={{
                     nextEl: '.instagram .btn-next',
                     prevEl: '.instagram .btn-prev',
                  }}
                  modules={[Navigation]}
               >
                  {data.instagram_posts.map((instagram, index) => (
                     <SwiperSlide className='slide' key={index}>
                        <Link to={instagram.permalink} target='_blank' rel='noreferrer'>
                           <div className='img-wrap'>
                              <img
                                 className='thumbnail'
                                 src={
                                    instagram.media_type === "IMAGE" ? instagram.media_url
                                       : instagram.media_type === "CAROUSEL_ALBUM" ? instagram.media_url
                                          : instagram.media_type === "VIDEO" ? instagram.thumbnail_url
                                             : ""
                                 }
                                 alt="인스타 썸네일"
                              />
                           </div>
                        </Link>
                     </SwiperSlide>
                  ))}
               </Swiper>}
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
               navigation={{
                  nextEl: '.youtube .btn-next',
                  prevEl: '.youtube .btn-prev',
               }}
               modules={[Navigation]}
            >
               <SwiperSlide className='slide'>
                  <Link to="">
                     <div className='img-wrap'>
                        <img className='thumbnail' src={testImg} alt="YOUTUBE 썸네일" />
                     </div>
                     <p className='max-line1 xl:text-18 xl:mt-24'>영상의 제목이 들어가는 자리입니다.</p>
                     <p className='leading-1em xl:text-16 xl:mt-16 text-subColor04'>2024-10-10</p>
                  </Link>
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
            {data && <Swiper
               className='swiper-blog xl:mt-32'
               slidesPerView={4}
               spaceBetween={24}
               navigation={{
                  nextEl: '.blog .btn-next',
                  prevEl: '.blog .btn-prev',
               }}
               modules={[Navigation]}
            >
               {data.blog_posts.map((blog, index) => (
                  <SwiperSlide className='slide' key={index}>
                     <Link to={blog.link} target='_blank' rel='noreferrer'>
                        <div className='img-wrap'>
                           <img className='thumbnail' src={testImg} alt="blog 썸네일" />
                        </div>
                        <p className='max-line1 xl:text-18 xl:mt-24'
                           dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(blog.title, {
                                 ALLOWED_TAGS: [],
                              })
                           }}
                        />
                        <p
                           className='max-line3 xl:leading-24 xl:text-16 xl:mt-24 text-subColor03'
                           dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(blog.description, {
                                 ALLOWED_TAGS: [],
                              })
                           }}
                        />
                        <p className='leading-1em xl:text-16 xl:mt-32 text-subColor04'>{blog.postdate}</p>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>}
         </div>
      </SnsWrap>
   )
}

export default Sns;