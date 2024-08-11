import React from 'react'
import styled from 'styled-components'
import DOMPurify from 'dompurify'

// Components
import { Title01, Title02 } from '../../components/StyledCommon'

// Images
import { icon12, icon13, icon14, image20, image53 } from '../../components/Images'

const PeopleWrap = styled.div`
   .items-wrap{
      .item{
         overflow: hidden;
         border: 1px solid var(--subColor05);
         .icon{
            width: auto;
            height: 85px;
         }
         .num{
            position: absolute;
            top: -20px;
            right: 24px;
         }
      }
   }
   .process{
      .main-img{
         width: 100%;
         max-width: 1280px;
         height: auto;
         margin-left: auto;
         margin-right: auto;
         &.mo{
            display: none;
         }
      }
   }
   @media screen and (max-width: 1279px){
      .items-wrap{
         .item{
            padding: 24px;
            .icon{
               height: 50px;
            }
            .num{
               top: -15px;
            }
         }
      }
   }
   @media screen and (max-width:767px){
      .items-wrap{
         display: flex;
         flex-direction: column;
         .item{
            display: flex;
            align-items: center;
            height: 205px;
         }
      }
      .process{
         .main-img{
            &.pc{
               display: none;
            }
            &.mo{
               display: block;
               width: 200px;
            }
         }
      }
   }
`

const People = () => {
   const peopleInfo = [
      {
         image: icon12,
         title: "소통과 협력",
         desc: "구성원의 배려와 신뢰를 바탕으로 <br class='xl:block hidden'/>적극적으로 소통하고 협업하여 목표달성에 기여함",
      },
      {
         image: icon13,
         title: "도전과 열정",
         desc: "긍정적인 생각을 가지고 끊임없이 도전하여 <br class='xl:block hidden'/>일에 최선을 다함",
      },
      {
         image: icon14,
         title: "전문성",
         desc: "프로의식을 가지고 자기개발을 통해 발전하며 <br class='xl:block hidden'/>책임감있게 엄무를 완수함",
      },
   ]
   return (
      <PeopleWrap className='container xl:pt-180 pt-80 xl:mb-120 mb-80'>
         <div>
            <div>
               <Title02>인재상</Title02>
               <p className='text-center xl:leading-32 leading-18 xl:text-20 text-13 xl:mt-32 mt-16'>공간정원은 열린 마음과 노력하는 자세를 통해 함께 성장할 인재를 기다리고 있습니다.</p>
            </div>
            <ul className='items-wrap grid grid-cols-3 xl:gap-24 gap-16 xl:mt-80 mt-32'>
               {peopleInfo.map((peopleInfo, index) => (
                  <li className='item relative xl:p-40' key={index}>
                     <div>
                        <img className='icon' src={peopleInfo.image} alt="아이콘" />
                        <h4 className='leading-1em xl:text-24 text-16 font-medium xl:mt-32 mt-24'>{peopleInfo.title}</h4>
                        <p
                           className='xl:leading-24 leading-18 xl:text-16 text-13 xl:mt-24 mt-16'
                           dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(peopleInfo.desc) }}
                        />
                     </div>
                     <span className='num leading-1em xl:text-100 text-70 font-bold text-pointColor04'>0{index + 1}</span>
                  </li>
               ))}
            </ul>
         </div>
         <div className='process xl:mt-120 mt-80'>
            <div>
               <p className='leading-1em text-center xl:text-18 text-16 text-pointColor01'>채용 과정</p>
               <Title01 className='text-center xl:mt-16 mt-8'>공간정원과 함께 할 인재를 기다립니다.</Title01>
            </div>
            <img className='pc main-img xl:mt-48 mt-40' src={image20} alt="채용 과정" />
            <img className='mo main-img mt-40' src={image53} alt="채용 과정" />
         </div>
      </PeopleWrap>
   )
}

export default People