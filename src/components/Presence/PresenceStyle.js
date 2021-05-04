import styled from 'styled-components'

export const RegionalPresence = styled.div`
    background: #eee;
    text-align: center;
    padding: 3rem;
`

export const PresenceImg = styled.div`
    height: 50%;

    img{
        height: 400px;
    }

    @media screen and (max-width:850px){
        img{height: 300px}
    }

    @media screen and (max-width:550px){
        img{height: 250px}
    }
`

export const PresenceTxt = styled.div`
    width: 55%;
    margin: auto;



    p{
        color: gray;
        padding: 1.5rem 1rem;
        font-size: 13px;
        line-height: 1.5rem;
    }
    
    @media screen and (max-width:550px){
        width: 100%;
    }
`