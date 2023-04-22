import styled from "styled-components";

 export const StyledTopBanner = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.navyBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  z-index: 99;

  @media screen and (max-width:768px) {
    justify-content: center;
  } 
 `;

 export const BannerSection = styled.div`
  font-family: "Poppins",sans-serif;
  font-size: 14px;
  font-weight: 400;
  
  @media screen and (max-width:768px){
      display: ${({ showOnMobiles }) => showOnMobiles ? "inline-block" : "none"};
  }

 `;