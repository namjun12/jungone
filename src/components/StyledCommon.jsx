import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BtnLink = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 240px;
   height: 64px;
   font-size: 18px;
   font-weight: 700;
   margin-left: auto;
   margin-right: auto;
   margin: 48px auto 0px auto;
   background-color: var(--pointColor01);
`
export const BtnLink02 = styled(BtnLink)`
   border: 1px solid var(--subColor01);
   background-color: transparent;
   &:hover {
      border-color: var(--pointColor01);
      color: #fff;
      background-color: var(--pointColor01);
   }
`
export const BtnViewmore = styled(Link)`
   position: relative;
   display: flex;
   align-items: center;
   gap: 34px;
   width: fit-content;
   background-color: var(--bg-pointColor01);
   .xi-long-arrow-right {
      position: relative;
      z-index: 9;
      transition: all 0.2s;
      font-size: 14px;
      color: #fff;
   }
   &:hover .xi-long-arrow-right {
      padding-right: 15px;
   }

   &::after {
      content: '';
      display: block;
      clear: both;
      position: absolute;
      top: 50%;
      right: 0px;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      transition: all 0.25s;
      border-radius: 50%;
      background-color: var(--pointColor01);
   }
   &:hover::after {
      width: 100%;
      border-radius: 9999px;
   }
   .txt {
      z-index: 9;
      position: relative;
      transition: all 0.2s;
   }
   &:hover .txt {
      padding-left: 15px;
      color: #fff;
   }
`
export const Title01 = styled.h3`
   line-height: 52px;
   font-size: 40px; 
   font-weight: 700;
   &>strong{
      color: var(--pointColor01);
   }
`