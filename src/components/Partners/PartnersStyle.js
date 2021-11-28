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
        width: 100%;
        grid-template-columns: repeat(8, 1fr);
        margin: -30px auto 10px;

        img{
            height: 26px;
            margin-bottom: 1.5rem;
        }
    }
`