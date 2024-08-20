import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Title02 } from "../../components/StyledCommon";

// Components
import PageControl from "../../components/PageControl";

// styled 
const Container = styled.div`
   .top-nav {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid var(--subColor01);
      padding-bottom: 24px;
      .point {
         color: var(--pointColor01);
      }
      .search_box {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 400px;
         height: 50px;
         border: 2px solid var(--subColor05);
         padding: 0px 8px 0px 24px;
         margin-left: auto;
      }
      .search_box #search {
         width: 80%;
      }
      .search_box #product_search {
         width: 85%;
         height: 100%;
      }
      .search_box .icon_search {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 35px;
         height: 35px;
         font-size: 19px;
         border-radius: 50%;
         color: #fff;
         background-color: var(--pointColor01);
      }
   }
   @media screen and (max-width:1279px){
      .notice{
         padding: 8px 16px;
      }
      .item {
         .btn-link{
            padding: 16px 0px;
         }
      }
   }
`
const ListWrap = styled.ul`
   display: flex;
   flex-direction: column;
   width: 100%;
   /* border-bottom: 2px solid var(--subColor01); */
   & .btn-link {
      border-bottom: 1px solid #e4e4e4;
      border-bottom: 1px solid var(--subColor05);
      gap: 34px;
      padding: 24px 20px;
   }
   & .btn-link:hover,
   & .btn-link:focus {
      background-color: #f5faff;
   }
   & .btn-link .notice {
      width: fit-content;
      border: 1px solid var(--pointColor01);
      border-radius: 9999px;
      padding: 8px 16px;
      color: var(--pointColor01);
   }
   & .btn-link .date {
      color: var(--subColor04);
   }
   .btn-link{
      .icon-wrap{
         width: 32px;
         height: 32px;
         border: 1px solid var(--subColor04);
         border-radius: 50%;
      }
   }
   @media screen and (max-width:767px){
      .btn-link .icon-wrap{
         width: 30px;
         height: 30px;
      }
   }
`

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

const Notice = () => {

   const navigate = useNavigate();

   // data
   const pathname = useLocation().pathname
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);

   const query = useQuery();
   const page = query.get('page');
   const search = query.get('search');

   const [pageIndex, setPageIndex] = useState(page ? page : 1);
   const [searchTermWrap, setSearchTermWrap] = useState(search ? search : '');
   const [searchTerm, setSearchTerm] = useState(searchTermWrap ? searchTermWrap : '');

   const handleChange = (event) => {
      setSearchTermWrap(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const regex = /^[a-zA-Z0-9가-힣\s]*$/;

      if (!regex.test(searchTermWrap)) {
         alert("영문[대소문자], 한글[자음+모음], 숫자로 입력해주세요");
         return;
      }

      setPageIndex(1)
      setSearchTerm(searchTermWrap);
      navigate(`?page=${pageIndex}&search=${searchTerm}`);
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/announcement/?page=${pageIndex}&search=${searchTerm}`);
            setData(response.data.data);
            if (response.data.success === false) {
               alert(response.data.message)
            }
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
      navigate(`?page=${pageIndex}&search=${searchTerm}`);
   }, [searchTerm, pageIndex, navigate, pathname]);


   return (
      <Container className="type_notice container">
         <Title02 className="xl:mt-120 mt-80">공지사항</Title02>
         <div className="top-nav xl:mt-80 mt-24">
            <p className="text_count xl:text-18 xl:mt-0 mt-40">총 {data && <strong className="point">{data.total}</strong>}개의 게시물</p>
            <form className="search_from" onSubmit={handleSubmit}>
               <fieldset>
                  <legend className="hide">검색</legend>
                  <div className="search_box">
                     <input
                        id="search"
                        type="search"
                        name="search"
                        placeholder="검색어를 입력하세요"
                        value={searchTermWrap}
                        onChange={handleChange}
                     />
                     <button onClick={handleSubmit} type="button">
                        <i className="xi-search icon_search" />
                     </button>
                  </div>
               </fieldset>
            </form>
         </div>
         <ListWrap className="list_wrap">
            {data ? (
               data.total === 0 ? (
                  <li 
                  className="item noitem txt_align_center"
                  >게시글이 없습니다.</li>
               ) : (
                  (() => {
                     const featuredItems = [];
                     const nonFeaturedItems = [];

                     data.data.forEach((list, index) => {
                        const item = (
                           <li key={index} className="item">
                              <Link
                                 to={`./${list.id}?page=${pageIndex}&search=${searchTerm}`}
                                 className="btn-link flex justify-between items-center"
                              >
                                 <div>
                                    {list.is_featured === 1 && <p className="notice leading-1em xl:text-16 text-12 xl:mb-12 mb-8 font-bold">공지</p>}
                                    <p className="tit xl:text-18 text-14 font-bold xl:mb-20 mb-16">{list.title}</p>
                                    <p className="date xl:text-16 text-12">{list.created_at_formatted}</p>
                                 </div>
                                 <div className="icon-wrap flex justify-center items-center pc">
                                    <i className="icon xi-angle-right xl:text-16 text-14 text-subColor04"></i>
                                 </div>
                              </Link>
                           </li>
                        );

                        if (list.is_featured === 1) {
                           featuredItems.push(item);
                        } else {
                           nonFeaturedItems.push(item);
                        }
                     });

                     return [...featuredItems, ...nonFeaturedItems];
                  })()
               )
            ) : (
               <li className="noitem">
                  <i className="xi-spinner-2 xi-spin icon_loading"></i>
               </li>
            )}
         </ListWrap>
         {
            data &&
            <PageControl
               data={data}
               pageIndex={pageIndex}
               setPageIndex={setPageIndex}
               loading={loading}
            />
         }
      </Container>
   )
}

export default Notice;