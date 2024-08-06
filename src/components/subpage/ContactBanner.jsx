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
`

const ContactBanner = () => {
   return (
      <ContactBannerWrap>
         <strong className='xl:leading-48 text-center xl:text-32 font-bold text-white'>
            공간정원은 생활형태별, 사용자의 성향별, 생활 패턴별, 공간의 목적별로 <br className='xl:block hidden' />
            정리수납의 다양한 방법을 제공합니다.
         </strong>
         <Link className='btn flex justify-center items-center xl:mt-48 text-white bg-pointColor01'>문의하기</Link>
      </ContactBannerWrap>
   )
}

export default ContactBanner