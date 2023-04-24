import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 5px 0;
  

  @media screen and (max-width:768px) {
    flex-direction: column;
    align-items: center;
     
     
  }

`;

export const ImageContainer = styled.div`
    height: 320px;
    width: 320px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    position: relative;
    /* background-color: red; */

    @media screen and (max-width:768px) {
        margin-bottom: 7px;
    }
    
`;

export const Image = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
`;

export const GradiantCircle = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    background: ${({theme}) => theme.colors.orange};
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.green} 50%,
        ${({theme}) => theme.colors.purple} 100%,

    );
`;

export const AboutContent = styled.div`
   font-size: 20px;
   flex-grow: 1;
   flex-shrink: 1;
   flex-basis: 0;
   p{
    margin: 25px 15px;
   }
`;

export const Heading = styled.h1`
    margin-bottom: 10px;
    font-size: 30px;
`;
 



