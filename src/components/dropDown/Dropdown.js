import React from 'react'
import {Link} from 'react-router-dom'
import{
    menuData,
    menuDataThree
} from '../../data/NavLinks'
import{
    Logo,
    DropdownContainer,
    DropdownLinks,
    DropdownLinksThree,
    BackDrop
} from './DropdownStyles'
import logoImg from '../../image 2/logo.png'

const Dropdown = ({isOpen, toggle, Switch}) => {
    return (
        <>
        <DropdownContainer onClick={toggle} isOpen={isOpen}>
            <DropdownLinks>
                <Logo >
                    <img src={logoImg} alt="logoImg"/>
                </Logo>
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
