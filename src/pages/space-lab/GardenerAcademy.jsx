import React from 'react'

// Components
import { SpaceLab01 } from '../../components/CommonUi'
import { Title02 } from '../../components/StyledCommon'

// Images
import { image45, image46, image47, image48, image49, image50, image51, image52 } from '../../components/Images'
import DOMPurify from 'dompurify'
import styled from 'styled-components'

// Styles
const GardenerAcademyWrap = styled.div`
   .process{
      .item{
         height: 320px;
         border-radius: 8px;
         padding: 40px 32px;
         background-size: cover;
         background-position: center center;
         .text{

         }
      }
   }
   .expert{
      border-top: 1px solid var(--subColor04);
      .item{
         &:first-of-type{
            margin-top: 0px;
         }
         .text-wrap{
            .desc{
               width: 100%;
               max-width: 930px;
            }
         }
      }
   }
`

const GardenerAcademy = () => {

   const SpaceLab01Info = {
      mainImg: image45,
      subTitle: "Gardener Academy",
      title: "가드너즈 아카데미",
      desc: `정리수납 교양 클레스와 실무에 최적화된 전문가 자격과정 아카데미에서 
           여러분의 새로운 미래를 이끌어 드립니다.
           자격증 취득만이 목적이 아닌 실제 정리수납 현장에서 서비스를 진행할 수 있도록 
           실무역량을 성장시키는 인큐베이팅 교육을 진행합니다.`,
   }
   const processItems = [
      {
         text: "정리수납에 대해 <br class='xl:block hidden'/>쉽게 접근할 수 있게 도와드립니다",
         bgImg: image46,
      },
      {
         text: "실무에 최적화된 전문가 과정에서 <br class='xl:block hidden'/>여러분의 새로운 미래를 이끌어 드립니다",
         bgImg: image47,
      },
      {
         text: "실제 현장에서 서비스를 진행할 수 있도록 <br class='xl:block hidden'/>인큐베이팅 교육을 진행합니다 ",
         bgImg: image48,
      },
   ]
   const expertItems = [
      {
         title: "정리수납 전문가 1급/2급",
         desc: "정리수납 전문가 2급: 정리에 대한 이론과 간단한 실습으로 “우리집 정리 전문가” 과정을 수강합니다. <br class='xl:block hidden'/>정리수납 전문가 1급:정리수납 전문가로서 활동하기 위한 탄탄한 이론과 실제 현장실습으로 “고객집 정리 전문가” 과정을 수강합니다.",
         images: [
            image49,
            image50,
         ],
      },
      {
         title: "정리수납 강사 과정",
         desc: "정리수납의 이론을 실제 현장에서 충분한 경험을 바탕으로 정리에 대한 교육(강의, 강좌)수강과 현장 경력 6개월 이상 <br class='xl:block hidden'/>(컨설팅 50회 이상) 의 경력자에 한하여 전문 강사과정 응시할 수 있습니다.",
         images: [
            image51,
            image52,
         ],
      },
   ]

   return (
      <GardenerAcademyWrap className='xl:pb-120'>
         <SpaceLab01
            info={SpaceLab01Info}
         />
         <div className='process container xl:pt-120'>
            <div>
               <Title02>정리수납 전문가 자격과정</Title02>
               <p className='xl:leading-26 text-center xl:text-18 xl:mt-32'>자격증 취득만이 목적이 아닌 실제 정리수납 현장에서 서비스를 진행할수 있도록 실무역량을 성장시키는 인큐베이팅 교육을 진행합니다 </p>
            </div>
            <ul className='items-wrap grid grid-cols-3 xl:gap-24 xl:mt-48'>
               {processItems.map((processItems, index) => (
                  <li
                     className='item flex items-end'
                     style={{ backgroundImage: `url(${processItems.bgImg})` }}
                     key={index}
                  >
                     <p
                        className='text xl:leading-36 xl:text-24 font-bold text-white'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processItems.text) }}
                     />
                  </li>
               ))}
            </ul>
         </div>
         <div className='expert container xl:pt-120 xl:mt-120'>
            {expertItems.map((expertItems, index) => (
               <div className='item xl:mt-80' key={index}>
                  <div className='text-wrap flex justify-between'>
                     <strong className='leading-1em xl:text-40 font-bold'>{expertItems.title}</strong>
                     <p
                        className='desc xl:leading-26 xl:text-18 text-subColor03'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(expertItems.desc) }}
                     />
                  </div>
                  <div className='grid grid-cols-2 xl:gap-40 xl:mt-40'>
                     {expertItems.images.map((images, index) => (
                        <img className='w-full' src={images} alt="정리수납 전문가 1급/2급" key={index} />
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </GardenerAcademyWrap>
   )
}

export default GardenerAcademy