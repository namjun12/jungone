import React from 'react'

// Components
import { SpaceLab01 } from '../../components/CommonUi'
import { Title02 } from '../../components/StyledCommon'

// Images
import { image36, pattern02 } from '../../components/Images'
import image01 from '../../images/space-lab/category01.webp'
import image02 from '../../images/space-lab/category02.webp'
import image03 from '../../images/space-lab/category03.webp'
import image04 from '../../images/space-lab/category04.webp'
import image05 from '../../images/space-lab/category05.webp'
import image06 from '../../images/space-lab/category06.webp'
import image07 from '../../images/space-lab/category07.webp'
import image08 from '../../images/space-lab/category08.webp'
import styled from 'styled-components'
import DOMPurify from 'dompurify'

// Style
const CategoryWrap = styled.div`
   .category{
      .item{
         &:nth-of-type(2n){
            .main-img{
               order: 1;
            }
            .text-wrap{
               order: 0;
               *{
                  text-align: right;
               }
            }
            .bg-pattern{
               margin-left: 0px;
               margin-right: auto;
            }
         }
         .main-img{
            max-width: 755px;
         }
         .text-wrap{
            .bg-pattern{
               width: 95px;
               height: auto;
               margin-left: auto;
            }
            .title{
               &>.point{
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
                     height: 21px;
                     background-color: var(--pointColor03);
                  }
               }
            }
         }
      }
   }
`

const GardeningResearch = () => {

   const SpaceLab01Info = {
      mainImg: image36,
      subTitle: "Space Organization Research",
      title: "공간 가드닝 연구",
      desc: `
      다년간의 정리수납 연구를 통해 사용자 개개인의 생활패턴과 성향에 맞는 편리하고 
      세련된 환경 구성법들을 개발하고 발전시켜 나갑니다.
      나아가 사용자에게 꼭 필요한 공간의 기능들을 부여하여 
      성장과 발전을 돕는 공간으로 만드는 정리수납 방법들을 지속 연구 개발합니다. 
      이제는 정리수납의 차원 넘어 사용자에게 올바르고 기능적이며 
      성장하는 환경으로의 공간을 가드닝 해야 합니다.
    `,
   }
   const categoryInfo = [
      {
         img: image01,
         title: "<span class='point'>아이</span>를 위한 공간 가드닝",
         desc: `
            유아기에서부터 성장기, 학년기 아이들의 생활 환경을 진단하고 <br class='xl:block hidden'/>
            상황이나 나이대별로 필요한 기능들을 부여하여 올바른 성장환경으로 공간을 리빌딩 하는 서비스입니다.<br class='xl:block hidden'/>
            아이의 “성장” 환경에서 가장 중요한 안정감/집중력/창의력의 조화비율은 성장단계 아이의 성향별로 <br class='xl:block hidden'/>
            차별화 되어야 올바른 성장환경을 만들수 있습니다.
         `,
      },
      {
         img: image02,
         title: "시니어를 위한 공간 가드닝",
         desc: `
            부모님과 어른들을 위한 공간구성 및 정리법은 젊은이를 위한 정리법과 분명히 달라야 합니다 
            편리함에 초점을 두고 현재의 건강 상태에 따라 차별화되는 맞춤 공간과 
            특수한 기능의 공간으로 재구성 해드리는 서비스 입니다 

            *특수기능의 공간 : 시니어의 건강이나 신체 상태에따라 국가에서 지원하는 생활 보조 설비, 기구들을 반영한 공간 구성방법
            필요시 국가에서 지원되는 생활보조 설비나 기구중 적합한 항목들을 알려드리고 혜택을 받을수 있게 도와드립니다
            (항목별로 50~100%의 국가지원)
         `,
      },
      {
         img: image03,
         title: "휴식 에너지형 공간 가드닝",
         desc: `
            정적인 공간에 비움의 인테리어를 통한 편리하고 안정된 환경으로 공간을 구성 합니다
            주로 직장이나 외부에서 에너지를 많이 사용하는 분들께 적합한 환경으로 공간상의 자극을 최소화하고 
            스트레스 유발을 최소화하며 휴식 기능을 강화한 환경으로 만들어 드리는 정리 서비스 입니다
         `,
      },
      {
         img: image04,
         title: "활력 에너지형 공간 가드닝",
         desc: `
            사용자의 취향이나 니즈에 따라 동적이고 특징있는 공간으로 구성해드리는 서비스입니다
            주로 1인가구나 신혼부부처럼 집에서 취미를 즐기는 시간이 많은분들께 적합한 서비스로 
            개인 및 가족의 취향이나 니즈에 따라 다양한 형태로 공간을 구성해 드리는 맞춤 정리 서비스 입니다  
         `,
      },
      {
         img: image05,
         title: "복합형(휴식형+취미형) 공간 가드닝",
         desc: `
            사용자의 디테일한 생활 패턴과 취향에 맞춰 휴식과 활력을 조화롭게 구성하며, 
            사용자에게 가장 잘맞는 이상적인 공간으로 정리해 드리는 서비스 입니다.
         `,
      },
      {
         img: image06,
         title: "신혼부부를 위한 공간 가드닝",
         desc: `
            21세기 부부의 형태는 다양합니다.
            맞벌이 부부를 위한 공간부터, 다자녀를 위한 공간까지
            효율적으로 공간활용을 구상해드리고 있습니다.
         `,
      },
      {
         img: image07,
         title: "1인 가구를 위한 공간 가드닝",
         desc: `
            1인가구를 위한 맞춤 공간 가드닝 서비스입니다.
            사용자의 생활패턴이나 좁은 공간에서의 효율적인 공간활용을 구상해드립니다.
         `,
      },
      {
         img: image08,
         title: "공간별 사용자 맞춤 가드닝",
         desc: `
            사용자의 취향이나 생활패턴에 따라 맞춤형으로 구성해드리는 서비스입니다.
            복층, 반려동물 등 다양한 상황에서 맞는 형태로 공간을 구성해드리는 맞춤 가드닝 서비스입니다. 
         `,
      },
   ]

   return (
      <CategoryWrap className='container'>
         <SpaceLab01
            info={SpaceLab01Info}
         />
         <div className='category xl:mt-120'>
            <Title02>가드닝 연구 분야</Title02>
            {categoryInfo &&
               <ul className='xl:mt-80'>
                  {categoryInfo.map((categoryInfo, index) => (
                     <li className='item flex xl:gap-32' key={index}>
                        <img className='main-img w-full' src={categoryInfo.img} alt="" />
                        <div className='text-wrap'>
                           <img className='bg-pattern xl:mb-32' src={pattern02} alt="배경 패턴" />
                           <p className='leading-1em xl:text-48 font-thin text-pointColor01'>0{index + 1}</p>
                           <p
                              className='title xl:leading-1em xl:text-32 font-bold xl:mt-32'
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryInfo.title) }}
                           />
                           <p
                              className='xl:leading-24 xl:text-16 xl:mt-24 text-subColor03'
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryInfo.desc) }}
                           />
                        </div>
                     </li>
                  ))}
               </ul>
            }
         </div>
      </CategoryWrap>
   )
}

export default GardeningResearch;