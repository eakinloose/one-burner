import React from 'react'
import {Link} from 'react-router-dom'
import{
    menuData,
    menuDataThree
} from '../../data/NavLinks'
import{
    DropdownContainer,
    DropdownLinks,
    DropdownLinksThree,
    BackDrop
} from './DropdownStyles'

const Dropdown = ({isOpen, toggle, Switch}) => {
    return (
        <>
        <DropdownContainer onClick={toggle} isOpen={isOpen}>
            <DropdownLinks>
                <p onClick={Switch}>Product</p>
                {menuData.map((item, index)=>{
                return(
                    <p key={index}><Link to={item.link}>{item.title}</Link> </p>
                )
            })}
            </DropdownLinks>
            <hr/>
            <DropdownLinksThree>
                {menuDataThree.map((item, index)=>{
                return(
                    <p  key={index}><Link to={item.link}>{item.title}</Link></p>
                )
            })}
            </DropdownLinksThree>
        </DropdownContainer>
        <BackDrop onClick={toggle} isOpen={isOpen}/>
        </>
    )
}

export default Dropdown
