import React from 'react'
import styled from 'styled-components'
import DOMPurify from 'dompurify'
import { Helmet } from 'react-helmet-async'

// Components
import { Title02 } from '../../components/StyledCommon'

// Images
import { pattern02, image12, image13, image14 } from '../../components/Images'

// Styles
const CeoWrap = styled.div`
   .ceo-photo{
      width: 580px;
      max-width: 42%;
      margin-right: 24px;
   }
   .text-wrap{
      max-width: 770px;
      .name-wrap{
         height: 95px;
         background-image: url(${pattern02});
         background-size: 95px 95px;
         background-position: center right;
      }
      .detail-wrap{
         border-top: 1px solid var(--subColor05);
         .detail-item:first-of-type{
            margin-top: 0px;
         }
      }
   }
   .img-text{
      width: auto;
      height: 55px;
   }
   @media screen and (max-width: 1279px){
      .img-text{
         height: 31px;
      }
      .txt-wrap{
         width: 50%;
      }
   }
   @media screen and (max-width: 767px){
      .intro{
         flex-direction: column;
         align-items: flex-start;
         .ceo-photo{
            max-width: 100%;
         }
         .text-wrap{
            width: 100%;
            .name-wrap{
               background-size: 50px 50px;
               background-position: bottom right;
            }
         }
         .detail-wrap {
            .list-wrap{
               display: block;
            }
         }
      }
      .ceo-text{
         .contents-wrap{
            display: block;
            .txt-wrap{
               width: 100%;
            }
         }
      }
   }
`

const Ceo = () => {

   const ceoInfo = [
      {
         title: "경력사항",
         contents: [
            "공간설계 전문가 / 공간설계사",
            "공간정리 창업협회 협회장",
            "이정원 토탈홈케어 대표",
            "정리 디렉터 교육기관 운영",
            "정리수납 전문과정 교육강사",
            "이정원 공간정리 연구소 소장",
         ]
      },
      {
         title: "강좌연혁",
         contents: [
            "2018년 SBS 생방송 좋은아침 출연",
            "2023년 관악 여성인력개발센터 강좌",
            "2018년 KBS 아침이 좋다 출연",
            "2023년 매월 공간정리 창업 강의",
            "2019년 SBS 모닝와이드 출연",
            "2023년 매월 집중력 향상 공부환경 강의",
            "2019년 KBS 생생정보통 출연",
            "2023년 분기별 공간정리 전문가 자격과정 교육강좌",
            "2020년 채널A 서민갑부 출연",
            "2023년 TBS 교통방송 생방송출연",
            "2020년 TvN 프리한 닥터 출연",
            "2024년 성남독수리중고등학교 정리강좌 (선생님대상)",
            "2021년 TBS 라디오 생방송 출연",
            "2024년 반도체 회사 C 기업강좌",
            "2021년 송린중학교 학부모 정리수납 강좌",
            "2024년 서울 마포구 도서관 정리강의",
            "2022년 서울 은평구 푸르지오 홈케어 강좌",
            `2024년 자격강좌 및 전문가 심화반 교육<br/>
            <span class='xl:leading-30 xl:text-16 text-subColor03'>매년 기업/단체 대상 강좌 진행</span>`,
         ]
      },
   ]

   return (
      <CeoWrap className='xl:pt-180 pt-80'>
         <Helmet>
            <title>대표소개 - 공간정원</title>
            <meta name="description" content="대표소개" />
            <meta property="og:title" content="대표소개 - 공간정원" />
            <meta property="og:description" content="대표소개" />
         </Helmet>
         <div>
            <div>
               <Title02>대표소개</Title02>
               <p className='opacity-60 text-center xl:leading-32 xl:text-20 text-13 xl:mt-32 mt-16'>집안의 모든 환경은 사용자별 맞춤 컨설팅을 통해 <br className='xl:hidden' />이상적인 생활 환경으로 변화되어야 합니다.</p>
            </div>
            <div className='intro container flex justify-between xl:items-end items-center xl:mt-48 mt-40'>
               <img className='ceo-photo' src={image12} alt="" />
               <div className='text-wrap'>
                  <div className='name-wrap flex flex-col justify-end'>
                     <p className='leading-1em xl:text-18 text-16 text-pointColor01'>대표이사</p>
                     <strong className='name leading-1em xl:text-32 text-20 xl:mt-16 mt-8'>이정원 대표</strong>
                  </div>
                  <div className='detail-wrap pt-24 mt-24'>
                     {ceoInfo.map((ceoInfo, index) => (
                        <div className='detail-item xl:mt-32 mt-24' key={index}>
                           <p className='leading-1em xl:text-20 text-16 font-semibold text-pointColor01'>{ceoInfo.title}</p>
                           <ul className='list-wrap grid grid-cols-2 mt-16'>
                              {ceoInfo.contents.map((contents, index) => (
                                 <li
                                    className='list-disc xl:leading-32 xl:text-18 text-13 xl:ml-20 ml-16' key={index}
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contents) }}
                                 />
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className='ceo-text xl:pt-80 xl:pb-80 pt-40 pb-40 xl:mt-48 mt-40 bg-pointColor04'>
            <div className='container'>
               <h3>
                  <img className='img-text' src={image13} alt="공간정원에 방문해주셔서 감사합니다." />
               </h3>
               <div className='contents-wrap flex justify-between xl:gap-0 gap-40 xl:mt-42 mt-24'>
                  <p className='txt-wrap xl:leading-30 leading-18 xl:text-18 text-13'>
                     2017년, 저희 공간정원은 작은 꿈을 안고 시작되었습니다.&nbsp;<br className='xl:block hidden' />
                     바로 여러분들의 소중한 공간을 더 편리하고 사람에게 도움이 되는&nbsp;<br className='xl:block hidden' />
                     새로운 공간으로 만들겠다는 다짐과 함께였습니다.&nbsp;<br className='xl:block hidden' />
                     그동안 저희와 함께해주신 고객님들의 사랑 덕분에,&nbsp;<br className='xl:block hidden' />
                     공간정원은 꾸준히 성장해 올 수 있었습니다.&nbsp;<br />
                     <br />
                     공간정원은 단순히 물건을 정리하는 것을 넘어,&nbsp;<br className='xl:block hidden' />
                     각 개인의 삶의 질을 향상시키고 마음의 평안을 제공하며 성장을 도모하는 환경으로&nbsp;<br className='xl:block hidden' />
                     만드는 것을 목표로 하고 있습니다.&nbsp;<br className='xl:block hidden' />
                     공간정원의 정리수납 솔루션은 여러분의 일상과 삶을 더욱 빛나게 하고,&nbsp;<br className='xl:block hidden' />
                     매일매일의 작은 행복들을 찾아드리고자 합니다.&nbsp;<br />
                     <br />
                     빠르게 변화하는 세상 속에서, 공간정원은 항상 더 나은 환경을 연구하고 있습니다.&nbsp;<br className='xl:block hidden' />
                     사용자의 니즈에 맞춰 끊임없이 혁신하고, 최상의 서비스를 제공하기 위해&nbsp;<br className='xl:block hidden' />
                     원스톱 서비스를 넘어 라이프 오브제까지 연구를 진행하고 있습니다.
                  </p>
                  <div className='txt-wrap'>
                     <p className='xl:leading-30 leading-18 xl:text-18 text-13'>
                        공간정원은 여러분의 소중한 일상에 행복한 변화를 드리고자 합니다.&nbsp;<br className='xl:block hidden' />
                        또한, 저희는 사회적 책임을 다하기 위해 노력하고 있습니다.&nbsp;<br className='xl:block hidden' />
                        지역 사회와의 따뜻한 나눔과 환경 보호를 위해 다양한 활동을 계획하고 있습니다.&nbsp;<br className='xl:block hidden' />
                        저희의 작은 노력이 모여 더 나은 세상을 만들 수 있다고 믿습니다.&nbsp;<br />
                        <br />
                        앞으로도 공간정원은 여러분과 함께 성장하며, 더 나은 내일을 만들어 나가겠습니다.&nbsp;<br className='xl:block hidden' />
                        여러분의 지속적인 관심과 성원을 부탁 드립니다&nbsp;<br />
                        <br />
                        감사합니다.
                     </p>
                     <div className='flex items-center xl:gap-16 gap-8 w-fit xl:mt-24 mt-36 ml-auto'>
                        <p>대표이사 </p>
                        <img className='img-text' src={image14} alt="이정원" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </CeoWrap>
   )
}

export default Ceo