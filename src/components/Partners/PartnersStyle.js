import styled from 'styled-components'

export const PartnersSection = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(11, 1fr);

    img{
        height: 40px;
        margin-bottom: 4rem;
        justify-self: center;
    }

    @media screen and (max-width: 990px){
        img{
            height: 35px;
        }

    }
    @media screen and (max-width:600px){
        grid-template-columns: repeat(6, 1fr);

        img{
            height: 30px;
            margin-bottom: 2rem;
        }
    }
`