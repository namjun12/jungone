import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import DOMPurify from 'dompurify';
import styled from 'styled-components';

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
      .no-item{
         display: flex;
         justify-content: center;
         align-items: center;
         height: 300px;
      }
      .thumbnail{
         width: 100%;
         max-width: 325px;;
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

   const [category, setCategory] = useState(null);
   const [area, setArea] = useState(null);
   const [useApiCategory, setUseApiCategory] = useState();
   const [useApiArea, setUseApiArea] = useState();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/review?filter_category=${useApiCategory}&filter_area=${useApiArea}&page=${pageIndex}`)
            setData(response.data.data)
         } catch (error) {
            console.log(error)
         } finally{
            setLoading(false)
         }
      }

      fetchData();
      navigate(`?filter_category=${category}&filter_area=${area}&page=${pageIndex}`);
   }, [pageIndex, useApiCategory, useApiArea])

   const handleSearchClick = () => {
      setUseApiCategory(category);
      setUseApiArea(area);
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
      <ReviewWrap className='container xl:pt-120'>
         <Title02>고객 후기</Title02>
         <div className='filter xl:mt-24'>
            <div className='filter-item category flex items-center xl:gap-40'>
               <p className='leading-1em xl:text-20 font-semibold'>유형</p>
               <ul className='items-wrap flex xl:gap-16'>
                  {categoryInfo.map((categoryInfo, index) => (
                     <li
                        className={`btn-item xl:text-16 ${category === index ? "on" : ""}`}
                        key={index}
                        onClick={() => setCategory(index)}
                     >
                        <i className='icon xi-plus-min xl:mr-8 text-subColor04'></i>
                        {categoryInfo}
                     </li>
                  ))}
               </ul>
            </div>
            <div className='filter-item area flex justify-between items-center'>
               <div className='flex items-center xl:gap-40'>
                  <p className='leading-1em xl:text-20 font-semibold'>평수</p>
                  <ul className='items-wrap flex xl:gap-16'>
                     {areaInfo.map((categoryInfo, index) => (
                        <li
                           className={`btn-item xl:text-16 ${area === index ? "on" : ""}`}
                           key={index}
                           onClick={() => setArea(index)}
                        >
                           <i className='icon xi-plus-min xl:mr-8 text-subColor04'></i>
                           {categoryInfo}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className='btn-control-wrap flex xl:gap-8'>
                  <button
                     onClick={() => filterReset()}
                     className='reset btn flex justify-center items-center xl:gap-5'
                  >
                     <i className='xi-refresh xl:text-16'></i>
                     <p className='leading-1em xl:text-16'>필터 새로고침</p>
                  </button>
                  <button
                     onClick={() => handleSearchClick()}
                     className='search btn leading-1em xl:text-16 text-white bg-pointColor01'
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
                     <Link to="" className='flex xl:gap-48 xl:pt-32 xl:pb-32'>
                        <img className='thumbnail' src={listInfo.image} alt="리뷰 썸네일" />
                        <div className='contents-wrap flex items-center xl:gap-24'>
                           <div className='text-wrap'>
                              <div className='category-wrap flex gap-8'>
                                 <p className='item category leading-1em xl:text-13'>
                                    {categoryMap[listInfo.filter_category]}
                                 </p>
                                 <p className='item area leading-1em xl:text-13'>
                                    {areaMap[listInfo.filter_area]}
                                 </p>
                              </div>
                              <h6 className='max-line1 leading-1em xl:text-20 font-semibold xl:mt-20'>{listInfo.title}</h6>
                              <p
                                 className='max-line4 xl:leading-28 xl:text-16 text-subColor04'
                                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(listInfo.content) }}
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
               <li className='no-item xl:pr-40' key="0">게시글이 없습니다.</li>
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