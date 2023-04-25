import React from 'react'
import { BannerSection, StyledTopBanner } from '../styles/layout/TopBanner.styles'

const TopBanner = () => {

  return (
    <>
        <StyledTopBanner >
            <BannerSection showOnMobiles>
              <a href="mailto:abebetizazu157@gmail.com"> 📧 abebetizazau157@gmail.com</a>
            </BannerSection>

            <BannerSection>
              <a href="#mycourse"> ❤️ My Course</a>
            </BannerSection>

            <BannerSection>
              🚣. Avialable for Hire 
            </BannerSection>
        </StyledTopBanner>
    </>
     
  )
}

export default TopBanner
