import React, { useState } from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

// Components
import { Title02, SubBanner01, Desc01 } from '../../components/StyledCommon';
import ContactBanner from '../../components/subpage/ContactBanner';

// Images
import { iconQuotation01, iconQuotation02, image21, icon15, icon16, icon17, icon18, icon19, image22, image23, image24, image57, image58, image59 } from '../../components/Images'
import DOMPurify from 'dompurify';

// Styles
const ServiceWrap = styled.div`
   .banner{
      background-image: url(${image21});
   }
   .tab-wrap{
      box-shadow: inset 0px 0px 0px 1px var(--subColor04);
      .btn-tab{
         display: flex;
         justify-content: center;
         align-items: center;
         height: 70px;
         color: var(--subColor04);
         background-color: var(--subColor05);
         &.on{
            color: #fff;
            background-color: var(--pointColor01);
         }
      }
      .contents-wrap{
         .desc-wrap{
            &::before{
               content: '';
               display: block;
               clear: both;
               width: 1px;
               height: 61px;
               margin: 24px auto;
               background-color: var(--pointColor01);
            }
         }
      }
   }
   .consulting{
      .items-wrap{
         .item{
            position: relative;
            width: calc((100% - (24px * 4)) / 5);
            &::before, &::after{
               content: '';
               display: block;
               clear: both;
            }
            &::after{
               width: 10px;
               height: 10px;
               border-radius: 50%;
               margin-top: 40px;
               background-color: var(--pointColor01);
            }
            &::before{
               position: absolute;
               bottom: 4px;
               left: -12px;
               transform: translateX(50%);
               width: calc(100% + 24px);
               height: 1px;
               background-color: var(--pointColor01);
            }
            &:last-of-type::before{
               content: none;
            }
            .icon{
               width: auto;
               max-width: fit-content;
               height: 60px;
            }
         }
         .item-icon{
            width: fit-content;
            margin-top: 20px;
         }
      }
   }
   .style{
      background-color: #f2f0eb;
      .items-wrap{
         .item{
            position: relative;
            height: 485px;
            background-size: cover;
            background-position: center center;
            &.on{
               margin-top: 75px;
            }
            .text-wrap{
               position: absolute;
               bottom: 0px;
               left: 0px;
               width: 100%;
               height: 164px;
               background-color: rgba(121, 146, 107, 0.8);
            }
         }
      }
   }
   @media screen and (max-width:1279px){
      .tab-wrap.container{
         padding-left: 0px;
         padding-right: 0px;
         width: calc(100% - 32px);
      }
      .style{
         .items-wrap{
            .item.on{
               margin-top: 0px;
            }
         }
      }
      .consulting{
         .items-wrap{
            flex-wrap: wrap;
            justify-content: center;
            .item{
               width: 33.3%;
               &::before{
                  left: 0px;
                  transform: translateX(50%);
                  width: 100%;
               }
               &::after{
                  margin-top: auto;
               }
               &:nth-of-type(1),
               &:nth-of-type(3),
               &:nth-of-type(5){
                  height: 125px;
                  margin-bottom: 32px;
               }
               &:nth-of-type(7),
               &:nth-of-type(9){
                  height: 100px;
               }
               &:nth-of-type(5){
                  &::before{
                     content: none;
                  }
               }
               .icon{
                  height: 40px;
               }
            }
            .item-icon{
               display: none;
            }
         }
      }
   }
   @media screen and (max-width: 767px){
      .style{
         .items-wrap{
            display: flex;
            flex-direction: column;
            .item{
               height: 290px;
               .text-wrap{
                  height: 100px;
               }
            }
         }
      }
      .tab-wrap{
         .contents-wrap>.desc-wrap::before{
            height: 40px;
            margin-top: 16px;
            margin-bottom: 16px;
         }
      }
   }
`

const Service = () => {

   const [currentPage, setCurrentPage] = useState(0);

   const tabData = [
      "전체 정리수납 서비스",
      "부분 정리수납 서비스",
      "오피스 정리수납 서비스",
   ]
   const contentsData = {
      full: {
         subTitle: "Full Organization & Storage Service",
         title: "전체 정리수납 서비스",
         desc01: "전체 공간을 사용자에 맞춰 리빌딩 + 디테일한 정리 및 *코칭까지 해드리는 서비스 <br class='xl:block hidden'/>정리수납 전문가가 6인 이상 (원룸은 2인 이상) 투입되어 컨설팅을 진행합니다.",
         desc02: "*코칭 : 구성된 공간에 정리상태를 지속 유지할수 있도록 공간의 실제 사용자에게 정리방법과 관리방법을 교육해 드립니다. (전체 정리 서비스중 일부)",
         img: image57,
      },
      partial: {
         subTitle: "Partial Organization & Storage Service",
         title: "부분 정리수납 서비스",
         desc01: "정리가 필요한 공간만을 선택하여 8시간동안 정리수납을 해드리는 서비스로 <br class='xl:block hidden' />아이방, 옷방(드레스룸), 주방, 냉장고, 펜트리, 안방, 서재, 멀티룸, 베란다, 사무실 창고 및 비품실, 매장 등 정리가 필요한 공간에 맞춤으로 서비스합니다.",
         desc02: "* 서비스 인원은 기본 2인 팀으로 구성되며, 물건의 양이나 두개이상의 영역 정리하고자 할때에는 상담을 통한 인원수의 변경이 가능합니다 ",
         img: image58,
      },
      office: {
         subTitle: "Office Organization & Storage Service",
         title: "오피스 정리수납 서비스",
         desc01: "회사 업무패턴,업무동선,업무능률의 향상을 위한 업무공간 컨설팅 서비스로 <br class='xl:block hidden' />개인공간과 공용공간을 구분하여 효율적인 가구배치를 제안합니다.",
         img: image59,
      }
   }
   const styleInfo = [
      {
         title: "공간 스타일링 디자인",
         desc: "공간 진단 + 디자인 및 가구, <br class='xl:block hidden' />용품 추천 서비스",
         bgImg: image22,
      },
      {
         title: "공간 스타일링 컨설팅",
         desc: "공간 진단 + 디자인 및 가구, 용품 + <br class='xl:block hidden' />인테리어 조명(선택) + 공간 재구성 및 정리 서비스",
         bgImg: image23,
      },
      {
         title: "공간 스타일링 패키지",
         desc: "공간 디자인이 이미 완성되어 판매되는 패키지로 <br class='xl:block hidden' />빠르게 선택이 가능한 서비스",
         bgImg: image24,
      },
   ]


   const renderContent = () => {
      const currentContent = currentPage === 0 ? contentsData.full : currentPage === 1 ? contentsData.partial : contentsData.office;
      return (
         <>
            <p className='text-center xl:text-16 text-14 text-pointColor01'>{currentContent.subTitle}</p>
            <h3 className='text-center xl:text-44 text-18 font-bold xl:mt-16 mt-12'>{currentContent.title}</h3>
            <div className='desc-wrap'>
               <p
                  className='text-center xl:leading-26 leading-18 xl:text-18 text-13'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentContent.desc01) }}
               />
               {currentContent.desc02 &&
                  <p
                     className='text-center xl:leading-26 leading-16 xl:text-16 text-12 xl:mt-24 mt-16 text-subColor03'
                     dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentContent.desc02) }}
                  />
               }
            </div>
            <img className='w-full xl:mt-48 mt-32' src={currentContent.img} alt="서비스사진" />
         </>
      )
   }

   return (
      <ServiceWrap className='xl:mt-120 mt-80'>
         <Helmet>
            <title>공간정리 - 공간정원</title>
            <meta name="description" content="공간정리" />
         </Helmet>
         <div className='container'>
            <Title02>공간정리</Title02>
            <SubBanner01 className='banner flex flex-col justify-center items-center xl:mt-40 mt-32'>
               <img className='icon ml-auto mr-auto' src={iconQuotation01} alt="따옴표" />
               <p className='desc'>
                  공간정원을 대표하는 서비스로서 <br className='only-mobile' />
                  다년간의 정리 연구와 개발을 통해 <span className='point'>사용자 맞춤의 <br className='only-mobile' />
                     편리하고 세련된 환경</span>으로  재구성하며,<br /><br className='xl:hidden' />
                  나아가 <span className='point'>사용자에게 꼭 필요한 공간의 기능들을 부여하여 <br className='only-mobile' />
                     성장과 발전을 돕는 공간</span>으로 만들어 드리는 <br className='only-mobile' />
                  정리수납 서비스 입니다
               </p>
               <img className='icon ml-auto mr-auto' src={iconQuotation02} alt="따옴표" />
            </SubBanner01>
         </div>
         <div className='container desc xl:mt-105 mt-60'>
            <Desc01 className='desc text-center font-medium'>
               사용자의 현재 생활과 가족구성원의 패턴 및 성향을 분석하여 맞춤형 공간 재구성 및 정리수납을 하는 가장 선진화된 정리수납<br className='xl:block hidden' />
               현재 전세계에서 <span className='point font-bold text-pointColor01'>가장 선진화된 정리기법을 연구하고 서비스 하는 곳</span>은 공간정원이 유일합니다
            </Desc01>
         </div>
         <div className='tab-wrap container xl:mt-90 mt-80 xl:pb-120 pb-40'>
            <div className='tab grid grid-cols-3'>
               {tabData.map((tabData, index) => (
                  <button
                     onClick={() => { setCurrentPage(index) }}
                     className={`${currentPage === index ? "on" : ""} btn-tab xl:leading-1em leading-18 xl:text-18 text-13 font-semibold xl:p-0 pl-12 pr-12`}
                     key={index}
                  >
                     {tabData}
                  </button>
               ))}
            </div>
            <div className='contents-wrap xl:p-80 pt-40 pb-40 pl-16 pr-16'>
               {renderContent()}
            </div>
            <div className='consulting mt-48'>
               <div>
                  <p className='text-center xl:text-16 text-14 text-pointColor01'>Consulting Procedures</p>
                  <h3 className='text-center xl:text-44 text-18 font-bold xl:mt-16 mt-12'>컨설팅 절차</h3>
               </div>
               <ul className='flex items-start items-wrap xl:mt-68 mt-40'>
                  <li className='item flex flex-col items-center'>
                     <img className='icon' src={icon15} alt="아이콘" />
                     <p className='xl:leading-1em leading-18 text-center xl:text-18 text-13 xl:mt-32 mt-20'>전화상담</p>
                  </li>
                  <li className='item-icon xi-angle-right-min xl:text-24'></li>
                  <li className='item flex flex-col items-center'>
                     <img className='icon' src={icon16} alt="아이콘" />
                     <p className='xl:leading-1em leading-18 text-center xl:text-18 text-13 xl:mt-32 mt-20'>방문진단</p>
                  </li>
                  <li className='item-icon xi-angle-right-min xl:text-24'></li>
                  <li className='item flex flex-col items-center'>
                     <img className='icon' src={icon17} alt="아이콘" />
                     <p className='xl:leading-1em leading-18 text-center xl:text-18 text-13 xl:mt-32 mt-20'>계약&#40;컨설팅 일정 및 인원수 결정&#41;</p>
                  </li>
                  <li className='item-icon xi-angle-right-min xl:text-24'></li>
                  <li className='item flex flex-col items-center'>
                     <img className='icon' src={icon18} alt="아이콘" />
                     <p className='xl:leading-1em leading-18 text-center xl:text-18 text-13 xl:mt-32 mt-20'>컨설팅</p>
                  </li>
                  <li className='item-icon xi-angle-right-min xl:text-24'></li>
                  <li className='item flex flex-col items-center'>
                     <img className='icon' src={icon19} alt="아이콘" />
                     <p className='xl:leading-1em leading-18 text-center xl:text-18 text-13 xl:mt-32 mt-20'>해피콜</p>
                  </li>
               </ul>
            </div>
         </div>
         <div className='style mt-80 pt-80 xl:pb-105 pb-80'>
            <div className='container'>
               <div>
                  <Title02>공간 스타일링</Title02>
                  <p className='text-center xl:leading-26 leading-18 xl:text-18 text-13 mt-24'>
                     사용자가 원하는 공간의 목적이나 추구하는 니즈를 토대로 현재 공간을 진단하고 디자인을 진행합니다. <br className='xl:block hidden' />
                     디자인된 공간에 딱 맞춘 가구나 용품의 추천이 진행되며 이를 토대로 공간의 스타일링을 진행해드리는 서비스입니다.
                  </p>
               </div>
               <ul className='items-wrap grid grid-cols-3 xl:gap-24 gap-16 xl:mt-48 mt-40'>
                  {styleInfo.map((styleInfo, index) => (
                     <li
                        style={{ backgroundImage: `url(${styleInfo.bgImg})` }}
                        className={`${index === 1 ? "on" : ""} item`}
                        key={index}
                     >
                        <div className='text-wrap flex flex-col justify-center items-center'>
                           <h4 className='leading-1em xl:text-24 text-18 font-bold text-white'>{styleInfo.title}</h4>
                           <p
                              className='text-center xl:leading-26 leading-18 xl:text-18 text-13 xl:p-0 pl-24 pr-24 xl:mt-24 mt-16 text-white'
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(styleInfo.desc) }}
                           />
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <ContactBanner />
      </ServiceWrap>
   )
}

export default Service;