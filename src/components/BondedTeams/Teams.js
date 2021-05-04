import React from 'react'
import { imageDataOne } from '../../data/imageData'
import {
    TeamsWrapper,
    BondedTeams
} from './TeamsStyle'

const Teams = () => {
    return (
        <TeamsWrapper>
            <h4>Over 500+ companies bond teams together with Oneburner</h4>
            <BondedTeams>
                {imageDataOne.map((item, index)=>{
                    return(
                        <img src={item.image} key={index + item.alt} alt={item.alt} />
                    )
                })}

            </BondedTeams>
        </TeamsWrapper>
    )
}

export default Teams
