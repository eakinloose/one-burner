import styled from 'styled-components'

export const CEOText = styled.div`
    padding:  4rem;
    padding-bottom: 6rem;
    width: 80%;
    text-align: center;
    margin: auto;
    color: gray;
    line-height: 1.5rem;
    font-size: 12px;

    @media screen and (max-width:799px){
        width: 100%;
    }
`

export const ImgDiv = styled.div`
    width: 90%;
    text-align: center;
    margin: auto;

    img{
        height: 110px;
    }

    @media screen and (max-width: 550px){
        hr{
            display: none;
        }

        img{
            height: 150px;
            padding-bottom: 1rem;
            transform: none;
        }
    }
`

export const CeoAbout = styled.div`
    display: flex;
    margin: auto;
    background: white;
    width: 300px;
    justify-content: space-around;
    transform: translateY(-50%);

    h2{
        font-size: 15px;
    }

    p{
        font-size: 13px;
        color: gray;
    }
    
    @media screen and (max-width: 550px){
        display: block;
    }
`

export const Abt = styled.div`
    align-self: center;
`