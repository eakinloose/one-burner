import styled from "styled-components";

export const HelpSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #7837f8;
   color: white;
   padding: 90px 30px 120px;
   margin-top: 4rem;
   
   h2 {
       font-size: clamp(16px, 2vw, 60px);
       text-align: center;
       padding-bottom: 2rem;
    }
    p {
        font-size: 14px;
    }
    
    @media screen and (max-width: 550px) {
        padding: 1rem;
        padding-bottom: 90px;
        margin-top: 2.5rem;
   }
`;

export const HelpContent = styled.div`
   display: flex;
   justify-content: space-between;

   @media screen and (max-width: 800px) {
      display: grid;
      width: 80%;
   }

   @media screen and (max-width: 500px) {
      width: 90%;
   }
   @media screen and (max-width: 340px) {
      width: 100%;
   }
`;
export const HelpPar = styled.div`
   display: flex;
   width: 45%;
   align-items: center;
   justify-content: center;

   p {
      line-height: 25px;
   }

   @media screen and (max-width: 800px) {
      width: 100%;
      margin-bottom: 1.5rem;
      text-align: center;
   }
`;

export const CheckedSection = styled.div``;
export const CheckedLine = styled.div`
   padding: 0.5rem;
   display: flex;

   p {
      margin: 12px;
   }

   @media screen and (max-width: 600px) {
      padding: 0.2rem;
   }
`;
export const Award = styled.div`
   display: flex;
   justify-content: space-around;
   width: 45%;
   margin: auto;
   transform: translateY(-50%);
   background: white;
   box-shadow: 0.2px 2px 2px black;
   border-radius: 10px;
   padding: 0rem 3rem;

   img {
      height: 200px;
      max-width: 180px;
   }

   @media screen and (max-width: 900px) {
      width: 55%;
   }

   @media screen and (max-width: 790px) {
      width: 75%;
   }

   @media screen and (max-width: 550px) {
      flex-direction: column;

      img {
         height: 100px;
         max-width: 160px;
         align-self: center;
      }
   }
`;
export const AwardTxt = styled.div`
   display: flex;
   flex-direction: column;
   justify-items: center;
   justify-content: center;
   padding-bottom: 1rem;

   @media screen and (max-width: 550px) {
      text-align: center;

      h2 {
         padding-bottom: 1rem;
         font-size: 15px;
      }
   }
`;
