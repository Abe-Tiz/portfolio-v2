import React,{useState} from 'react'
import {FaFacebook, FaGithub, FaTwitter} from "react-icons/fa"
import { 
    Logo, 
    Nav,
    MenuIcon,
    LineOne,
    LineTwo,
    LineThree,
    NavList,
    NavItem,
    NavLink,
    Profile,
    SocialIcons 
    
 } from '../styles/layout/navbar.styled'
import { NavItems } from '../../data/navbarItems';
import { CTAButton } from '../styles/commen/CTAButton.styles';
import useScrollDirection from '../../hooks/UseScrollDirection';
  const Navbar = () => {
  
    const [menuOpen,setMenuopen]=useState(false);
    const scrollDirection = useScrollDirection("down");
 
    const handleClick= () =>{
        setMenuopen(!menuOpen);
    }
  return (
    <>
    <Nav scrollDirection={scrollDirection} >
 
            <a href="#hero-section">
                <Logo src='/images/logo.png'/>
             </a>
         
        <MenuIcon menuOpen={menuOpen} onClick={handleClick}>
           <LineOne menuOpen={menuOpen}/>
           <LineTwo menuOpen={menuOpen}/>
           <LineThree menuOpen={menuOpen}/>
        </MenuIcon>
         
        <NavList menuOpen={menuOpen} >
            {NavItems && 
              NavItems.map((navitem,index) =>(
                <NavItem 
                   key={index}
                   menuOpen={menuOpen} 
                   onClick={handleClick}
                >
                    {navitem.isProfile ? (
                        <NavLink>
                            <Profile>
                                <img src='/images/abiye.jpg' alt='profile-img'/>
                                <span>Abebe Tizazu</span>
                            </Profile>
                        </NavLink>
                    ): null}
                     

                    {/* navliks */}
                    {navitem.text ?
                    <NavLink href={navitem.href} >{navitem.text}</NavLink> :null }

                     {/* social icos */}
                     {navitem.hasSocialIcon ?  ( 
                    <SocialIcons>
                        <NavLink href="#" target='_blank'>
                            <FaFacebook /> 
                        </NavLink>
                        <NavLink href="#" target='_blank'>
                            <FaGithub />
                        </NavLink>
                        <NavLink href="#" target='_blank'>
                            <FaTwitter />
                        </NavLink>
                    </SocialIcons> 
                    ): null}

                    {navitem.hasCTA ? (
                        <CTAButton href='#' target='_blank'>
                         this.portfolio.course
                        </CTAButton> 
                    ) : null}  

                    
                </NavItem>
                 
            )) }
         </NavList>
         
    </Nav>
      
    </>
  )
}

export default Navbar
