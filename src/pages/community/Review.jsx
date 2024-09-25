import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet-async';

// Components
import { Title02 } from '../../components/StyledCommon';
import PageControl from '../../components/PageControl';

// Styles
const ReviewWrap = styled.div`
   .filter{
      border-top: 2px solid var(--subColor01);
      border-bottom: 2px solid var(--subColor01);
      .filter-item{
         padding: 24px 0px;
         &.area{
            border-top: 1px solid var(--subColor05);
         }
         .swiper{
            margin-left: 0px;
         }
         .btn-control-wrap{
            .btn{
               width: 143px;
               height: 43px;
               &.reset{
                  box-shadow: inset 0px 0px 0px 1px var(--subColor01);
               }
            }
         }
      }
      .btn-item{
         cursor: pointer;
         width: fit-content;
         box-shadow: inset 0px 0px 0px 1px var(--subColor05);
         border-radius: 9999px;
         padding: 10px 16px;
         background-color: var(--subColor07);
         &.on{
            box-shadow: inset 0px 0px 0px 1px var(--pointColor01);
            color: var(--pointColor01);
            background-color: #fff;
            &>.icon{
               color: var(--pointColor01);
            }
         }
      }
   }
   .review-wrap{
      .review-item{
         border-bottom: 1px solid var(--subColor08);
         &:last-of-type{
            border-bottom: 0px none;
         }
         &:hover{
            background-color: var(--subColor07);
         }
      }
      .thumbnail-wrap{
         aspect-ratio: 1.6/1;
         width: 100%;
         max-width: 325px;
         &>.thumbnail{
            object-fit: cover;
            width: 100%;
            height: 100%;
         }
      }
      .contents-wrap{
         width: 100%;
         .text-wrap{
            width: 100%;
            .category-wrap{
               .item{
                  font-weight: 700;
                  border: 1px solid var(--pointColor01);
                  border-radius: 9999px;
                  padding: 8px 12px;
                  color: var(--pointColor01);
               }
            }
         }
         .icon-wrap{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            min-width: 32px;
            height: 32px;
            border: 1px solid var(--subColor04);
            border-radius: 50%;
         }
      }
   }
   @media screen and (max-width:1279px){
      .filter{
      border-top: 1px solid var(--subColor01);
      border-bottom: 1px solid var(--subColor01);
         .filter-item.area{
            .btn-control-wrap{
               width: fit-content;
               margin-top: 24px;
               margin-left: auto;
            }
         }
      }
   }
   @media screen and (max-width:767px){
      .filter{
         .filter-item{
            padding: 16px 0px;
            &.area{
               .btn-control-wrap{
                  width: 100%;
                  .btn{
                     width: 50%;
                  }
               }
            }
         }
      }
      .review-wrap{
         .review-item{
            .btn-link{
               flex-direction: column;
               .thumbnail{
                  max-width: 100%;
               }
            }
         }
         .contents-wrap .icon-wrap{
            display: none;
         }
      }
   }
`

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

const Review = () => {

   const navigate = useNavigate();
   const query = useQuery();
   const page = query.get('page');

   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);
   const [pageIndex, setPageIndex] = useState(page ? page : 1);

   const [category, setCategory] = useState('');
   const [area, setArea] = useState('');
   const [useApiCategory, setUseApiCategory] = useState('');
   const [useApiArea, setUseApiArea] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/review?filter_category=${useApiCategory}&filter_area=${useApiArea}&page=${pageIndex}`)
            setData(response.data.data)
         } catch (error) {
            console.log(error)
         } finally {
            setLoading(false)
         }
      }

      fetchData();
      navigate(`?filter_category=${useApiCategory}&filter_area=${useApiArea}&page=${pageIndex}`);
   }, [pageIndex, useApiCategory, useApiArea])

   const handleSearchClick = () => {
      setUseApiCategory(category);
      setUseApiArea(area);
      setPageIndex(1)
   };
   const filterReset = () => {
      setCategory(null);
      setArea(null);
      setUseApiCategory(null);
      setUseApiArea(null);
   }

   const categoryInfo = [
      "전체 정리수납",
      "부분 정리수납",
      "원스톱 토탈서비스",
   ]
   const areaInfo = [
      "원룸",
      "10평대",
      "20평대",
      "30평대",
      "40평대",
      "50평대 이상",
   ]
   const categoryMap = {
      0: "전체 정리수납",
      1: "부분 정리수납",
      2: "원스톱 토탈서비스"
   };
   const areaMap = {
      0: "원룸",
      1: "10평대",
      2: "20평대",
      3: "30평대",
      4: "40평대",
      5: "50평대 이상"
   };
   return (
      <ReviewWrap className='container xl:pt-120 pt-80'>
         <Helmet>
            <title>고객 후기 - 공간정원</title>
            <meta name="description" content="고객 후기" />
         </Helmet>
         <Title02>고객 후기</Title02>
         <div className='filter xl:mt-24 mt-16'>
            <div className='filter-item category flex items-center xl:gap-40 gap-16'>
               <p className='leading-1em xl:text-20 text-16 font-semibold'>유형</p>
               <Swiper
                  className='items-wrap'
                  slidesPerView={"auto"}
                  spaceBetween={8}
                  breakpoints={{
                     767: { // 767px 이상
                        spaceBetween: 16
                     }
                  }}
               >
                  {categoryInfo.map((categoryInfo, index) => (
                     <SwiperSlide
                        className={`btn-item xl:text-16 text-12 ${category === index ? "on" : ""}`}
                        key={index}
                        onClick={() => setCategory(index)}
                     >
                        <i className='icon xi-plus-min xl:mr-8 text-subColor04'></i>
                        {categoryInfo}
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className='filter-item area xl:flex justify-between items-center'>
               <div className='flex items-center xl:gap-40 gap-16'>
                  <p className='leading-1em xl:text-20 text-16 font-semibold'>평수</p>
                  <Swiper
                     className='items-wrap'
                     slidesPerView={"auto"}
                     spaceBetween={8}
                     breakpoints={{
                        767: { // 767px 이상
                           spaceBetween: 16
                        }
                     }}
                  >
                     {areaInfo.map((categoryInfo, index) => (
                        <SwiperSlide
                           className={`btn-item xl:text-16 text-12 ${area === index ? "on" : ""}`}
                           key={index}
                           onClick={() => setArea(index)}
                        >
                           <i className='icon xi-plus-min xl:mr-8 text-subColor04'></i>
                           {categoryInfo}
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
               <div className='btn-control-wrap flex gap-8'>
                  <button
                     onClick={() => filterReset()}
                     className='reset btn flex justify-center items-center xl:gap-5 gap-16'
                  >
                     <i className='xi-refresh xl:text-16'></i>
                     <p className='leading-1em xl:text-16 text-14'>필터 새로고침</p>
                  </button>
                  <button
                     onClick={() => handleSearchClick()}
                     className='search btn leading-1em xl:text-16 text-14 text-white bg-pointColor01'
                  >
                     조회하기
                  </button>
               </div>
            </div>
         </div>
         <ul className='review-wrap xl:mb-40'>
            {data && data.data.length > 0 ? (
               data.data.map((listInfo, index) => (
                  <li className='review-item xl:pr-40' key={index}>
                     <Link
                        to={`./${listInfo.id}?page=${pageIndex}`}
                        className='btn-link flex xl:gap-48 gap-16 xl:pt-32 xl:pb-32 pt-24 pb-24'
                     >
                        <div className='thumbnail-wrap'>
                           <img className='thumbnail' src={listInfo.image} alt="리뷰 썸네일" />
                        </div>
                        <div className='contents-wrap flex items-center xl:gap-24'>
                           <div className='text-wrap'>
                              <div className='category-wrap flex gap-8'>
                                 <p className='item category leading-1em text-13'>
                                    {categoryMap[listInfo.filter_category]}
                                 </p>
                                 <p className='item area leading-1em text-13'>
                                    {areaMap[listInfo.filter_area]}
                                 </p>
                              </div>
                              <h6 className='max-line1 leading-1em xl:text-20 font-semibold xl:mt-20 mt-16'>{listInfo.title}</h6>
                              <p
                                 className='max-line4 xl:leading-28 xl:text-16 xl:mt-20 mt-16 text-subColor04'
                                 dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(listInfo.content, {
                                       ALLOWED_TAGS: ['p', 'div', 'a', 'span'],
                                       ALLOWED_ATTR: []
                                    })
                                 }}
                              />
                           </div>
                           <div className='icon-wrap'>
                              <i className='icon xl:text-17 text-pointColor01 xi-angle-right-min'></i>
                           </div>
                        </div>
                     </Link>
                  </li>
               ))
            ) : (
               <li className='noitem xl:pr-40' key="0">게시글이 없습니다.</li>
            )}
         </ul>
         {data &&
            <PageControl
               data={data}
               pageIndex={pageIndex}
               setPageIndex={setPageIndex}
               loading={loading}
            />
         }
      </ReviewWrap>
   )
}

export default Review;