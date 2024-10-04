import React from 'react'
import { Helmet } from 'react-helmet-async'

// Components
import { SpaceLab01 } from '../../components/CommonUi'
import { Title02 } from '../../components/StyledCommon'

// Images
import { image41, image42, image43, image44 } from '../../components/Images'
import styled from 'styled-components'
import DOMPurify from 'dompurify'

// Style
const EduPlanningWrap = styled.div`
   .item{
      &:last-of-type{
         margin-bottom: 0px;
      }
      .main-img{
         width: auto;
         height: 380px;
      }
      .text-wrap{
         width: 100%;
         max-width: 700px;
         height: 380px;
         border-top: 1px solid var(--subColor05);
         border-bottom: 1px solid var(--subColor05);
         *{
            text-align: center;
         }
         .title>.point{
            color: var(--pointColor01);
         }
      }
   }
   @media screen and (max-width:1279px){
      .item{
         .main-img{
            width: 50%;
            height: auto;
         }
         .text-wrap{
            height: auto;
         }
      }
   }
   @media screen and (max-width:767px){
      .item{
         flex-direction: column;
         gap: 16px;
         .main-img{
            width: 100%;
         }
         .text-wrap{
            padding: 24px 16px;
         }
      }
   }
`

const EduPlanning = () => {

   const SpaceLab01Info = {
      mainImg: image41,
      subTitle: "Education planning",
      title: "교육 기획",
      desc: `공간 가드닝 연구를 토대로 발전된 “정리수납” 을 교육하며 교양클래스, 
           전문가자격과정 아카데미, 전문가 심화교육을 진행합니다.
           연구되어온 정리수납 방법들이 실제 필드 (현장)에서 반영될 수 있도록 
           전문가의 레벨업을 진행하여 더 효과적이고 만족도 높은 서비스를 진행합니다.  `,
   }
   const eduItems = [
      {
         img: image42,
         subTitle: "Textbook Production",
         title: "<span class='point'>교재</span> 제작",
         desc: "전문가 자격과정을 쉽게 배우고 익힐수 있는 교재로 제작하며 <br class='xl:block hidden'/>정리수납 분야의 연구성과를 반영합니다",
      },
      {
         img: image43,
         subTitle: "VOD Production",
         title: "<span class='point'>VOD</span> 제작",
         desc: "일반인들도 쉽게 정리를 할수 있는 <br class='xl:block hidden'/>정리수납 교양 클래스영상을 제작합니다 ",
      },
      {
         img: image44,
         subTitle: "Professional Curriculum",
         title: "<span class='point'>전문가</span> 심화교육",
         desc: "직무능력 향상과 더불어 조직문화, 리더쉽, 팀워크, 서비스마인드 교육을 실시합니다 <br class='xl:block hidden'/>(공간정원 정리수납 전문가 대상)",
      },
   ]

   return (
      <EduPlanningWrap className='xl:pb-120 pb-80'>
         <Helmet>
            <title>교육 기획 - 공간정원</title>
            <meta name="description" content="교육 기획" />
            <meta property="og:title" content="교육 기획 - 공간정원" />
            <meta property="og:description" content="교육 기획" />
         </Helmet>
         <SpaceLab01
            info={SpaceLab01Info}
         />
         <div className='xl:pt-120 pt-80'>
            <Title02>공간정원의 교육 기획</Title02>
            <ul className='item-wrap container xl:mt-80 mt-40'>
               {eduItems.map((eduItems, index) => (
                  <li className='item flex gap-40 xl:mb-48 mb-40' key={index}>
                     <img className='main-img' src={eduItems.img} alt="공간정원의 교육 기획" />
                     <div className='text-wrap flex flex-col justify-center items-center'>
                        <p className='leading-1em xl:text-48 text-28 font-thin text-pointColor01'>0{index + 1}</p>
                        <p className='leading-1em xl:text-16 text-13 mt-16 text-subColor04'>{eduItems.subTitle}</p>
                        <h4
                           className='title leading-1em xl:text-32 text-20 font-bold xl:mt-16 mt-8'
                           dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eduItems.title) }}
                        />
                        <p
                           className='xl:leading-26 leading-18 xl:text-18 text-13 xl:mt-24 mt-16 text-subColor03'
                           dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eduItems.desc) }}
                        />
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </EduPlanningWrap>
   )
}

export default EduPlanning