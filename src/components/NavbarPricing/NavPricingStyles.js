import styled from 'styled-components'

export const PriceingNavigation = styled.div`
  border: 2px solid #462686;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 70px auto;
  padding: 15px 40px;
  border-radius: 5px;
  font-size: 13px;

  .Nav-price:focus {
    color: #462686;
    font-weight: bolder;
  }

  @media screen and (max-width: 750px){
    padding: 10px 9px;
    font-size: 10px;
  }
`