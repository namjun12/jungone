import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import axios from "axios"
import DOMPurify from "dompurify"

// conponents Start
import PageControl from "../../components/PageControl"

// styled
const QuestionBox = styled.div`
   border-bottom: 2px solid var(--subColor05);
`
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
   .icon_loading_wrap{
      height: 100vh;
   }
   .list_wrap {
      .item{
         display: flex;
         align-items: center;
         gap: 40px;
         width: 100%;
         min-height: 100px;
         padding: 40px 24px;
         .tit {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 56px;
            min-width: 56px;
            height: 56px;
            border-radius: 50%;
            color: #fff;
            background-color: var(--pointColor01);
         }
         .txt {
            width: 100%;
            text-align: left;
         }
         .icon {
            margin-left: auto;
            color: #333;
         }
         .icon.on {
            transform: rotate(180deg);
         }
         &.item-answer{
            display: none;
            background-color: var(--subColor07);
            &.on{
               display: flex;
               &.question{
                  border-bottom: 2px solid var(--subColor05);
               }
            }
            .tit {
               color: var(--subColor01);
               background-color: #fff;
            }
         }
      }
   }
`

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

export default function Faq() {
   const query = useQuery();
   const page = query.get('page');
   const search = query.get('search');

   const [data, setData] = useState();
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

   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/question?page=${pageIndex}`);
            setData(response.data.data);
            if (response.data.success === false) {
               alert("일시적인 오류가 발생했습니다.");
            }
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, [pageIndex]);

   useEffect(() => {
      navigate(`?page=${pageIndex}`);
   }, [searchTerm, pageIndex, navigate]);

   // List
   const [listActiveIndex, setListActiveIndex] = useState();
   const handelToggle = (index) => {
      setListActiveIndex(listActiveIndex === index ? null : index)
   }

   return (
      <Container className="contact_faq contact container">

         <div className="top-nav container xl:mt-80">
            <strong className="leading-1em xl:text-42 font-bold">자주 묻는 질문</strong>
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
         <div className="wrap">
            {data ? (
               data.total === 0 ? (
                  <div className="item noitem txt_align_center">게시글이 없습니다.</div>
               ) : (
                  data.data.map((data, index) => (
                     <div key={index} className="list_wrap">
                        <QuestionBox onClick={() => handelToggle(index)} className="list item question">
                           <p className="tit flex justify-center items-center xl:text-32 text-18 font-bold">Q</p>
                           <p className="txt xl:leading-28 leading-24 xl:text-18 text-14 font-light">{data.title}</p>
                           <i className={`icon xi-angle-down-thin xl:text-32 text-18 pc ${listActiveIndex === index ? 'on' : ''}`}></i>
                        </QuestionBox>
                        <div className={`item item-answer ${listActiveIndex === index ? 'on' : ''}`}>
                           <p className="tit xl:text-32 text-18 font-bold">A</p>
                           <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }} className="txt xl:leading-28 leading-24 xl:text-18 text-14 font-light"></p>
                        </div>
                     </div>
                  ))
               )
            ) : (
               <div className="icon_loading_wrap">
                  <i className="xi-spinner-2 xi-spin icon_loading"></i>
               </div>
            )}
            {data &&
               <PageControl
                  data={data}
                  pageIndex={pageIndex}
                  setPageIndex={setPageIndex}
                  loading={''}
               />}
         </div>
      </Container>
   )
}