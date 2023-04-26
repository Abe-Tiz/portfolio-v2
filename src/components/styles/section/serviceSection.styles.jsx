import styled from "styled-components";

export const ServiceContainer = styled.section`
  min-height: 90vh;
  padding: 10px 0 5px 0;
  width: 100%;
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
    font-size: 20px;
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