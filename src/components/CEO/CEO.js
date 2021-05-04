import React from 'react'
import ceo from '../../image 1/Ellipse 5.png'
import {
    CEOText,
    ImgDiv,
    CeoAbout,
    Abt
} from './CEOStyles'

const CEO = () => {
    return (
        <>
        <CEOText>
            Minim non excepteur anim. Ex veniam non culpa voluptate quis aliquip est quis exercitation Lorem pariatur. Deserunt consequat consectetur exercitation nulla et. Velit velit tempor ipsum do magna occaecat non dolor cillum dolore non. Laborum anim ullamco eu magna fugiat veniam est exercitation incididunt est aute ullamco anim.
        </CEOText>
        <ImgDiv>
            <hr/>
            <CeoAbout>
                <img src={ceo} alt="ceo"/>
                <Abt>
                    <h2>Kemi Hassan</h2>
                    <p>CEO, Sahara Inc.</p>
                </Abt>
            </CeoAbout>
        </ImgDiv>
            
        </>
    )
}

export default CEO
