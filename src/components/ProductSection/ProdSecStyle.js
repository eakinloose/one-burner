import styled from 'styled-components'
export const ProdSectionWrapper = styled.div`
    z-index: 30;
    background: white;
    width:100%;
    padding-bottom: 3rem;
    padding-top: 2.8rem;
    animation: fade-in 0.3s ease-in;
    display: ${({isClicked}) => (isClicked? 'block' : 'none')};
    position: absolute;
`

export const ProductSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem 4rem;
    grid-column-gap: 3rem;

    span{
        display: inline-block;
        padding-bottom: 25px;
        color: #462686;
        cursor: pointer;
        font-size:13px;
        font-weight: bolder;
    }

    img{
        height: 20px;
        margin-right: 30px;
        transform: translateY(4px)
    }

    p{
        font-size: 13px;
        width: 90%;
        color: gray;
    }

    @media screen and (max-width: 770px){
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
    }

`
export const BackDrop = styled.div`
    width: 100%;
    height: 400%;
    background: rgba(0, 0, 0, 0.8);
    display: ${({isClicked}) => (isClicked? 'block' : 'none')};
    position: absolute;
    z-index: 2;
    cursor: pointer;
`