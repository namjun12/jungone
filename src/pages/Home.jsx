import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Components
import { Title01, BtnLink, BtnLink02, BtnViewmore } from '../components/StyledCommon'

// Images
import { testImg, pattern01, image01, image02, image03, image04, icon01, icon02, icon03, icon04, icon05, icon06, icon07, icon08, icon09, icon10, icon11 } from '../components/Images'

// Styled
const Container = styled.div`
   .main-banner {
      height: 100vh;
      max-height: 1080px;
      .mb-swiper{
         height: 100%;
         &,
         & .swiper-wrapper,
         & .swiper-slide{
            height: 100%;
         }
         .contents-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            *{
               text-align: center;
               color: #fff;
            }
         }
         .mb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
         .pagination{
            z-index: 9;
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: fit-content;
            .swiper-pagination-bullet{
               opacity: 0.4;
               width: 4px;
               height: 24px;
               border-radius: 0px;
               margin: 0px 8px;
               background-color: #fff;
            }
            .swiper-pagination-bullet-active{
               opacity: 1;
            }
         }
         .navigation{
            z-index: 9;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: space-between;
            width: 100%;
            .btn {
               cursor: pointer;
               .line-wrap{
                  display: flex;
                  align-items: center;
                  .line{
                     height: 1px;
                     background-color: #fff;
                     &.short{
                        opacity: 1;
                        width: 72px;
                     }
                     &.long{
                        opacity: 0.5;
                        width: 128px;
                     }
                  }
               }
            }
         }
      }
   }
   .guard{
      gap: 35px;
      .main-image{
         width: 100%;
         max-width: 950px;
         margin-left: -300px;
      }
      .text-wrap{
         width: 100%;
         max-width: 690px;
      }
   }
`

const Home = () => {

   const isMobile = document.documentElement.clientWidth < 1280
   useEffect(() => {
      document.getElementById("header")?.classList.remove("on")

      return () => {
         document.getElementById("header")?.classList.add("on")
      }
   }, [])

   const data = {
      banner: [
         {
            title: "당신의 공간을 가드닝 하세요",
            sub_title: "공간정원은 깔끔하고 편리한 정리수납과 더불어 공간이 사람에게 미치는 영향까지 분석하여 전체적인 공간 리빌딩을 통해, 정리수납의 새로운 패러다임을 이끌고자 합니다.",
            image: testImg,
            image_type: 0,
            mobile_image: testImg,
            mobile_image_type: 0,
            path: "/test",
         },
         {
            title: "당신의 공간을 가드닝 하세요",
            sub_title: "공간정원은 깔끔하고 편리한 정리수납과 더불어 공간이 사람에게 미치는 영향까지 분석하여 전체적인 공간 리빌딩을 통해, 정리수납의 새로운 패러다임을 이끌고자 합니다.",
            image: testImg,
            image_type: 0,
            mobile_image: testImg,
            mobile_image_type: 0,
            path: null,
         }
      ],
   }

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollTop = document.documentElement.scrollTop;
         const header = document.getElementById("header")
         if (currentScrollTop > 0) {
            header?.classList.add("on")
         } else {
            header?.classList.remove("on")
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [])

   const consultingInfo = [
      {
         title: "상담문의",
         image: icon07,
         desc: "전화상담 <br/>1522-5482",
      },
      {
         title: "방문상담 컨설팅",
         image: icon08,
         desc: "방문을 통해 <br/>정리 진단서비스를 진행합니다.",
      },
      {
         title: "컨설팅 일정 협의",
         image: icon09,
         desc: "고객님과 일정 조율 후 <br/>계약을 진행합니다.",
      },
      {
         title: "컨설팅 서비스",
         image: icon10,
         desc: "사용자별 <br/>맞춤 컨설팅 서비스를 제공합니다.",
      },
      {
         title: "해피콜서비스",
         image: icon11,
         desc: "해피콜을 통해 서비스 품질과 고객 만족도를 향상 시킵니다",
      },
   ]

   return (
      <Container>
         <section className='main-banner'>
            <Swiper
               className="mb-swiper"
               pagination={{
                  el: '.pagination',
               }}
               navigation={{
                  nextEl: '.btn-next',
                  prevEl: '.btn-prev',
               }}
               loop={true}
               modules={[Pagination, Navigation]}
            >
               {data && data.banner.map((bannerInfo, index) => (
                  <SwiperSlide key={index}>
                     <div className='contents-wrap'>
                        <h2 className='xl:leading-80 xl:text-64 font-bold' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bannerInfo.title) }}></h2>
                        <p className='xl:leading-28 xl:text-17 font-light xl:mt-50' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bannerInfo.sub_title) }}></p>
                        {bannerInfo.path &&
                           <BtnLink to={bannerInfo.path}>
                              더 알아보기
                           </BtnLink>}
                     </div>
                     {isMobile ? (
                        <>
                           {bannerInfo.mobile_image_type === 0 ? (
                              <img className='mb-img' src={bannerInfo.mobile_image} alt="" />
                           ) : (
                              <video className='mb-img' muted autoPlay loop playsInline>
                                 <source src={bannerInfo.mobile_image} />
                              </video>
                           )}
                        </>
                     ) : (
                        <>
                           {bannerInfo.image_type === 0 ? (
                              <img className='mb-img' src={bannerInfo.image} alt="배너 이미지" />
                           ) : (
                              <video className='mb-img' muted autoPlay loop playsInline>
                                 <source src={bannerInfo.image} />
                              </video>
                           )}
                        </>
                     )}
                  </SwiperSlide>
               ))}
               <div className='pagination' />
               <div className='navigation'>
                  <div className="btn-prev btn">
                     <div className='line-wrap xl:pb-8'>
                        <div className='line long hide-text'>line1</div>
                        <div className='line short hide-text'>line2</div>
                     </div>
                     <p className='text text-right xl:text-16 xl:pr-16 text-white'>Prev</p>
                  </div>
                  <div className="btn-next btn">
                     <div className='line-wrap xl:pb-8'>
                        <div className='line short hide-text'>line1</div>
                        <div className='line long hide-text'>line2</div>
                     </div>
                     <p className='text text-left xl:text-16 xl:pl-16 text-white'>Next</p>
                  </div>
               </div>
            </Swiper>
         </section>
         <section className='container guard flex xl:pt-120'>
            <img className='main-image' src={image01} alt="가드닝" />
            <div className='text-wrap'>
               <Title01>
                  지금 당신의 공간을 <strong>가드닝</strong>하세요
               </Title01>
               <p className='xl:leading32 xl:text-20'>
                  만약 우리가 생활하는 모든 공간이 정원이라면,<br className='xl:block hidden' />
                  잡초가 자라고 화초가 시들어가는 모습을 그냥 두거나 방치하지 않을겁니다.<br className='xl:block hidden' />
                  화초에 물을 주고 사랑을 주며 가꾸는것처럼 우리의 생활공간도 가드닝 해주셔야 됩니다.<br className='xl:block hidden' />
                  <br className='xl:block hidden' />
                  공간정원은 소비자 개개인의 공간과 라이프스타일을 분석하여<br className='xl:block hidden' />
                  1:1 맞춤 정리서비스를 제공합니다.<br className='xl:block hidden' />
                  전문가의 제안을 통해 사용목적에 맞는 공간재구성과 공간의 효율을 높여드립니다.<br className='xl:block hidden' />
                  <br className='xl:block hidden' />
                  공간정원은 “공간정원 연구소”를 설립하여 정리수납 방법의 연구를 시작으로<br className='xl:block hidden' />
                  공간 스타일링,생활용품 및 가구의 제작까지 연구가 확대되고 있습니다.<br className='xl:block hidden' />
                  이를 바탕으로 국내 시장을 선도하고 나아가 세계시장으로의 진출을 기대하고 있습니다.<br className='xl:block hidden' />
                  <br className='xl:block hidden' />
                  공간정원은 “토탈홈케어”를 통하여 고객의 편의성을 고려한 맞춤 컨설팅을 진행합니다.<br className='xl:block hidden' />
                  정리 뿐만이 아니라 엄선된 협력업체들과 협업하여<br className='xl:block hidden' />
                  이사,정리,청소,전문시공을 원스톱 서비스로 받아볼수 있습니다.<br className='xl:block hidden' />
               </p>
            </div>
         </section>
         <section>
            <div>
               <div>
                  <p>CEO GREETING</p>
                  <h3>
                     안녕하세요, <span>공간정원 대표</span><br />
                     이정원입니다
                  </h3>
               </div>
               <p>
                  공간정원은 단순히 서비스의 차원을 넘어 사람을 위한 공간,
                  사람이 성장하는 공간을 만들어가는 공간 리빌딩 전문기업입니다.
                  편리하고 필요한 공간을 재구성하는 공간정리에서부터
                  공간이 돋보일수 있는 홈스타일링과 인테리어 컨설팅까지
                  “사람”이 중심이되는 맞춤 서비스를 연구하고 개발하여 서비스합니다.
                  나아가 우리의 미래인 꿈나무들을 위한 성장환경과
                  시니어를 위한 주거 환경의 개선에 이바지하고 국내를 넘어
                  세계의 각 문화와 생활환경에 맞는 모든 사람들의
                  더 나은 생활을 선도해 가겠습니다.
               </p>
               <BtnViewmore to="">
                  <p className="txt">View More</p>
                  <i className="xi-long-arrow-right"></i>
               </BtnViewmore>
            </div>
            <div>
               <div>
                  <img src={image03} alt="ceo" />
                  <img src={image02} alt="원 " />
               </div>
               <img src={pattern01} alt="배경 패턴" />
            </div>
         </section>
         <section>
            <div>
               <h3>
                  <span>세계로 뻗어나가는</span>
                  공간정원
               </h3>
               <p>
                  공간정원은 국내를 시작으로 다양한 문화권의 생활과 정리기법들을 연구 개발하여 세계인들의 생활과
                  삶의 질 향상에 기여하겠습니다
               </p>
            </div>
            <div>
               <div className='spot-wrap'>
                  <div className='circle'></div>
                  <p>
                     미국 진출
                     &#40;~2029&#41;
                  </p>
               </div>
               <div className='spot-wrap'>
                  <div className='circle'></div>
                  <p>
                     유럽진출
                     &#40;~2030&#41;
                  </p>
               </div>
               <div className='spot-wrap'>
                  <div className='circle'></div>
                  <p>
                     국내 15개 지사
                     설립예정 &#40;~2026&#41;
                  </p>
               </div>
            </div>
         </section>
         <section>
            <div>
               <h3>
                  <span>공간정원과 </span>함께하세요
               </h3>
               <p>
                  깔끔함에 국한된 기존 정리수납에서 벗어나 깔끔함과 더불어 편리함은 물론, 각 사용자 성향을 반영하여 집 전체의 리빌딩을 서비스합니다.
               </p>
            </div>
            <ul>
               <li>
                  <div>
                     <img src={icon04} alt="아이콘" />
                     <p>공간정리</p>
                  </div>
               </li>
               <li>
                  <div>
                     <img src={icon05} alt="아이콘" />
                     <p>원스톱 토탈서비스</p>
                  </div>
               </li>
               <li>
                  <div>
                     <img src={icon06} alt="아이콘" />
                     <p>공간스타일링</p>
                  </div>
               </li>
            </ul>
         </section>
         <section>
            <div>
               <h3>
                  <span>공간정원의 컨설팅</span>이 궁금하신가요?
               </h3>
               <p>사용자별 맞춤 공간컨설팅 상담을 공간정원에서 받아보세요.</p>
               <div>
                  <div></div>
                  <ul>
                     {consultingInfo.map((consultingInfo, index) => (
                        <li key={index}>
                           <h4>{consultingInfo.title}</h4>
                           <div>
                              <img src={consultingInfo.image} alt="아이콘" />
                              <p>{consultingInfo.desc}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <BtnLink02 to="">컨설팅 문의하기</BtnLink02>
         </section>
         <section>
            <div>
               <div>
                  <h3>
                     당신의 도전을 응원합니다
                     <span>공간정원 전문교육</span>으로
                     <span>전문가</span>가 될 수 있습니다
                  </h3>
                  <h4>가드너즈 아카데미</h4>
                  <p>
                     가드너즈 아카데미에서는
                     공간정원과 함께할 정리전문가를 양성합니다.
                  </p>
                  <BtnViewmore>
                     <p className="txt">자세히 보기</p>
                     <i className="xi-long-arrow-right"></i>
                  </BtnViewmore>
               </div>
               <div className='hide-text'>line</div>
               <div className='navigation'>
                  <div className="btn-prev">
                     <i className='xi-angle-left'></i>
                  </div>
                  <div className="btn-next">
                     <i className='xi-angle-right'></i>
                  </div>
               </div>
            </div>
            <Swiper>
               <SwiperSlide>
                  <img src="" alt="슬라이드 이미지" />
               </SwiperSlide>
            </Swiper>
         </section>
         <section>
            <div>
               <div>
                  <h3>
                     공간정원은
                     <span>이러한 인재</span>와 함께합니다
                  </h3>
               </div>
               <ul>
                  <li>
                     <div className='flex justify-center items-center bg-pointColor01'>
                        <img src={icon01} alt="아이콘" />
                     </div>
                     <h4>전문성을 갖춘 인재</h4>
                     <p>
                        자신의 분야에서 최고가 되기 위해
                        끊임없이 학습하고 역량을 키우는 인재
                     </p>
                  </li>
                  <li>
                     <div className='flex justify-center items-center bg-pointColor01'>
                        <img src={icon02} alt="아이콘" />
                     </div>
                     <h4>소통하고 협력하는 인재</h4>
                     <p>
                        구성원의 배려와 신뢰를 바탕으로
                        서로를 존중하고 협력하는 인재
                     </p>
                  </li>
                  <li>
                     <div className='flex justify-center items-center bg-pointColor01'>
                        <img src={icon03} alt="아이콘" />
                     </div>
                     <h4>열정적으로 도전하는 인재</h4>
                     <p>
                        창의적 사고로 변화와 도전을
                        두려워하지 않는 열정적인 인재
                     </p>
                  </li>
               </ul>
            </div>
            <img src={image04} alt="사람들" />
         </section>
         <section>
            <div>
               <h3>
                  영상으로 만나는
                  <span>공간정원</span>
               </h3>
               <p>공간정리를 통해 정리시스템을 구축하고 사용자별 라이프스타일을 반영하여 공간 전체의 리빌딩을 서비스합니다</p>
            </div>
            <Swiper>
               <SwiperSlide>
                  <img src={testImg} alt="썸네일" />
                  <h4>사람들의 삶을 바꾸는 마법의 손! 정리전문가 이정원!</h4>
                  <p>2024.10.10</p>
               </SwiperSlide>
               <div className="navigation">
                  <div className="btn-prev"></div>
                  <div className="btn-next"></div>
               </div>
               <div className="pagination" />
            </Swiper>
         </section>
         <section>
            <div>
               <h3>공간정원을 경험해본, 고객님 후기</h3>
               <Swiper>
                  <SwiperSlide>
                     <img src="" alt="" />
                     <h4>이정원 정리수납은 차원이 다릅니다!</h4>
                     <p>
                        수납장이 많아도 물건이 너무 많아서 주방이 너무 어지러워서
                        주방에 갈 엄두가 나지 않더라구요~ㅠㅠ
                        그러던 찰나에 공간정원 정리서비스를 알게 되었고 고민없이 신청하게 되었습니다~! 상담받는 내내 친절하게 응대해주시고
                        어떤식으로 정리해야 효율적인지 원인과 방법을 전부 알려주셨어요~^^ 확실히 전문가의 컨설팅을 받고나니 전보다 정리하기 수월해지고 지금까지도 깨끗한 주방 유지중이랍니다! 고민하시는 분들 전부 후회 없으실거에요!
                     </p>
                     <div>
                        <p>부분 정리수납</p>
                        <p>30평대</p>
                     </div>
                  </SwiperSlide>
                  <div className="navigation">
                     <div className="btn-prev"></div>
                     <div className="btn-next"></div>
                  </div>
                  <div className="pagination" />
               </Swiper>
               <BtnLink02>후기 더 보러가기</BtnLink02>
            </div>
         </section>
      </Container>
   )
}

export default Home;