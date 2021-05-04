import React from 'react'
import AfricaImg from '../../image 1/africa 1.svg'
import {
    RegionalPresence,
    PresenceTxt,
    PresenceImg
} from './PresenceStyle'

const Presence = () => {
    return (
        <RegionalPresence>
            <PresenceTxt>
                <h2>Our Regional Presence</h2>
                <p>Commodo commodo duis est et nulla. Lorem in amet non excepteur eu magna fugiat ex nisi eu dolor in eiusmod. Ad ipsum consequat ex velit amet.</p>
            </PresenceTxt>
            <PresenceImg>
                <img src={AfricaImg} alt="africa"/>

            </PresenceImg>
            
        </RegionalPresence>
    )
}

export default Presence
