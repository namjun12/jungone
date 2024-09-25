import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';

// Images
import { noImg } from '../../components/Images'

// Styles
const SnsWrap = styled.div`
   .btn-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
   }
   .img-wrap {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      .thumbnail {
         object-fit: cover;
         width: 100%;
         max-width: 340px;
         height: 100%;
         transition: filter 0.3s ease-in-out;
         &.blurred {
            filter: blur(10px);
         }
      }
   }
   .swiper-youtube .img-wrap {
      aspect-ratio: 16/9;
   }
   @media screen and (max-width: 1279px) {
      .btn-nav {
         width: 32px;
         height: 32px;
      }
      .img-wrap {
         height: auto;
      }
   }
`;

const Sns = () => {
   const [data, setData] = useState();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/sns`);
            setData(response.data.data);
            if (response.data.success === false) {
               alert(response.data.message);
            }
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, []);

   const LazyImage = ({ src, alt }) => {
      const [ref, inView] = useInView({ triggerOnce: true });
      const [isLoaded, setIsLoaded] = useState(false);

      return (
         <div className="img-wrap" ref={ref}>
            {inView && (
               <img
                  className={`thumbnail ${!isLoaded ? 'blurred' : ''}`}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  onLoad={() => setIsLoaded(true)}
               />
            )}
         </div>
      );
   };

   return (
      <SnsWrap className="container xl:pt-120 xl:pb-120 pt-80 pb-80">
         <Helmet>
            <title>SNS - 공간정원</title>
            <meta name="description" content="SNS" />
         </Helmet>
         <div className="instagram">
            <div className="flex justify-between">
               <h3 className="xl:text-32 montserrat font-semibold">INSTAGRAM</h3>
               <div className="swiper-nav flex">
                  <button className="btn-nav btn-prev">
                     <i className="xi-angle-left xl:text-24"></i>
                  </button>
                  <button className="btn-nav btn-next">
                     <i className="xi-angle-right xl:text-24"></i>
                  </button>
               </div>
            </div>
            <Swiper
               className="swiper-ins xl:mt-32 mt-24"
               slidesPerView={2}
               spaceBetween={24}
               navigation={{
                  nextEl: '.instagram .btn-next',
                  prevEl: '.instagram .btn-prev',
               }}
               modules={[Navigation]}
               breakpoints={{
                  767: {
                     slidesPerView: 4,
                  },
               }}
            >
               {data ? (
                  data.instagram_posts.map((instagram, index) => (
                     <SwiperSlide className="slide" key={index}>
                        <Link to={instagram.permalink} target="_blank" rel="noreferrer">
                           <LazyImage
                              src={
                                 instagram.media_type === 'IMAGE'
                                    ? instagram.media_url
                                    : instagram.media_type === 'CAROUSEL_ALBUM'
                                       ? instagram.media_url
                                       : instagram.media_type === 'VIDEO'
                                          ? instagram.thumbnail_url
                                          : ''
                              }
                              alt="인스타 썸네일"
                           />
                        </Link>
                     </SwiperSlide>
                  ))
               ) : (
                  [...Array(4)].map((_, index) => (
                     <SwiperSlide key={index}>
                        <div className="img-wrap">
                           <div className="thumbnail bg-subColor07" />
                        </div>
                     </SwiperSlide>
                  ))
               )}
            </Swiper>
         </div>
         <div className="youtube xl:mt-120 mt-80">
            <div className="flex justify-between">
               <h3 className="xl:text-32 montserrat font-semibold">YOUTUBE</h3>
               <div className="swiper-nav flex">
                  <button className="btn-nav btn-prev">
                     <i className="xi-angle-left xl:text-24"></i>
                  </button>
                  <button className="btn-nav btn-next">
                     <i className="xi-angle-right xl:text-24"></i>
                  </button>
               </div>
            </div>
            <Swiper
               className="swiper-youtube xl:mt-32 mt-24"
               slidesPerView={1}
               spaceBetween={24}
               navigation={{
                  nextEl: '.youtube .btn-next',
                  prevEl: '.youtube .btn-prev',
               }}
               modules={[Navigation]}
               breakpoints={{
                  767: {
                     slidesPerView: 4,
                  },
               }}
            >
               {data ? (
                  data.youtube_posts.map((youtube, index) => (
                     <SwiperSlide className="slide" key={index}>
                        <Link
                           to={`https://www.youtube.com/watch?v=${youtube.videoId}`}
                           target="_blank"
                           rel="noreferrer"
                        >
                           <LazyImage
                              src={`https://img.youtube.com/vi/${youtube.videoId}/hqdefault.jpg`}
                              alt="YOUTUBE 썸네일"
                           />
                           <p className="max-line1 xl:text-18 text-16 xl:mt-24 mt-16">
                              {youtube.title}
                           </p>
                           <p className="leading-1em xl:text-16 text-13 mt-16 text-subColor04">
                              {youtube.publishTime}
                           </p>
                        </Link>
                     </SwiperSlide>
                  ))
               ) : (
                  [...Array(4)].map((_, index) => (
                     <SwiperSlide key={index}>
                        <div className="img-wrap">
                           <div className="thumbnail bg-subColor07" />
                        </div>
                     </SwiperSlide>
                  ))
               )}
            </Swiper>
         </div>
         <div className="blog xl:mt-120 mt-80">
            <div className="flex justify-between">
               <h3 className="xl:text-32 montserrat font-semibold">BLOG</h3>
               <div className="swiper-nav flex">
                  <button className="btn-nav btn-prev">
                     <i className="xi-angle-left xl:text-24"></i>
                  </button>
                  <button className="btn-nav btn-next">
                     <i className="xi-angle-right xl:text-24"></i>
                  </button>
               </div>
            </div>
            <Swiper
               className="swiper-blog xl:mt-32 mt-24"
               slidesPerView={1}
               spaceBetween={24}
               navigation={{
                  nextEl: '.blog .btn-next',
                  prevEl: '.blog .btn-prev',
               }}
               modules={[Navigation]}
               breakpoints={{
                  767: {
                     slidesPerView: 4,
                  },
               }}
            >
               {data ? (
                  data.blog_posts.map((blog, index) => (
                     <SwiperSlide className="slide" key={index}>
                        <Link to={blog.link} target="_blank" rel="noreferrer">
                           <LazyImage
                              src={blog.image ? blog.image : noImg}
                              alt="blog 썸네일"
                           />
                           <p
                              className="max-line1 xl:text-18 text-16 xl:mt-24 mt-16"
                              dangerouslySetInnerHTML={{
                                 __html: DOMPurify.sanitize(blog.title, {
                                    ALLOWED_TAGS: [],
                                 }),
                              }}
                           />
                           <p
                              className="max-line3 xl:leading-24 xl:text-16 text-13 xl:mt-24 mt-16 text-subColor03"
                              dangerouslySetInnerHTML={{
                                 __html: DOMPurify.sanitize(blog.description, {
                                    ALLOWED_TAGS: [],
                                 }),
                              }}
                           />
                           <p className="leading-1em xl:text-16 xl:mt-32 text-subColor04">
                              {blog.postdate}
                           </p>
                        </Link>
                     </SwiperSlide>
                  ))
               ) : (
                  [...Array(4)].map((_, index) => (
                     <SwiperSlide key={index}>
                        <div className="img-wrap">
                           <div className="thumbnail bg-subColor07" />
                        </div>
                     </SwiperSlide>
                  ))
               )}
            </Swiper>
         </div>
      </SnsWrap>
   );
};

export default Sns;
