import styled from 'styled-components';

// styles
const PaginationWrap = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   border-top: 2px solid var(--sub_color01);
`
const BtnPage = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   color: var(--subColor01);
   &.on{
      border-radius: 50%;
      color: #fff;
      background-color: var(--subColor01);
   }
`

export default function PageControl({ data, pageIndex, setPageIndex, loading }) {

   const prevClick = () => {
      data.current_page > 1 && setPageIndex(data.current_page - 1);
   }
   const nextClick = () => {
      data.current_page < data.last_page && setPageIndex(data.current_page + 1);
   }
   const handleClick = (label) => {
      setPageIndex(label)
   }

   return (
      <PaginationWrap className="xl:mt-40 mt-30 xl:mb-110 mb-80">
         {loading ? (
            <div style={{ backgroundColor: 'red' }} className="h-105">Loading ...</div>
         ) : (
            data.links.map((links, index) => (
               links.label === "&laquo; Previous" ? (
                  <li key={index} data-index={index}>
                     <BtnPage onClick={() => { prevClick() }} className="control_btn">
                        <i className="xi-angle-left-min xl:text-20 text-14"></i>
                     </BtnPage>
                  </li>
               ) : links.label === "Next &raquo;" ? (
                  <li key={index} data-index={index}>
                     <BtnPage onClick={() => { nextClick() }} className="control_btn">
                        <i className="xi-angle-right-min xl:text-20 text-14"></i>
                     </BtnPage>
                  </li>
               ) : (
                  <li key={index} data-index={index}>
                     <BtnPage onClick={() => { handleClick(links.label) }} className={`control_btn pagination xl:text-16 text-14 ${index === parseInt(pageIndex) ? "on" : ""}`}>{links.label}</BtnPage>
                  </li>
               )
            ))
         )
         }
      </PaginationWrap>
   )
}