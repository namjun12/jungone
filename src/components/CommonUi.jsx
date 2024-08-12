import styled from "styled-components";

// Images
import { pattern02 } from "./Images";

const SpaceLab01Wrap = styled.div`
   .main-img{
      width: 960px;
      max-width: 67%;
      margin-left: -240px;
   }
   .line{
      width: 790px;
      height: 1px;
      margin-left: -160px;
      background-color: var(--subColor05);
   }
   .text-wrap{
      width: 100%;
      max-width: 635px;
      padding-top: 40px;
      .bg-pattern{
         margin-left: auto;
         width: 95px;
         height: auto;
         margin-bottom: 40px;
      }
   }
   @media screen and (max-width: 1500px){
      align-items: center;
      .main-img{
         width: 50%;
         margin-left: 0px;
      }
      .line{
         width: 100%;
         margin-left: 0px;
      }
      .text-wrap{
         width: 50%;
         padding-top: 0px;
         .bg-pattern{
            width: 50px;
         }
      }
   }
   @media screen and (max-width:767px){
      flex-direction: column;
      /* padding-left: 0px;
      padding-right: 0px; */
      .main-img{
         width: 100%;
         max-width: 100%;
      }
      .text-wrap{
         width: 100%;
         .bg-pattern{
            margin-bottom: 0px;
            margin-bottom: -50px;
         }
      }
   }
`
const SpaceLab01 = ({ info }) => {
   return (
      <SpaceLab01Wrap className="container flex items-start xl:gap-80 gap-40 xl:mt-120 mt-80">
         <img className="main-img" src={info.mainImg} alt="" />
         <div className="text-wrap">
            <img className="bg-pattern" src={pattern02} alt="배경패턴" />
            <div>
               <p className="leading-1em text-16 text-pointColor01">{info.subTitle}</p>
               <strong className="leading-1em xl:text-44 text-20 font-bold mt-8">{info.title}</strong>
            </div>
            <div className="line hide-text mt-24 mb-24">line</div>
            <p className="desc xl:leading-32 leading-18 xl:text-20 text-13 font-light">{info.desc}</p>
         </div>
      </SpaceLab01Wrap>
   )
}

export { SpaceLab01 };