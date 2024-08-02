import { Link } from "react-router-dom"
import styled from "styled-components"

const NotFoundWrap = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 90vh;
   .txt_wrap {
      text-align: center;
   }
   .txt_wrap .tit {
      line-height: 60px;
   }
   .txt_wrap .btn_a {
      width: fit-content;
      border-radius: 9999px;
      padding: 12px 36px;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      background-color: var(--subColor01);
   }
`

export default function NotFound() {

   return (
      <NotFoundWrap>
         <div className="notfound">
            <div className="txt_wrap">
               <h2 className="tit xl:text-48 text-22 font-bold xl:mb-24 mb-8">
                  페이지를 찾을 수 없어요
               </h2>
               <p className="txt xl:text-22 text-13 xl:leading-32 leading-22 xl:mb-48 mb-32">
                  방문하시려는 주소가 잘못되었거나,<br />
                  페이지가 변경 또는 삭제된 것 같아요.
               </p>
               <Link to="/" className="btn_a">홈으로</Link>
            </div>
         </div>
      </NotFoundWrap>
   )
}
