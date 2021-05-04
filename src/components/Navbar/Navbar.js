import React from 'react'
import {Link} from 'react-router-dom'
import { menuData, menuDataTwo } from '../../data/NavLinks'
import logoImg from '../../image 2/logo.png'
import {
    Nav,
    Logo,
    NavLinksOne,
    NavLinksTwo,
    MenuBars
} from './NavbarStyles'

const Navbar = ({Switch, Remover, toggle}) => {
    return (
        <Nav>
            <Logo >
                <Link onClick={Remover} to="/"><img src={logoImg} alt="logoImg"/></Link>
            </Logo>
            <NavLinksOne> 
                <h4 onMouseOver={Switch}>products</h4>
                {menuData.map((item, index)=>{return(
                    <p onClick={Remover} key={index}><Link className="Nav" to={item.link}>{item.title}</Link></p>
                )})}
            </NavLinksOne>
            <NavLinksTwo>
                {menuDataTwo.map((item, index)=>{return(
                    <p onClick={Remover} key={index}>{item.title}</p>
                )})}
                <button>Try For Free</button>
            </NavLinksTwo>
            <MenuBars onClick={toggle}></MenuBars>
        </Nav>
    )
}

export default Navbar
