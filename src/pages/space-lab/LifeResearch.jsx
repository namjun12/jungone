import React from 'react'
import styled from 'styled-components';
import { SpaceLab01 } from '../../components/CommonUi';

// Images
import { pattern02, image37, iconQuotation01, iconQuotation02, image38, image39, image40 } from '../../components/Images';
import { Title02 } from '../../components/StyledCommon';
import DOMPurify from 'dompurify';

const LifeResearchWrap = styled.div`
   .items-wrap{
      .item{
         border-bottom: 1px solid var(--subColor05);
         background-image: url(${pattern02});
         background-position: top 24px left;
         background-size: 95px auto;
         &:first-of-type{
            border-top: 1px solid var(--subColor05);
         }
         &:nth-of-type(2n){
            background-position: top 24px right;
            .text-wrap{
               order: 1;
            }
            .main-img{
               order: 0;
            }
         }
         .text-wrap{
            width: 100%;
            max-width: 770px;
            *{
               text-align: center;
            }
            .quot{
               width: 28px;
               height: auto;
               margin-left: auto;
               margin-right: auto;
            }
            .title>.point{
               position: relative;
               color: var(--pointColor01);
               &::before{
                  content: '';
                  display: block;
                  clear: both;
                  z-index: -9;
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  transform: translateY(80%);
                  width: 100%;
                  height: 17px;
                  background-color: var(--pointColor04);
               }
            }
         }
         .main-img{
            width: 100%;
            max-width: 700px;
         }
      }
   }
`

const LifeResearch = () => {

   const SpaceLab01Info = {
      mainImg: image37,
      subTitle: "Life Object Research",
      title: "라이프 오브제 연구",
      desc: `
      발전하는 정리수납의 기법이 반영되어 더 쉽고, 더 깔끔하며, 더 오랫동안
      사용할수 있는 실용적인 용품과 가구들을 연구합니다.
      정리수납 방법의 발전에 이바지할 수 있는 라이프 오브제로 
      공간정원은 여러분의 생활과 삶의 변화에 앞장서고자 합니다.
  `,
   }
   const lifeItems = [
      {
         title: "새로운 변화, 새로운 시작, 인생의 즐거움을 <br class='xl:block hidden' />공간정원의 <span class='point'>라이프 오브제</span>가 선사합니다.",
         desc: `라이프 오브제의 R&D는 정리분야 국내 최고의 전문가 <br class='xl:block hidden' />
                이정원대표를 포스트로 공간정원 연구소가 함께 합니다. <br class='xl:block hidden' />
                정리수납 방법의 발전에 이바지할 수 있는 라이프 오브제로 <br class='xl:block hidden' />
                여러분의 생활과 삶의 변화에 앞장서겠습니다`,
         img: image38,
      },
      {
         title: "우리의 생활에 오랫동안 도움이 되어야 하고, <br class='xl:block hidden' />더 편리하며 모던한 디자인의 <span class='point'>생활용품들을 개발</span>합니다.",
         desc: `생활이 변화하는 그 과정동안 더 편리하고, 더 튼튼하며, 더 깔끔하게 <br class='xl:block hidden' />
                우리의 생활을 가드닝 할 수 있어야 합니다.<br class='xl:block hidden' />
                튼튼하고 오랫동안 함께할 수 있는 제품을 만들고자 합니다.`,
         img: image39,
      },
      {
         title: "우리 생활을 더 편리하고 <br class='xl:block hidden' />윤택하게 만드는 <span class='point'>가구를 개발</span>합니다 ",
         desc: `이제는 가구 본연의 역할에 더해 더 편리한 기능과 옵션들을 선택할 수 있어야 합니다.<br class='xl:block hidden' />
                나와 우리 가족들을 가드닝해주며<br class='xl:block hidden' />
                쓸모있고 편리한 제품으로 만들고자 합니다.`,
         img: image40,
      },
   ]

   return (
      <LifeResearchWrap className='xl:pb-120'>
         <SpaceLab01
            info={SpaceLab01Info}
         />
         <div className='container xl:pt-120'>
            <Title02>더 나은 삶을 선사하는 라이프 오브제</Title02>
            <ul className='items-wrap xl:mt-40'>
               {lifeItems.map((lifeItems, index) => (
                  <li className='item flex justify-between items-center xl:pt-24 xl:pb-24' key={index}>
                     <div className='text-wrap'>
                        <div className='title-wrap'>
                           <img className='quot' src={iconQuotation01} alt="따옴표" />
                           <p
                              className='title xl:leading-36 xl:text-24 font-bold xl:mt-24 xl:mb-24'
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lifeItems.title) }}
                           />
                           <img className='quot' src={iconQuotation02} alt="따옴표" />
                        </div>
                        <p
                           className='xl:leading-26 xl:text-18 xl:mt-42 text-subColor03'
                           dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lifeItems.desc) }}
                        />
                     </div>
                     <img className='main-img' src={lifeItems.img} alt="더 나은 삶을 선사하는 라이프 오브제" />
                  </li>
               ))}
            </ul>
         </div>
      </LifeResearchWrap>
   )
}

export default LifeResearch;