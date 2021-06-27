import styled, {css} from 'styled-components/macro'

const SecContent  = css`
  width: 89%;
  display: flex;
  margin: auto;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 7px;
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
    object-fit: cover;
  }
`
export const SecOneContent  = styled.div`
  ${SecContent}

`
export const SectionTwoContent  = styled.div`
  ${SecContent}
  margin-top: 70px;
`
export const SectionThreeContent  = styled.div`
  ${SecContent}
  margin-top: 60px;

`
export const SectionFourContent  = styled.div`
  ${SecContent}
  margin-top: 20px;

`
export const SectionFiveContent  = styled.div`
  ${SecContent}
  margin-top: 70px;

`
export const SectionSixContent  = styled.div`
  ${SecContent}
  margin-top: 70px;

`
export const Head = styled.div`
  width: 70%;
  text-align:  center;
  margin: auto;

  h3{
      margin: 50px 0px;
      text-align: center;
      font-weight: lighter;
      font-size: 17px;
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
  p{
    font-size: 13px;
  }
  h2{
    font-size: 17px;
  }

`