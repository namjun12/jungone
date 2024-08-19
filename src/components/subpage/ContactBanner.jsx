import React from 'react'
import styled from 'styled-components'

// Images
import { contactBanner } from '../Images'
import { Link } from 'react-router-dom'

const ContactBannerWrap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 350px;
   background-image: url(${contactBanner});
   background-size: cover;
   .btn{
      width: 200px;
      height: 53px;
      border-radius: 9999px;
   }
   @media screen and (max-width:1279px){
      height: 265px;
      .btn{
         width: auto;
         height: auto;
         padding: 8px 24px;
      }
   }
`

const ContactBanner = () => {
   return (
      <ContactBannerWrap>
         <p className='xl:leading-48 ledaing-32 text-center xl:text-32 text-18 pl-12 pr-12 text-white'>
            공간정원은 <span className='font-semibold'>사용자의 성향과 패턴</span>에 맞춰 <br className='xl:block hidden' />공간의 목적별로 <span className='font-semibold'>정리수납의 다양한 방법을 제공</span>합니다
         </p>
         <Link to="/community/contact" className='btn flex justify-center items-center leading-1em xl:text-16 text-14 xl:mt-48 mt-32 text-white bg-pointColor01'>문의하기</Link>
      </ContactBannerWrap>
   )
}

export default ContactBanner;