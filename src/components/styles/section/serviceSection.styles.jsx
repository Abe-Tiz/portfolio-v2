import styled from "styled-components";

export const ServiceContainer = styled.section`
  min-height: 90vh;
  padding: 10px 0 5px 0;
  width: 100%;
  margin-bottom: 100px;
`;

export const ServicesItems = styled.div`
    display: flex;
   

    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`;

export const SingleServices = styled.div`
    min-height: 300px;
    border-radius: 8px;
    background: rgba(4,28,44,1);
    /* font-size: 20px; */
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: all 300ms ease-in-out;
    padding: .1rem;
    margin: .4em .3rem;

    &:hover{
        transform: translateY(-15px);
    }

   
    

    h1{
        font-size: 30px;
        margin: 10px 0;
        background: linear-gradient(
            to right,
            ${({theme}) => theme.colors.orange} 0%,
            ${({theme}) => theme.colors.purple} 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p{
            font-size: 20px;
            font-family: "Poppins",sans-serif;
        }
         

        @media screen and (max-width:768px) {
            width: 100%;
            margin: 30px 0 30px 0;
        }


`;

export const IconWrapper = styled.div`
  display: flex;
  font-size:30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: ${({theme}) => theme.colors.navyBlue};
  background:${({theme}) => theme.colors.white} ;
  border-radius:27% 73% 73% 27% / 20% 24% 76% 80%   ;
`;