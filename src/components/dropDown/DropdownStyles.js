import styled from 'styled-components'

export const DropdownContainer =  styled.div`
  display: none;

  @media screen and (max-width: 769px){
    background:  white;
    display: ${({isOpen}) => (isOpen? 'block' : 'none')};
    animation: fade-in 0.3s ease-in-out;
    width: 50%;
    right: 0;
    position: absolute;
    border-radius: 0px 0px 0px 20px;
    z-index:50;

    @keyframes fade-in {
      from {
        transform: translateY(-2.5rem);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`
export const DropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    display: block;
    align-self: flex-end;
    padding: 20px;
    color: #462686;
    font-size: 13px;
    font-weight: bolder;
    cursor: pointer;
  }
`
export const DropdownLinksThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    display: block;
    align-self: flex-end;
    padding: 20px;
    color: #462686;
    font-size: 13px;
    font-weight: bolder;
    cursor: pointer;
  }
`
export const Logo = styled.div`
  height: 50px;

  img{
    height: 50px;
  }
`
export const BackDrop = styled.div`
display: none;

@media screen and (max-width: 769px){
  width: 100%;
  height: 300vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${({isOpen}) => (isOpen? 'block' : 'none')};
  position: absolute;
  z-index: 45;
  cursor: pointer;
}
`