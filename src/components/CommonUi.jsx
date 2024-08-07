import styled from "styled-components";

// Images
import { pattern02 } from "./Images";

const SpaceLab01Wrap = styled.div`
   .main-img{
      width: 100%;
      max-width: 960px;
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
`
const SpaceLab01 = ({ info }) => {
   return (
      <SpaceLab01Wrap className="container flex items-start xl:gap-80 xl:mt-120">
         <img className="main-img" src={info.mainImg} alt="" />
         <div className="text-wrap">
            <img className="bg-pattern" src={pattern02} alt="배경패턴" />
            <div>
               <p className="leading-1em xl:text-16 text-pointColor01">{info.subTitle}</p>
               <strong className="leading-1em xl:text-44 font-bold xl:mt-8">{info.title}</strong>
            </div>
            <div className="line hide-text xl:mt-24 xl:mb-24">line</div>
            <p className="desc xl:leading-32 xl:text-20 font-light">{info.desc}</p>
         </div>
      </SpaceLab01Wrap>
   )
}

export { SpaceLab01 };