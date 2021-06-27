import styled from 'styled-components'

export const TeamsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9.5rem;

    h4{
        width: 50%;
        text-align: center;
        margin: 1rem 0rem 1rem;
        font-size: clamp(10px, 2vw, 17px);
    }
    @media screen and (max-width: 985px){
        margin-top: 6rem;
    }
    @media screen and (max-width: 700px){
        margin-top: 4rem;
    }
    @media screen and (max-width: 550px){
        margin-top: 3rem;
    }
    @media screen and (max-width: 400px){
        margin-top: 4.5rem;
    }
`
export const BondedTeams = styled.div`
    display: flex;
    width:90%;
    justify-content: space-around;

    img{
        height: clamp(22px, 4vw, 80px)
    }

    @media screen and (max-width:285px){
        width: 90%;

        img{
            height: 18px;
        }
    }

`