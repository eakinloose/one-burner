import styled, {css} from 'styled-components/macro'

const SecContent  = css`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }
  h2{
    margin-bottom: 20px;
    font-size: clamp(15px, 2.5vw, 30px);
    font-weight: lighter;
  }
  p{
    line-height: 20px;
    font-size:13px;
    color: #4545459f;
  }

  img{
    width: 45%;
  }
`
export const SecOneContent  = styled.div`
  ${SecContent}
`
export const SectionTwoContent  = styled.div`
  ${SecContent}
  margin-top: 150px;
`
export const SectionThreeContent  = styled.div`
  ${SecContent}
  margin-top: 100px;

`
export const SectionFourContent  = styled.div`
  ${SecContent}
  margin-top: 20px;

`
export const SectionFiveContent  = styled.div`
  ${SecContent}
  margin-top: 100px;

`
export const SectionSixContent  = styled.div`
  ${SecContent}
  margin-top: 100px;

`
export const Head = styled.div`
  width: 100%;
  text-align:  center;

  h3{
      margin: 50px 0px;
      text-align: center;
      font-weight: lighter;
    }
`

export const LastSection = styled.div`
  background: #7837F8;
  width: 100%;
  padding: 5rem;
  text-align: center;
  color: white;
  margin-top: 50px;

  button{
    background: #462686;
    border: none;
    border-radius: 35px;
    padding: 15px 25px; 
    color: white;
    cursor: pointer;
    font-size: clamp(10px, 2vw, 12px);
  }
  h2, p{
    padding-bottom: 20px;
  }

`