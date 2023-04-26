import styled from "styled-components";

export const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 7px;

    h1{
        text-transform: uppercase;
        display: inline-block;
        font-size: 30px;
        margin: 45px 0 15px 0;
        position: relative;

        &::after {
          content:"" ;
          display: block;
          height: 4px;
          width: 50%;
          border-radius: 5px;
          background: ${({theme}) => theme.colors.purple};
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

    }

    p{
      font-family :"Poppins",sans-serif ;
      font-size: 20px;
      margin-bottom: 7px;
    }

    @media screen and (max-width:768px) {
        text-align: left;
    }
`;