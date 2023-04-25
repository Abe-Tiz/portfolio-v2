import styled,{keyframes,css} from "styled-components";


const navItemKeyFade =keyframes`
    from{
       opacity: 0;
       transform: translate(50px);
    }
    to{
        opacity: 1;
        transform: translate(0px);
    }
`;
const navItemAnimation = ({ index }) => css`
    animation:${navItemKeyFade} 0.5s ease forwards ${index /6 + 0.5}s ;
 `;


export const Nav = styled.div`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(2,12,27,0.8);
    position: fixed;
    z-index: 98;
    transition: all 1s ease-in-out;
    top:${({scrollDirection}) => scrollDirection ==="down" ? "-88px" : "48px"}
`;

 
export const Logo = styled.img`
    width: 56px;
    height: 56px;
    position:relative;
    top: -39px;
    border-radius: 50%;
    cursor: pointer; 
    box-shadow: 2px 2px 15px ${({theme}) => theme.colors.green};
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    background: ${({theme, menuOpen}) => menuOpen ? theme.colors.lightNavyBlue : "none"};
    padding: 2px 8px;
    margin: -2rem .5rem;
    border-radius: 5px;
    height: 56px;
    display: none;
    position: absolute;
    right: -75px;
    z-index: 999;
    transition: ${({theme}) => theme.transition};


    @media screen and (max-width:768px){
       display:block ;
    }
`;
export const LineOne=styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        rgba(246,185,14,1) 0%,
         rgba(255,255,255,1) 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({menuOpen}) => menuOpen ? "rotate(-45deg) translate(-8px,6px) scaleX(2) " : "none"};
`;
export const LineTwo=styled.div`
    width: 30px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        rgba(246,185,14,1) 0%,
         rgba(255,255,255,1) 100%
    );
    opacity:${({menuOpen}) => menuOpen ? 0 : 1};
    transition: ${({theme}) => theme.transition};
    
`;
export const LineThree=styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    margin-left:15px;
    background: linear-gradient(
        135deg,
        rgba(246,185,14,1) 0%,
        rgba(255,255,255,1) 100%
    );
    transform: ${({menuOpen}) => menuOpen ? "rotate(45deg) translate(-15px,6px) scaleX(2) " : "none"};
    transition: ${({theme}) => theme.transition};
`;

export const NavList=styled.ul`
    display: flex;
    align-items:center;
    justify-content: flex-end;
    font-size: 15px;
    flex-wrap: wrap;

    @media screen and (max-width:768px){
       width: 1.3rem;
       height: 100vh;
       background: ${({theme}) => theme.colors.lightNavyBlue};
       position: fixed;
       right:  ${({menuOpen}) => menuOpen ? "0" : "-1.3rem"};
       top: 0;
       padding-top: 24px;
       justify-content: flex-start;
       align-items: center;
       flex-direction: column;
       z-index: 998;
       transition: ${({theme}) => theme.transition};
    }
`;

export const NavItem= styled.li`
   margin: 0.1rem 0.2rem ;

   &:last-child{
    margin-right: 0;
   }
   @media screen and (max-width:768px){
    ${({menuOpen}) => menuOpen ? {navItemAnimation} : null};

   }
`;

export const NavLink=styled.a`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: 1.5;
  cursor: pointer;

  &:after{
    content: "";
    display: block;
    height: 3px;
    width: 0;
   background: ${({theme}) => theme.colors.orange};
   transition: all .3s ease-in-out;

  }

  &:hover{
    &::after{
        width: 100%;
    }
  }
`;

export const Profile= styled.div`
    display: none;
    
    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            height :.7rem ;
            width: .7rem;
            border: 50%;
            display: block;
            border-radius: 50%;
            padding:13px ;
        } 
    }

`;
 

export const SocialIcons= styled.div`
    
    display: none;

    @media screen and (max-width:768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 150px;

        a{
           margin:0 12px;
            font-size:.2rem;
        }
    }
`


