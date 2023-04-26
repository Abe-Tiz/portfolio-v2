import styled from "styled-components";

export const ProjectsSection = styled.section`
    min-height: 90vh;
    padding: 10px 0 5px 0;
    width: 100%;   
`;
export const SingleProject = styled.div`
    display: flex;
    align-items: center;
    padding:0.2rem  0.2rem;

    &:nth-child(even){
        flex-direction: row-reverse;
        

        a{
        img{
            transform: rotateY(-30deg);

        }
        div{
            transform: skew(3deg, -3deg) rotateY(-30deg);

        }

        &:hover{
            img{
                transform: rotateY(0deg);
            }

            div{
                transform: skew(-3deg, 3deg) rotateY(0deg);
            }
        }

    }
    }
    
    @media screen and (max-width:768px) {
        display: inline-block;
        font-size: 25px;

        &:nth-child(even){
        flex-direction: column;
        

        a{
            img{
            transform: rotateY(0deg);
            }

            div{
            transform: skew(3deg, -3deg) rotateY(0deg);
            }

        &:hover{
            div{
                transform: skew(-3deg, 3deg) rotateY(0deg);
            }
        }

    }
    }
    }
  
     

`;

export const ProjectImageContainer = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
   position: relative;
   perspective: 1000px;
   margin-right: -.1rem;

    img{
        width:70%;
        border-radius: 20px;
        transform: rotateY(30deg);
        transition: ${({theme}) => theme.transition};
        z-index: 3;
    }

   &:hover{
    img{
        transform: rotateY(0deg);
    }

    div{
        transform: skew(-3deg, 3deg) rotateY(0deg);
    }
   }

   @media screen and (max-width:768px) {
        margin: .2rem ;
        width: 100%;
        justify-content: flex-start;

        img{
            transform: rotateY(0deg);
            width: 80%;
            border-radius: 9px;
        }
        div{
            transform: skew(3deg, -3deg) rotateY(0deg);
            }
    }

   
`;

export const SlantedCard = styled.div`
    position: absolute;
    width: 70%;
    height: 100%;
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.purple} 100%

    );
    
    border-radius: 20px;
    transition:${({theme}) => theme.transition};
    transform: skew(3deg, -3deg) rotateY(30deg);
    z-index: 2;

    @media screen and (max-width:768px) {
        transform: skew(3deg, -3deg) rotateY(-30deg);
        width: 80%;
        border-radius: 9px;
    }

`;

export const ProjectDescription = styled.div`
 flex: 1;
 font-size: 20px;
 
 h1{
    font-size: 30px;
    margin: 0 0 25px 0;
    text-align: justify;
    background: linear-gradient(
        to right,
        ${({theme}) => theme.colors.orange} 0%,
        ${({theme}) => theme.colors.white} 50%,
        ${({theme}) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 }

 p{
    font-size: 20px;
    font-family: "Proppins",sans-serif;
    text-align: justify;
    margin-bottom: 15px;
 } 

 div{
    display: flex;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        margin: 3px 15px 3px 0;
        font-size: 15px;
        
        svg{
            margin-right: 10px;
        }

    }
 }
`;

export const Tags = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-bottom: 3px;

   span{
     margin: 5px ;
     background: #0e213c;
     display: inline-block;
     padding: 7px;
     border-radius: 10px;
     font-size: 17px;
   }
`;