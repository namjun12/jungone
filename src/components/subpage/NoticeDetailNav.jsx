import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

// styles
const Container = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   border-top: 1px solid var(--subColor01);
   padding-top: 24px;
   margin-bottom: 120px;
   .btn,
   .prev_wrap,
   .next_wrap {
      display: flex;
      align-items: center;
   }
   .btn {
      gap: 16px;
      width: calc((100% - 56px - 20px) / 2);
   }
   .btn.prev {
      justify-content: flex-start;
   }
   .btn.next {
      justify-content: flex-end;
   }
   .btn_list {
      width: 56px;
      height: 56px;
      border: 2px solid var(--subColor04);
      border-radius: 50%;
   }
`

const NoticeDetailNav = ({ data }) => {

   const query = useQuery();
   const page = query.get('page');
   const search = query.get('search');

   const location = useLocation();
   const [baseUrl, setBaseUrl] = useState('');

   useEffect(() => {
      const pathSegments = location.pathname.split('/').filter(Boolean); // 경로 세그먼트 분리 및 빈 요소 제거
      pathSegments.pop(); // 마지막 세그먼트 제거
      const newPath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : ''; // 새로운 경로 만들기
      const base = `${newPath}`; // 전체 URL 만들기
      setBaseUrl(base);
   }, [location]);

   return (
      <Container className="control_wrap type_01 wrap">
         {data.prev === null ? (
            <div className="btn prev noitem">
               <div className="prev_wrap gap-8">
                  <i className="xi-long-arrow-left xl:text-24"></i>
                  <p className="xl:text-16 font-bold">PREV</p>
               </div >
               <p className="xl:block hidden tit xl:text-16 font-light">
                  이전 게시글이 없습니다.
               </p>
            </div >
         ) : (
            <Link to={`${baseUrl}/${data.prev.id}?page=${page}&search=${search}`} className="btn prev">
               <div className="prev_wrap gap-8">
                  <i className="xi-long-arrow-left xl:text-24"></i>
                  <p className="xl:text-16 font-bold">PREV</p>
               </div >
               <p className="xl:block hidden tit xl:text-16 font-light">
                  {data.prev.title}
               </p>
            </Link >
         )
         }
         <Link className="btn_list flex justify-center items-center" to={`${baseUrl}?page=${page}&search=${search}`}>
            <i className="xi-bars xl:text-24 icon text-subColor04"></i>
         </Link>
         {
            data.next === null ? (
               <div className="btn next noitem">
                  <p className="xl:block hidden tit xl:text-16 font-light">
                     다음 게시글이 없습니다.
                  </p>
                  <div className="next_wrap gap-8">
                     <p className="xl:text-16 font-bold">NEXT</p>
                     <i className="xi-long-arrow-right xl:text-24"></i>
                  </div>
               </div>
            ) : (
               <Link to={`${baseUrl}/${data.next.id}?page=${page}&search=${search}`} className="btn next">
                  <p className="xl:block hidden tit xl:text-16 font-light">
                     {data.next.title}
                  </p>
                  <div className="next_wrap gap-8">
                     <p className="xl:text-16 font-bold">NEXT</p>
                     <i className="xi-long-arrow-right xl:text-24"></i>
                  </div>
               </Link>
            )
         }
      </Container >
   )
}

export default NoticeDetailNav;