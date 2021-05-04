import React from 'react'
import avatar1 from '../../image 2/Group 32.svg'
import ellipse from '../../image 3/Vector 1.svg'
import avatar2 from '../../image 2/Group 34.svg'
import { 
    SectionWrapper,
    SectionWrapperTwo
} from './DemoSectionStyles'

const DemoSection = () => {
    return (
        <>
            <SectionWrapper>
                <img className="avatar1" src={avatar1} alt="avatar1"/>
                <img className="ellipse" src={ellipse} alt="ellipse"/>
                <img className="avatar2" src={avatar2} alt="avatar2"/>
            </SectionWrapper>
            <SectionWrapperTwo>
                <h2>Modern solution built for your enterprise growth</h2>
                <p>Centralize your team in a secure, flexible and managed platform</p>
                <button>Request a demo</button>
            </SectionWrapperTwo>
        </>
        
    )
}

export default DemoSection
