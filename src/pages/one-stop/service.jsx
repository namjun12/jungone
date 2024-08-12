import React from 'react'
import styled from 'styled-components';

// Components
import { Title02, SubBanner01, Desc01 } from '../../components/StyledCommon';
import ContactBanner from '../../components/subpage/ContactBanner';

// Images
import { iconQuotation01, iconQuotation02, iconQuotation03, iconQuotation04, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35 } from '../../components/Images';

const ServiceWrap = styled.div`
   .banner{
      background-image: url(${image25});
   }
   .why{
      z-index: -9;
      position: relative;
      .text-wrap{
         .before-wrap{
            .icon{
               width: 20px;
               height: auto;
               margin-top: -8px;
            }
            .text{
               position: relative;
               box-shadow: inset 0px -0.9em 0px var(--pointColor03);
            }
         }
         .arrow-wrap{
            .icon.type02{
               margin-top: -24px;
            }
         }
         .result{
            border-radius: 9999px;
            padding: 24px 40px;
            color: #fff;
            background-color: var(--pointColor01);
         }
      }
   }
   .service-type{
      .items-wrap{
         .item{
            box-shadow: inset 0px 0px 0px 1px var(--subColor05);
            .text-wrap{
               overflow: hidden;
               position: relative;
               padding: 32px 12px;
               .num{
                  position: absolute;
                  top: -10px;
                  right: 16px;
               }
               .desc{
                  &:first-of-type{
                     margin-top: 0px;
                  }
               }
            }
         }
      }
   }
   @media screen and (max-width:1279px){
      .why{
         .text-wrap{
            .before-wrap>.icon{
               width: 15px;
            }
            .result{
               width: 100%;
               height: auto;
               text-align: center;
               padding: 24px 0px;
            }
         }
      }
      .service-type{
         .items-wrap{
            grid-template-columns: repeat(2, 1fr);
            .item>.text-wrap{
               padding: 24px 6px;
               .num{
                  top: -7px;
                  right: 8px;
               }
            }
         }
      }
   }
`

const OneStopService = () => {

   const serviceType = [
      {
         img: image28,
         title: "이사",
         desc: [
            "· 집, 사무실, 학교, 관공서 이사",
         ]
      },
      {
         img: image29,
         title: "청소",
         desc: [
            "· 입주청소, 이사청소, 정리청소",
            "· 에어컨, 냉장고 등 가전내부 청소",
            "· 새집증후군, 마루코팅 서비스",
         ]
      },
      {
         img: image30,
         title: "줄눈",
         desc: [
            "· 현관, 욕실, 베란다 등 타일이 시공된 영역",
            "· 주방이나 욕실의 실리콘 오염방지 코팅",
         ]
      },
      {
         img: image31,
         title: "탄성코트",
         desc: [
            "· 베란다, 실외기, 대피실 등 외부와 온도차가 심한 공간에 곰팡이방지 기능성 페인트 시공 ",
            "· 습도조절, 냄새제거의 추가기능",
         ]
      },
      {
         img: image32,
         title: "시스템·붙박이장",
         desc: [
            "· 정리전문가의 방문진단으로 최적화 장 추천",
            "· 집의 넓이와 구조, 물건의 양을 고려하여 만족도 상승",
         ]
      },
      {
         img: image33,
         title: "코팅",
         desc: [
            "· 주방상판, 수전, 욕실바닥, 거울, 샤워부스 등에 시공되는 유리막 발수코팅",
            "· 새집과 살던 집 모두 추천하는 서비스",
         ]
      },
      {
         img: image34,
         title: "도배·장판",
         desc: [
            "· 새집같은 분위기로 바꿔주는 대표적인 시공",
            "· 친환경 합지와 실크벽지로 시공",
            "· 30년 이상 경력 베테랑 도배사님의 시공",
         ]
      },
      {
         img: image35,
         title: "인테리어 조명",
         desc: [
            "· 분위기 변화에 가장 효과적인 방법",
            "· 사용자의 연령대, 방 분위기를 고려한 추천",
         ]
      },
   ]

   return (
      <ServiceWrap className='xl:pt-120 pt-80'>
         <div className='container'>
            <Title02>원스톱 토탈서비스</Title02>
            <SubBanner01 className='banner flex flex-col justify-center items-center xl:mt-40 mt-32'>
               <img className='icon ml-auto mr-auto' src={iconQuotation01} alt="따옴표" />
               <p className='desc'>
                  <strong>이사에서 부터 청소, 전문시공 및 공간가드닝</strong>까지 모두 알아서 해주는 편리한 <strong>원스톱 토탈서비스</strong>
                  국내 최초로 공간정원에서 시작 되었으며 소비자분들께 정말 큰 사랑을 받고있는 서비스입니다.
                  소비자의 현재 상태를 진단하여 최적의 효율과 퍼포먼스가 발생하는 서비스로 패키징 추천을 드리고 있으며
                  서비스들의 효율적인 연계 작업을 통해 효율적인 가격을 만들어 드립니다.
               </p>
               <img className='icon ml-auto mr-auto' src={iconQuotation02} alt="따옴표" />
            </SubBanner01>
         </div>
         <div className='container desc xl:pb-120 xl:mt-105 mt-60 pb-40'>
            <Desc01 className='desc xl:leading-36 text-center xl:text-24 font-medium'>
               공간정원 원스톱 토탈서비스는 <span className='point font-bold text-pointColor01'>각 분야 최고 전문가</span>가 시공하고 있습니다.
            </Desc01>
            <img className='w-full xl:mt-48 mt-36' src={image26} alt="이사, 청소 등" />
         </div>
         <div className='why xl:pt-120 xl:pb-120 pt-40 pb-40 bg-pointColor06'>
            <div className='container'>
               <h3 className='xl:text-44 text-center font-bold'>
                  <span className='text-pointColor01'>원스톱 토탈서비스</span>가 사랑받는 이유
               </h3>
               <img className='w-full xl:mt-80 mt-40' src={image27} alt="원스톱 토탈서비스가 사랑받는 이유" />
               <div className='text-wrap xl:mt-80 mt-48'>
                  <div className='before-wrap flex justify-center items-start gap-8'>
                     <img className='icon' src={iconQuotation03} alt="따옴표" />
                     <p className='text leading-1em text-center xl:text-28 text-18 font-semibold text-pointColor01'>이사 전,후 효율적인 서비스 제공</p>
                     <img className='icon' src={iconQuotation04} alt="따옴표" />
                  </div>
                  <div className='arrow-wrap flex flex-col justify-center items-center mt-32'>
                     <i className='icon xi-angle-down-thin xl:text-40 text-pointColor01'></i>
                     <i className='icon type02 xi-angle-down-thin xl:text-40 text-pointColor01'></i>
                  </div>
                  <div className='result w-fit leading-1em xl:text-24 font-bold mt-32 ml-auto mr-auto'>
                     비용 및 시간절감으로 인한 삶의 질 상승
                  </div>
               </div>
            </div>
         </div>
         <div className='service-type xl:pt-120 xl:pb-120 pt-80 pb-80'>
            <div>
               <span className='block leading-1em text-center xl:text-16 text-14 text-pointColor01'>One-stop Total Service</span>
               <h3 className='leading-1em text-center xl:text-44 text-20 font-bold xl:mt-24 mt-8'>서비스 종류</h3>
            </div>
            <ul className='items-wrap container grid grid-cols-4 xl:gap-24 gap-8 xl:mt-48 mt-40'>
               {serviceType.map((serviceType, index) => (
                  <li className='item' key={index}>
                     <img className='main-img w-full' src={serviceType.img} alt="서비스 종류" />
                     <div className='text-wrap'>
                        <span className='num leading-1em xl:text-56 text-32 font-bold text-pointColor04'>0{index + 1}</span>
                        <strong className='text-center w-full leading-1em xl:text-24 text-16'>{serviceType.title}</strong>
                        <ul className='xl:mt-24 mt-16'>
                           {serviceType.desc.map((desc, index) => (
                              <li className='desc text-center xl:leading-26 leading-18 xl:text-18 text-12 xl:mt-12 mt-8 text-subColor03' key={index}>{desc}</li>
                           ))}
                        </ul>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
         <ContactBanner />
      </ServiceWrap>
   )
}

export default OneStopService;