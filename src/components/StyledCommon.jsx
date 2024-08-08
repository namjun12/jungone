import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Images
import { simbol } from './Images'

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
   background-color: var(--pointColor01);
   @media screen and (max-width: 1280px){
      width: 155px;
      height: 40px;
      font-size: 13px;
   }
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
   @media screen and (max-width:1280px){
      font-size: 12px;
      gap: 24px;
      &::after{
         width: 30px;
         height: 30px;
      }
      .xi-long-arrow-right{
         font-size: 12px;
      }
   }
`
export const Title01 = styled.h3`
   line-height: 52px;
   font-size: 40px; 
   font-weight: 700;
   &>strong{
      color: var(--pointColor01);
   }
   @media screen and (max-width:1280px){
      line-height: 32px;
      font-size: 24px;
   }
`
export const Title02 = styled.h3`
   line-height: 1em;
   text-align: center;
   font-size: 40px;
   font-weight: bold;
   &::before{
      content: '';
      display: block;
      clear: both;
      width: 25px;
      height: 25px;
      margin: 0px auto 8px auto;
      background-image: url(${simbol});
      background-size: cover;
   }
`
export const StrokeTitle = styled.strong`
   opacity: 0.4;
   display: block;
   line-height: 1em;
   font-size: 100px;
   font-weight: 700;
   -webkit-text-stroke: 1px var(--pointColor01);
   color: transparent;
   @media screen and (max-width:1280px){
      font-size: 40px;
   }
`
export const SubBanner01 = styled.div`
   height: 330px;
   padding: 0px 100px;
   background-size: cover;
   background-position: center center;
   .icon{
      width: auto;
      height: 22px;
   }
`
export const Desc01 = styled.p`
   position: relative;
   &::after{
      content: '';
      display: block;
      clear: both;
      z-index: 9;
      position: absolute;
      top: -24px;
      left: 50%;
      transform: translate(-50%, -100%);
      width: 2px;
      height: 100px;
      background-color: var(--subColor05);
   }
   .point{
      position: relative;
      &::after{
         content: '';
         display: block;
         clear: both;
         z-index: -9;
         position: absolute;
         top: 5px;
         left: 0px;
         width: 100%;
         height: 21px;
         background-color: var(--pointColor03);
      }
   }
`