import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

import NoticeDetailNav from './NoticeDetailNav';

// styles
const Container = styled.div`
   .detail_common {
      border-top: 2px solid var(--subColor01);
   }
   .detail_common .detail_page_youtube_wrap {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
   }
   .detail_common .detail_page_youtube {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }
   .info_wrap.type_01 {
      padding: 32px 0px;
      border-top: 2px solid var(--subColor01);
      border-bottom: 1px solid #dedede;
   }
   .info_wrap.type_01 .category {
      width: fit-content;
      border: 1px solid var(--pointColor01);
      border-radius: 9999px;
      margin-left: auto;
      margin-right: auto;
      color: var(--pointColor01);
   }
   .info_wrap.type_01 .sub_info_wrap {
      display: flex;
      gap: 24px;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
   }
   .info_wrap.type_01 .date_wrap,
   .info_wrap.type_01 .views_wrap {
      display: flex;
      gap: 8px;
   }
   .contents_wrap.type_01 {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-bottom: 80px;
   }
   .contents_wrap.type_01 img {
      display: block;
      width: max-content;
      max-width: calc(100% - 32px);
      margin: 0px auto;
   }
   .contents_wrap.type_01.ql-editor {
      padding-top: 0px;
      padding-left: 0px;
      padding-right: 0px;
   }
   .contents_wrap.type_01.ql-editor .btn_download {
      cursor: pointer;
   }
   .btn_download .txt {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 24px;
      line-height: 24px;
   }
   .btn_download {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 52px;
      border-radius: 4px;
      padding: 0px 24px;
      margin-top: 80px;
      background-color: var(--subColor07);
   }
   .btn_download .icon {
      color: var(--subColor04);
   }
   .btn_download .icon_download {
      margin-left: auto;
   }
`

const DetailPage = () => {

   const targetName = useLocation().pathname.split('/');
   const [targetResult, setTargetResult] = useState("");
   const [data, setData] = useState();

   const { id } = useParams();
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const search = searchParams.get('search');

   useEffect(() => {
      if (targetName[2] === "notice") {
         setTargetResult("announcement");
      } else if (targetName[2] === "review") {
         setTargetResult("review");
      }
   }, [targetName]);

   useEffect(() => {
      const fetchData = async () => {
         if (targetResult) {
            try {
               const response = await axios.get(`${process.env.REACT_APP_API_URL}/${targetResult}/${id}`);
               setData(response.data.data);
            } catch (error) {
               console.log(error);
            }
         }
      };

      fetchData();
   }, [id, search, targetResult]);

   useEffect(() => {
      document.getElementById("header").classList.add("on")
      return () => {
         document.getElementById("header").classList.remove("on")
      }
   }, [])


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
      <Container className="detail_common sub_page container xl:mt-160 mt-130">
         {data ? (
            <div>
               <div className="info_wrap type_01 wrap xl:mb-40 mb-32">
                  {data.filter_category !== undefined &&
                     <div className='flex gap-8 w-fit ml-auto mr-auto'>
                        <p className='category text-center leading-1em xl:text-16 text-12 font-bold pt-8 pb-8 pr-16 pl-16 mb-16 text-pointColor01'>
                           {categoryMap[data.filter_category]}
                        </p>
                        <p className='category text-center leading-1em xl:text-16 text-12 font-bold pt-8 pb-8 pr-16 pl-16 mb-16 text-pointColor01'>
                           {areaMap[data.filter_area]}
                        </p>
                     </div>}
                  <h3 className="tit text-center xl:text-24 text-18 font-bold xl:mb-24 mb-16">{data.title}</h3>
                  <div className="sub_info_wrap xl:mt-24 mt-16">
                     <div className="date_wrap">
                        <p className="tit xl:text-16 text-13 font-semibold">Date</p>
                        <p className="txtt xl:text-16 text-13">{data.created_at_formatted}</p>
                     </div>
                     <div className="views_wrap">
                        <p className="tit xl:text-16 text-13 font-semibold">Views</p>
                        <p className="txt xl:text-16 text-13">{data.views}</p>
                     </div>
                  </div>
               </div>
               <div className="contents_wrap type_01 ql-editor wrap">
                  {<div
                     dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.content, {
                           ALLOWED_TAGS: ['img', 'iframe', 'p', 'div', 'a', 'span', 'b', 'i', 'u', 'br', 'strong', 'em'],
                           ALLOWED_ATTR: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen', 'class', 'id', 'style', 'href', 'title', 'alt']
                        })
                     }}
                  />}
                  {data.file &&
                     <a href={`${process.env.REACT_APP_API_URL}/download?id=${data.id}&model=${targetResult}`} className="btn_download">
                        <i className="icon xi-folder-open fs_type_11"></i>
                        <p className="txt fs_type_11 fw_type_03 file_name">{data.file_name}</p>
                        <i className="icon icon_download xi-download fs_type_11"></i>
                     </a>
                  }
               </div>
               {data && <NoticeDetailNav
                  data={data}
               />}
            </div>
         ) : (
            <div>
               <div className="info_wrap type_01 wrap xl:mb-40 mb-32">
                  <h3 className="hide-text tit text-center xl:text-24 text-18 font-bold xl:mb-24 mb-16">title</h3>
                  <div className="sub_info_wrap xl:mt-24 mt-16">
                     <div className="date_wrap">
                        <p className="tit xl:text-16 text-13 font-semibold">Date</p>
                        <p className="hide-text txt xl:text-16 text-13">2000.00.00</p>
                     </div>
                     <div className="views_wrap">
                        <p className="tit xl:text-16 text-13 font-semibold">Views</p>
                        <p className="hide-text txt xl:text-16 text-13">0</p>
                     </div>
                  </div>
               </div>
               <div
                  style={{ height: "100vh" }}
                  className="contents_wrap type_01 ql-editor wrap"
               />
               {data && <NoticeDetailNav
                  data={data}
               />}
            </div>
         )}
      </Container>
   )
}

export default DetailPage;