import React from 'react'
import {
    FooterContainer, 
    FooterNav
 } from '../styles/layout/footer.styles'

const Footer = () => {
  const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

  ]

  return (
    <>
      <FooterContainer>
          
           <FooterNav>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contacts</a>
           </FooterNav>
           <div>
              &copy; April 2022 - April  { months[new Date().getDate()]} {new Date().getFullYear()}
           </div>
      </FooterContainer>
    </>
  )
}

export default Footer
