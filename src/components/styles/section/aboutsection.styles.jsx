import styled,{keyframes} from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;

const wave = keyframes`
    0%{
        transform: rotate(0deg);
    }
    10%{
        transform: rotate(14deg);
    }
    20%{
        transform: rotate(-8deg);
    }
    30%{
        transform: rotate(14deg);
    }
    40%{
        transform: rotate(-4deg);
    }
    50%{
        transform: rotate(10deg);
    }
    60%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

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
export const DarkCircle = styled.div`
    height: 309px;
    width: 309px;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    background:   ${({theme}) => theme.colors.navyBlue};
      
`;

export const GradiantCircle = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    animation:  ${rotate} 5s linear infinite;
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.green} 50%,
        ${({theme}) => theme.colors.white} 75%,
        ${({theme}) => theme.colors.purple} 100%

    );
      
`;

export const AboutContent = styled.div`
   font-size: 20px;
   flex-grow: 1;
   flex-shrink: 1;
   flex-basis: 0;
   margin-bottom: 45px;

   p{
    margin: 25px 15px;
    font-size: 20px;
    font-family: "Poppis",sans-serif;
    text-align: justify;
   }
`;

export const Emoji = styled.span`
    display: inline-block;
    animation: ${wave} 3s infinite;

`

export const Heading = styled.h1`
    margin-bottom: 10px;
    font-size: 30px;
`;
 



