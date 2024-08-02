import React from 'react'
import styled from 'styled-components'

// Components
import { Title02 } from '../../components/StyledCommon'

// Images
import { image12 } from '../../components/Images'

// Styles
const CeoWrap = styled.div`
   .ceo-photo{
      width: 100%;
      max-width: 580px;
   }
   .text-wrap{
      max-width: 770px;
      .detail-wrap{
         border-top: 1px solid var(--subColor05);
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
      <CeoWrap className='pt-180'>
         <div>
            <div>
               <Title02>대표소개</Title02>
               <p className='text-center xl:leading-32 xl:text-20 xl:mt-32'>집안의 모든 환경은 사용자별 맞춤 컨설팅을 통해 이상적인 생활 환경으로 변화되어야 합니다.</p>
            </div>
            <div className='container flex justify-between items-end'>
               <img className='ceo-photo' src={image12} alt="" />
               <div className='text-wrap'>
                  <div>
                     <p className='leading-1em xl:text-18 text-pointColor01'>대표이사</p>
                     <strong className='name leading-1em xl:text-32 xl:mt-16'>이정원 대표</strong>
                  </div>
                  <div className='detail-wrap xl:pt-24 xl:mt-24'>
                     {ceoInfo.map((ceoInfo, index) => (
                        <div key={index}>
                           <p className='leading-1em xl:text-20 font-semibold text-pointColor01'>{ceoInfo.title}</p>
                           <ul className='flex flex-nowrap xl:mt-16'>
                              {ceoInfo.contents.map((contents, index) => (
                                 <li className='list w-6/12 list-disc xl:leading-32 xl:text-18' key={index}>{contents}</li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div>
               <h3></h3>
               <div>
                  <p>

                  </p>
                  <p>

                  </p>
               </div>
            </div>
         </div>
      </CeoWrap>
   )
}

export default Ceo