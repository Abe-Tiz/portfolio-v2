 import styled,{keyframes} from "styled-components";

const typing = keyframes`
 75%{
    width: 0ch;
 }
 100%{
    width: 24ch;
 }
`;
const blink = keyframes`
 0%{
    border-right: 3px solid rgba(255,255,255,0);
 }
 100%{
    border-right: 3px solid  rgba(255,255,255,1);
 }
`;

const bounce = keyframes`
 0% ,20%, 50%, 80%, 100%{
   transform: translateY(0);
 }
 40%{
    transform: translateY(-30px);
 }
 60%{
    transform: translateY(-15px);

 }
  
`;

const rotate = keyframes`
    from{
        transform:rotate(0);
    }
    to{
        transform:rotate(360deg);
    }
`;

export const StyledHerosection = styled.section`
  width: 100%;
  height: 90vh;
  margin-top: 48px;
  background: linear-gradient(
    135deg,
    rgba(0,64,77,0.9) 0%,
    rgba(2,12, 27,0.8) 100%
  ), url("/images/landing-page.png") center no-repeat;
  background-size: contain;
  position: relative;
  display:flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const HeroContent = styled.div`
    width: 100%;
    max-width: 50rem;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    font-size: 14px;

    h1{ 
        letter-spacing: 10px;
        font-size:20px;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        width: 24ch;
        margin:auto;
        animation: ${typing} 5s steps(24), ${blink} 1s ease-in-out 8s infinite;
        border-right: 3px solid rgba(255,255,255, 1);
    }

    h3{
        font-size: 40px;
        margin: 10px 0;
        background: linear-gradient(
            to right,
            ${({theme}) => theme.colors.orange} 0%,
            ${({theme}) => theme.colors.purple} 100%
        );
        background-clip: text;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 22px;
        font-weight: 400;
        text-transform: none;
    }

    div{
        margin: 35px 0;
    }

    @media screen and (max-width:768px){
        h1{
            letter-spacing: 5px;
            font-size: 15px;
            width: 20ch;
        }
        h3{
            font-size: 28px;
        }
        p{
            font-size: 15px;
        }
        
    }
`;

export const StyledArrowDown= styled.a`
    position: absolute;
    bottom: 50px;

    svg{
        font-size: 30px;
        color: ${({theme}) => theme.colors.white};
        animation: ${bounce} 2s infinite 3s;

        &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.colors.orange} ;
       }
    }
`;

export const HeroSocialIcons= styled.div`
    position: fixed;
    right: 30px;

    @media screen and (max-width:768px) {
        bottom: 50px;
    }
`;
export const SocialIcon = styled.a`
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: rgba(249, 105, 14, 0.1);
    cursor: pointer;
    font-size: 20px;
    margin-top: 15px;
    color:rgb(106, 29, 179);
    transition: all .3s ease-in-out;
    &:hover{
       animation: ${rotate} 1.5s linear infinite;
       color: ${({theme})=> theme.colors.white};
    }

    @media screen and (max-width:768px) {
        height: 15px;
        width: 15px;
    }
`;