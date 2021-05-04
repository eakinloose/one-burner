import styled, {css} from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Logo = styled.div`
    width: auto;

    img{
        height: 60px;
        padding-right: 1rem;
    }

    @media screen and (max-width:770px){
        img{
            height: 55px;
        }
    }
`
export const MenuBars = styled(FaBars)`
    display: none;
    color: #462686;
    margin: 0px 10px;
    cursor: pointer;
    height: 60px;

    @media screen and (max-width: 769px){
        display: block;
    }
`
const NavStyle = css`
    display: flex;
    margin: 25px;
    font-size: 13px;
    font-weight: bolder;
    
    @media screen and (max-width:770px){
        display: none;
    }
`
export const NavLinksOne = styled.div`
    ${NavStyle};
    width: 30%;
    transform: translateX(-20%);
    justify-content: space-between;

    p{
        cursor: pointer;
    }
`
export const NavLinksTwo = styled.div`
    ${NavStyle};
    
    @media screen and (max-width: 960px){
        grid-column: 8/12;
    }

    p{
        cursor: pointer;
        margin-right: 40px;
    }

    button{
        height: 30px;
        padding: 7px 30px;
        transform: translateY(-7px);
        border-radius: 20px;
        border: none;
        background: #462686;
        color:#ffffff;
        cursor: pointer;
    }
`