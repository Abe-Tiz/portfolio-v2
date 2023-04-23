import React from 'react'
import { 
    HeroContent, 
    StyledHerosection,
    StyledArrowDown,
    HeroSocialIcons,
    SocialIcon
} from '../styles/section/herosection.styles'
import { CTAButton } from '../styles/commen/CTAButton.styles';
import {FaArrowDown, FaFacebook, FaGithub, FaTwitter} from "react-icons/fa"
const Herosection = () => {
  return (
    <React.Fragment>
      <StyledHerosection >
        <HeroContent>
            <h1>Abebe Tizazu</h1>
            <h3>Fronntend Web Developer</h3>
            <p>{" { HTML . CSS . javascript . ReactJs } "}</p>
            <React.Fragment>
                <CTAButton href='#projects'> Projects </CTAButton>
                <CTAButton href='#contact' primary margin="0 0 0 28px"> Hire Me </CTAButton>

            </React.Fragment>
        </HeroContent>
        <StyledArrowDown href='#about'>
            <FaArrowDown />
        </StyledArrowDown>

        <HeroSocialIcons>
            <SocialIcon href='#' target='_blank'>
                <FaFacebook />
            </SocialIcon>
            <SocialIcon href='#' target='_blank'>
                <FaGithub />
            </SocialIcon>
            <SocialIcon href='#' target='_blank'>
                <FaTwitter />
            </SocialIcon>
        </HeroSocialIcons>
      </StyledHerosection>

    </React.Fragment>
  )
}

export default Herosection
