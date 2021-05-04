import styled from 'styled-components'

export const SectionWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 0.5rem 2rem;
    display: grid;
    grid-template-columns: repeat(11, 1fr);

    .avatar1{
        grid-column: 1/2;
        height: 160px;
        margin-top:300px;
        transform: translateX(40px)
    }
    .ellipse{
        grid-column: 2/11;
        width: 115%;
        transform: translateX(-5%)
    }
    .avatar2{
        grid-column:11/12;
        height: 160px;
        margin-top: 80px;
        transform: translateX(-40px)
    }

    @media screen and (max-width:1025px){
        .avatar1{
            margin-top:230px;
            transform: translateX(10px) 
        }
        .avatar2{
            margin-top: 70px;
            transform: translateX(10px)
        }
    }
    
    @media screen and (max-width:980px){
        .avatar1{
            height: 140px;
            margin-top:200px;
            transform: translateX(-50px) 
        }
        .avatar2{
            height: 140px;
            transform: translateX(40px);
        }
        .ellipse{
        grid-column: 2/11;
        width: 160%;
        transform: translateX(-20%)
        }
    }

    @media screen and (max-width:700px){
        .avatar1{
            height: 110px;
            margin-top:170px;
            transform: translateX(-40px) 
        }
        .avatar2{
            height: 110px;
            margin-top: 50px;
            transform: translateX(35px);
        }
    }
    
    @media screen and (max-width:550px){
        .avatar1{
            height: 90px;
            margin-top:120px;
            transform: translateX(-40px) 
        }
        .ellipse{
        grid-column: 2/11;
        width: 190%;
        transform: translateX(-30%);
        height: 120px;
        }
        .avatar2{
            height: 90px;
            margin-top: 30px;
            transform: translateX(35px);
        }
    }

    @media screen and (max-width:400px){
        .avatar1{
            height: 70px;
            margin-top:190px;
        }
        .ellipse{
        display: none;
        }
        .avatar2{
            height: 70px;
            margin-top: 0px;
            transform: translateX(41px)
        }
    }

`

export const SectionWrapperTwo = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    text-align: center;
    margin: auto;
    align-items: center;
    margin-top: -330px;

    h2{
        font-size: clamp(15px, 2.5vw, 60px);
        color: #462686;
    }
    p{
        color: gray;
        padding: 1.0rem;
        font-size: clamp(11px, 2vw, 13px);
    }
    button{
        background: #462686;
        border: none;
        border-radius: 35px;
        padding: 18px 40px; 
        color: white;
        cursor: pointer;
        font-size: clamp(10px, 2vw, 12px);


    }
    @media screen and (max-width: 985px){
        margin-top: -270px;
        width: 50%;

        button{
            padding: 12px 25px;
        }
    }
    @media screen and (max-width: 700px){
        width: 60%;
        margin-top: -200px;
    }
    @media screen and (max-width: 550px){
        width: 65%;
        margin-top: -155px;

        button{
            padding: 10px 20px;
        }
        p{
            padding: 0.6rem;
        }
    }
    @media screen and (max-width: 400px){
        margin-top: -205px;
    }
`