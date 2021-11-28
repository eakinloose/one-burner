import styled from "styled-components";

export const PricingTopWrapper = styled.div`
   width: 100%;
   display: flex;
   padding: 2rem;
   justify-content: space-between;
   align-items: center;
   margin-bottom: -90px;

   img {
      height: 120%;
   }

   @media screen and (max-width: 799px) {
      display: flex;
      flex-direction: column-reverse;
      img {
         height: 80vw;
      }
   }
`;
export const PricingTopLeft = styled.div`
   width: 40%;
   padding-left: 2.5rem;

   h1 {
      font-size: clamp(15px, 2.5vw, 45px);
      color: #462686;
      margin-bottom: 15px;
   }
   p {
      color: gray;
      font-size: 13px;
      margin-bottom: 15px;
   }
   button {
      background: #462686;
      border: none;
      border-radius: 35px;
      padding: 18px 40px;
      color: white;
      cursor: pointer;
      font-size: clamp(10px, 2vw, 12px);
   }
   @media screen and (max-width: 799px) {
      width: 90%;
      text-align: center;
      margin: 0;
      padding: 2rem 0 3rem;

      button{
        padding: 10px 40px;
      }
   }
`;
