import React from 'react'
import { HelpSectionData } from '../../data/imageData';
import Awardimg from '../../image 2/Award.png'
import {
    HelpSection,
    HelpContent,
    HelpPar,
    CheckedSection,
    CheckedLine,
    Award,
    AwardTxt
} from './HelpStyle'

const Help = () => {
    return (
        <>
            <HelpSection>
                <h2>How Oneburner help enterprise grow</h2>
                <HelpContent>
                    <HelpPar>
                        <p id="text">Oneburner software solution helps yourbusiness by creating an enabling environment for easy communication and feedback in real time. Oneburner brings all your user and teams in a single place with 99.9% uptime SLA and Data security </p>
                    </HelpPar>
                    <CheckedSection>
                        {HelpSectionData.map((item, index)=>{
                            return(
                            <CheckedLine key={index}>
                                <img src={item.image} alt={item.alt} /><p>{item.text}</p>
                            </CheckedLine>
                            )
                        })}
                    </CheckedSection>
                </HelpContent>
            </HelpSection>
            <Award>
                <img src={Awardimg} alt="awardimg"/>
                <AwardTxt>
                    <h2>Best Collaboration Software</h2>
                    <p>Africa tech coallision award 2020 </p>
                </AwardTxt>
            </Award>
        </>
    )
}

export default Help;