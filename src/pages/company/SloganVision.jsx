import React from 'react'
import { Helmet } from 'react-helmet-async'

// Components
import { Title02 } from '../../components/StyledCommon'
import styled from 'styled-components'

// Images
import { simbol, iconQuotation01, iconQuotation02, pattern02, image15, image16, image17, image18, image19, image54 } from '../../components/Images'

// Styles
const SloganVisionWrap = styled.div`
   .slogan{
      .main-img{
         width: 768px;
         max-width: 60%;
         height: auto;
      }
      .line{
         z-index: -9;
         position: relative;
         width: calc(100% + 100px);
         height: 1px;
         margin-left: -100px;
         background-color: var(--subColor05);
      }
      .text-wrap{
         background-image: url(${pattern02});
         background-size: 51px 51px;
         background-position: top right;
         .icon{
            width: 28px;
            height: auto;
         }
      }
   }
   .vision{
      .main-img{
         width: 100%;
         max-width:1294px;
         margin-left: auto;
         margin-right: auto;
      }
   }
   .ci{
      .ci-wrap{
         .img-wrap{
            width: 100%;
            height: 196px;
            border: 1px solid var(--subColor04);
            .ci-img{
               &.type01{
                  width: 80px;
                  height: auto;
               }
               &.type02{
                  width: 250px;
                  height: auto;
               }
               &.type03{
                  width: 100px;
                  height: auto;
               }
            }
         }
      }
   }
   @media screen and (max-width: 1500px){
      .slogan{
         .main-img{
            padding-right: 24px;
         }
      }
   }
   @media screen and (max-width: 1279px){
      .slogan{
         .main-img{
            width: 50%;
         }
         .text-wrap .icon{
            width: 15px;
         }
      }
      .vision{
         .main-img{
            max-width: 600px;
         }
      }
      .ci.container{
         .ci-wrap{
            .img-wrap{
               .ci-img{
                  max-width: 50%;
               }
            }
         }
      }
   }
   @media screen and (max-width: 767px){
      .slogan{
         .contents-wrap{
            display: block;
         }
         .main-img{
            width: 100%;
            max-width: 100%;
            padding-right: 0px;
            margin-bottom: 40px;
         }
         .text-wrap{
            padding-right: 32px;
         }
      }
      .ci.container{
         .ci-wrap{
            display: flex;
            flex-direction: column;
            .img-wrap{
               height: 160px;
               .ci-img{
                  width: auto;
                  max-width: 100%;
                  height: 50px;
               }
            }
         }
      }
   }
`

const SloganVision = () => {
   return (
      <SloganVisionWrap className='xl:pt-180 pt-80 xl:pb-120 pb-80'>
         <Helmet>
            <title>슬로건 및 비전 - 공간정원</title>
            <meta name="description" content="슬로건 및 비전" />
         </Helmet>
         <div className='slogan container'>
            <div>
               <Title02>슬로건 및 비전</Title02>
               <p className='text-center xl:leading-32 xl:text-20 text-13 xl:mt-32 mt-16'>공간정원이 추구하는 회사의 방향입니다.</p>
            </div>
            <div className='contents-wrap flex justify-between items-end xl:mt-32 mt-40'>
               <img className='main-img' src={image15} alt="" />
               <div className='pb-40'>
                  <div>
                     <p className='xl:leading-1em xl:text-18 text-16 text-pointColor01'>Slogan</p>
                     <h3 className='xl:text-32 text-20 font-bold xl:mt-16 mt-8'>당신의 공간을 가드닝 하세요.</h3>
                  </div>
                  <div className='line hide-text xl:mt-32 xl:mb-32 mt-24 mb-24'>line</div>
                  <div className='text-wrap'>
                     <img className='icon' src={iconQuotation01} alt="따옴표" />
                     <p className='xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-32 xl:mb-32 mt-16 mb-16'>
                        모든 공간이 정원이라면 모든 공간이 정원이라면,<br className='xl:block hidden' />
                        잡초가 자라고 정리가 안 되는 모습으로 그냥 두거나 방치하지 않을 것입니다.<br className='xl:block hidden' />
                        공간을 정리하고 스타일링하는 느낌의 가드닝을 표현하는 느낌과<br className='xl:block hidden' />
                        대표님의 성함을 차용하여 브랜드명을 네이밍 했습니다.
                     </p>
                     <img className='icon' src={iconQuotation02} alt="따옴표" />
                  </div>
               </div>
            </div>
         </div>
         <div className='vision xl:pt-80 pt-40 xl:pb-80 pb-40 xl:mt-80 mt-40 bg-pointColor04'>
            <div className='container'>
               <div>
                  <p className='text-center xl:leading-1em xl:text-18 text-16 text-pointColor01'>Vision</p>
                  <h3 className='text-center xl:text-32 text-20 font-bold xl:mt-16 mt-8'>공간정원의 비전</h3>
               </div>
               <img className='main-img xl:block hidden xl:mt-80 mt-40' src={image16} alt="공간정원의 비전" />
               <img className='main-img xl:hidden xl:mt-80 mt-40' src={image54} alt="공간정원의 비전" />
            </div>
         </div>
         <div className='ci container xl:pt-120 pt-80'>
            <div>
               <p className='text-center xl:leading-1em xl:text-18 text-16 text-pointColor01'>CI</p>
               <h3 className='text-center xl:text-32 text-20 font-bold xl:mt-16 mt-8'>공간정원 아이덴티티</h3>
               <p className='text-center xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-32 mt-24'>
                  공간을 정원처럼 가꿔드린다는 공간 가드닝이라는 의미와 정리전문가 이정원의 "정원"을 연관시켰습니다. <br className='xl:block hidden' />
                  정원과 어울리는 코지한 그린색상으로 전문적인 느낌을 살렸습니다.
               </p>
               <img className='w-full xl:mt-48 mt-40' src={image17} alt="CI" />
               <div className='ci-wrap grid gap-24 grid-cols-3 xl:mt-48 mt-24'>
                  <div className='item'>
                     <div className='img-wrap flex flex-col justify-center items-center'>
                        <img className='ci-img type01' src={simbol} alt="심볼" />
                     </div>
                     <p className='text-center leading-1em xl:text-20 xl:mt-24 mt-16'>심볼마크</p>
                  </div>
                  <div className='item'>
                     <div className='img-wrap flex flex-col justify-center items-center'>
                        <img className='ci-img type02' src={image18} alt="로고" />
                     </div>
                     <p className='text-center leading-1em xl:text-20 xl:mt-24 mt-16'>가로형</p>
                  </div>
                  <div className='item'>
                     <div className='img-wrap flex flex-col justify-center items-center'>
                        <img className='ci-img type03' src={image19} alt="로고" />
                     </div>
                     <p className='text-center leading-1em xl:text-20 xl:mt-24 mt-16'>세로형</p>
                  </div>
               </div>
            </div>
         </div>
      </SloganVisionWrap>
   )
}

export default SloganVision