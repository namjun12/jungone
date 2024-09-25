import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

// styles
const Container = styled.div`
   .top_head_wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid var(--subColor01);
      padding-bottom: 32px;
      margin-bottom: 40px;
   }
   .top_head_wrap .txt .point {
      color: #ff0400;
   }
   .inquire_from .item_01 {
      display: flex;
      gap: 40px;
   }
   .inquire_from .input_wrap {
      width: 50%;
      margin-bottom: 32px;
   }
   .inquire_from .input_wrap.message_wrap {
      width: 100%;
      border-bottom: 1px solid #c5c5c5;
      padding-bottom: 40px;
      margin-bottom: 40px;
   }
   .inquire_from .input_wrap input,
   .inquire_from .input_wrap textarea {
      display: block;
      /* width: 700px; */
      width: 100%;
      height: 52px;
      border: 1px solid var(--subColor08);
      border-radius: 4px;
      padding: 16px;
      margin-top: 16px;
   }
   .inquire_from .input_wrap.message_wrap textarea {
      width: 100%;
      height: 250px;
   }
   .inquire_from .input_wrap .point {
      color: #a62624;
   }
   .inquire_from .input_wrap.upload_wrap {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 32px;
      border-bottom: 1px solid #c5c5c5;
   }
   .inquire_from .input_wrap .label_upload {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 148px;
      height: 52px;
      color: #fff;
      background-color: #7d7d7d;
   }
   .inquire_from .input_wrap .input_upload {
      display: none;
   }
   .privacy_wrap .info_wrap {
      padding: 32px;
      background-color: #f9f9f9;
   }
   .privacy_wrap .info_wrap .list_wrap .item {
      display: flex;
      gap: 45px;
   }
   .privacy_wrap .info_wrap .list_wrap .item .tit,
   .privacy_wrap .info_wrap .list_wrap .item .txt {
      color: #999;
   }
   .privacy_wrap .info_wrap .list_wrap .item .tit {
      width: 105px;
   }
   .btn_submit {
      display: block;
      width: 870px;
      height: 70px;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      background-color: var(--subColor02);
   }
   .privacy_agree_wrap {
      display: flex;
      align-items: center;
      gap: 8px;
   }
   input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid #bfbfbf;
      border-radius: 0px;
      position: relative;
   }
   input[type="checkbox"]:checked {
      -webkit-appearance: checkbox;
      -moz-appearance: checkbox;
      appearance: checkbox;
   }
   @media screen and (max-width:1279px){
      .top_head_wrap {
         padding-bottom: 16px;
         margin-bottom: 24px;
      }

      .inquire_from .item_01 {
         display: block;
      }
      .inquire_from .input_wrap{
         width: 100%;
         input,textarea{
            width: 100%;
            font-size: 13px;
         }
      }
      .inquire_from .input_wrap input {
         height: 48px;
      }

      .inquire_from .input_wrap.message_wrap textarea {
         height: 175px;
      }

      .inquire_from .input_wrap .label_upload {
         height: 40px;
      }

      .privacy_wrap .info_wrap {
         padding: 24px 16px;
         margin-bottom: 24px;
      }

      .inquire_from .input_wrap.upload_wrap {
         padding-bottom: 24px;
         margin-bottom: 24px;
      }

      .btn_submit {
         width: 100%;
         height: 58px;
      }
   }
`

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      contact: '',
      inquiry_category: '',
      email: '',
      message: '',
      agreement: false,
   });

   const handleChange = (e) => {
      const { name, value, type } = e.target;

      if (type === 'checkbox') {
         const { checked } = e.target;
         setFormData(prevFormData => ({
            ...prevFormData,
            [name]: checked,
         }));
      } else {
         setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
         }));
      }
   };


   const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.agreement) {
         alert('개인정보 수집 및 이용에 동의해야 합니다.');
         return;
      }

      const fetchData = async () => {
         try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/inquiry`, formData)
            if (response.data.success === true) {
               alert('문의가 등록되었습니다.');
               window.location.reload();
            } else {
               alert('문의 등록에 실패했습니다.');
            }
         } catch (error) {
            console.log(error)
         }
      }
      fetchData();
   };

   return (
      <Container className="contact_inquire container xl:pt-120 xl:pb-120 pt-80 pb-80">
         <Helmet>
            <title>문의하기 - 공간정원</title>
            <meta name="description" content="문의하기" />
         </Helmet>
         <div className="top_head_wrap">
            <h2 className="leading-1em xl:text-42 font-bold">문의하기</h2>
            <p className="txt xl:block hidden">
               <span className="point">*</span> 필수 입력 항목
            </p>
         </div>
         <form onSubmit={handleSubmit} className="inquire_from">
            <fieldset>
               <legend className="hide">문의내용 작성</legend>
               <div className="item_01">
                  <div className="name_wrap input_wrap">
                     <label htmlFor="name" className="xl:mb-16 mb-8 xl:text-20 text-13 font-bold">
                        성함 <strong className="point">*</strong>
                     </label>
                     <input
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                        type="text"
                        placeholder="성함을 입력해주세요."
                        required
                     />
                  </div>
                  <div className="phone_wrap input_wrap">
                     <label htmlFor="phone" className="xl:mb-16 mb-8 xl:text-20 text-13 font-bold">
                        연락처 <strong className="point">*</strong>
                     </label>
                     <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        id="phone"
                        placeholder="연락처를 입력해주세요."
                        required
                     />
                  </div>
               </div>
               <div className="item_01">
                  <div className="email_wrap input_wrap">
                     <label htmlFor="email" className="xl:mb-16 mb-8 xl:text-20 text-13 font-bold">
                        이메일
                     </label>
                     <input
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        id="email"
                        type="email"
                        placeholder="이메일을 입력해주세요."
                     />
                  </div>
                  <div className="company_wrap input_wrap">
                     <label htmlFor="inquiry_category" className="xl:mb-16 mb-8 xl:text-20 text-13 font-bold">
                        상담분야
                     </label>
                     <input
                        value={formData.inquiry_category}
                        onChange={handleChange}
                        name="inquiry_category"
                        id="inquiry_category"
                        type="inquiry_category"
                        placeholder="상담분야를 입력해주세요."
                     />
                  </div>
               </div>
               <div className="message_wrap input_wrap">
                  <label htmlFor="content" className="xl:mb-16 mb-8 xl:text-20 text-13 font-bold">
                     문의내용
                  </label>
                  <textarea
                     value={formData.message}
                     onChange={handleChange}
                     name="message"
                     id="content"
                     placeholder="문의내용을 기재해주세요."
                  />
               </div>
               <div className="privacy_wrap">
                  <p className="xl:text-20 text-13 font-bold xl:mb-16 mb-8">개인정보수집 동의</p>
                  <div className="info_wrap xl:mb-16 mb-8">
                     <p className="xl:text-18 text-14 font-medium xl:mb-24 mb-16">개인정보 수집 • 이용 내역</p>
                     <ul className="list_wrap">
                        <li className="item xl:mb-16 mb-8">
                           <p className="tit xl:text-16 text-12 font-light xl:block hidden">항목 (필수항목)</p>
                           <p className="txt xl:text-16 text-12 font-light xl:block hidden">성명, 연락처, 이메일</p>
                        </li>
                        <li className="item xl:mb-16 mb-8">
                           <p className="tit xl:text-16 text-12 font-light xl:block hidden">수집 • 이용 목적</p>
                           <p className="txt md:leading-26 leading-18 xl:text-16 text-12 font-light">고객문의는 최소한의 개인정보만을 수집합니다. 상담내용확인 및 상담결과 회신 서비스 제공을 목적으로 개인정보 수집 이용 동의를 구합니다.</p>
                        </li>
                        <li className="item">
                           <p className="tit xl:text-16 text-12 font-light xl:block hidden">보유기간</p>
                           <p className="txt md:leading-26 leading-18 xl:text-16 text-12 font-light">개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. (단, 타 법령에 의해 보존의무가 있는 경우 법령이 지정한 기간 동안 보존합니다.)</p>
                        </li>
                     </ul>
                  </div>
                  <div className="privacy_agree_wrap mb_80">
                     <input
                        id="privacy_agree"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                        type="checkbox"
                     />
                     <label className="xl:text-17 text-13" htmlFor="privacy_agree">
                        개인정보 수집 및 이용에 대한 동의 (필수)
                     </label>
                  </div>
               </div>
               <button className="btn_submit xl:text-18 text-14 font-bold xl:mt-80 mt-42" type="submit">
                  문의하기
               </button>
            </fieldset>
         </form>
      </Container>
   )
}