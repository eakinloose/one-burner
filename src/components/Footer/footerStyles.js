import styled, {css} from 'styled-components/macro'

export const FooterWrapper = styled.div`
    /* position: relative; */
    background: white;
    padding: 50px 3rem 0px;
    /* bottom:0; */
    /* position: fixed; */

    @media screen and (max-width: 770px){
        padding: 50px 1rem 0px;
    }
`
export const FooterTop = styled.div`
    width: 100%;
    margin-bottom: 10px;

    select {
    padding: 7px 20px;
    top: 5px;
    border-radius: 10px;
    border:#462686 solid;
    float: right;
    position: relative;
    right:10px;

    }
    img{
    height:60px;
    left: 10px;
    position: relative;
    }
`;
export const FooterMid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: minmax(100px, auto);

`
export const FooterLeft = styled.div`
    grid-column: 1/3;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h4,p{
        margin-bottom: 30px;
    }
    h4{
        font-size: 15px;
    }
    p{
        font-size: 14px;
        color: #4545459f;
    }

    @media screen and (max-width: 770px){
        grid-column: 1/6;
        align-items: center;
    }
`

export const ContactIcons = styled.div`
    img{
        padding-right: 5px
    }
`
export const FooterRight = styled.div`
    grid-column: 3/6;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    h4{
        color: #000;
        font-size: 13px;
    }

    li{
        display: block;
        font-weight: 100;
        margin: 15px;
        font-size: 12px;
        color: #4545459f;
    }

    @media screen and (max-width: 770px){
        grid-column: 1/6;
        grid-template-columns: repeat(2, 1fr);
    }
`
export const footerListStyle = css`
    display: block;
    font-weight: 100;
    margin: 15px;
    font-size: 12px;
    color: #4545459f;
`
export const FooterList = styled.div`
    ${footerListStyle}
`
export const FooterListTwo = styled.div`
    ${footerListStyle}
`
export const FooterListThree = styled.div`
    ${footerListStyle}
`
export const FooterListFour = styled.div`
    ${footerListStyle}
`
export const FooterBottom = styled.div`
    margin: 20px 0px;
    color: #4545459f;
    font-size: 12px;

    @media screen and (max-width: 770px){
        text-align: center;
    }

`