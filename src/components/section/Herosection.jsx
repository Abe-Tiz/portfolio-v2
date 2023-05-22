import React from 'react'
import { 
    HeroContent, 
    StyledHerosection,
    StyledArrowDown,
    HeroSocialIcons,
    SocialIcon
} from '../styles/section/herosection.styles'
import { CTAButton } from '../styles/commen/CTAButton.styles';
import {FaArrowDown,   FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa"
const Herosection = () => {
  return (
    <div>
      <StyledHerosection id='hero-section'>
        <HeroContent>
            <h1>Abebe Tizazu</h1>
            <h3>Fronntend Web Developer <br/>And Mobile App </h3>
            <p>{" { HTML | CSS | javascript | ReactJs | Bootstrap} "}</p>
            <div>
                <CTAButton href='#projects'> Projects </CTAButton>
                <CTAButton href='#contact' primary margin="0 0 0 28px"> Hire Me </CTAButton>

            </div>
        </HeroContent>
        <StyledArrowDown href='#about'>
            <FaArrowDown />
        </StyledArrowDown>

        <HeroSocialIcons>
            <SocialIcon href='https://t.me/abiye1921' target='_blank'>
                <FaTelegram />
            </SocialIcon>
            <SocialIcon href='https://github.com/Abe-tiz/' target='_blank'>
                <FaGithub />
            </SocialIcon>
            <SocialIcon href='https://et.linkedin.com/in/abebe-tizazu-56a92923b' target='_blank'>
                <FaLinkedin />
            </SocialIcon>
        </HeroSocialIcons>
      </StyledHerosection>

    </div>
  )
}

export default Herosection
